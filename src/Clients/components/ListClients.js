import { Table, Button, Modal, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { deleteClient, editClient, selectValuesToOption } from '../services'
import Form from './Form'


const ListClients = ({ clients }) => {
  const [lgShow, setLgShow] = useState(false)
  const [data, setData] = useState()

  async function eliminateClient (id) {
    const response = await deleteClient(id)
    return response
  }

  async function windowAlert (id){
    if (window.confirm("Delete") === true){
      const responseDelete = await eliminateClient(id)

      if (responseDelete.status !== 200){
        window.alert("Client not found")
      }
    }
  }

  const handleSubmit = async (params) => {
    const response = await editClient(params)
    setLgShow(false)
  }

  async function setValues (client){
    const option = await selectValuesToOption(client.status)
    client.status = option
    setData(client)
  }

  return (
    <Container>
      <Table responsive="lg" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Status</th>
            <th>Created</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map(client => {
              return (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.firstName}</td>
                  <td>{client.lastName}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.age}</td>
                  <td>{client.status}</td>
                  <td>{client.created}</td>
                  <td>
                    <Button variant="warning" onClick={() => {setValues(client); setLgShow(true);}}>Edit</Button>
                    {"     "}
                    <Button variant="danger" onClick={() => windowAlert(client.id)}>Delete</Button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>

      <Modal show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleSubmit={handleSubmit} params={data} />
        </Modal.Body>
    </Modal>
  </Container>
  )
}

export default ListClients
