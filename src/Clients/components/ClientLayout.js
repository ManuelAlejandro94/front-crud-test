import React, { useState, useEffect } from 'react'
import { Modal, Container } from 'react-bootstrap'
import Header from './Header'
import AddButton from './AddButton'
import ListClients from './ListClients'
import Form from './Form'
import Loading from './Loading'
import { saveClient, getClients } from '../services'

const ClientLayout = () => {
  const [lgShow, setLgShow] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [clients, setClients] = useState()

  async function loadClients () {
    const response = await getClients()

    if (response.status === 200) {
      setClients(response.data.clients)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadClients()
  }, [])

  const handleSubmit = async (data) => {
    const response = await saveClient(data)
    loadClients()
    setLgShow(false)
  }

  return (
    <Container>
      <Header title="Clients app" />
      <AddButton onClick={() => setLgShow(true)} />
      {
        isLoading && <Loading />
      }

      {
        !isLoading && !clients.length && (
          <h2 className="title has-text-centered">
            You don't have clients yet
          </h2>
        )
      }

      {
        !isLoading && clients.length && <ListClients clients={clients} />
      }

      <Modal show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleSubmit={handleSubmit} />
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default ClientLayout
