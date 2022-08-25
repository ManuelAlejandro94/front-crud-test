import React, { useState, useRef } from 'react'
import { Form as ReactForm, Button } from 'react-bootstrap'

const { Group, Control, Label, Select } = ReactForm

const Form = ({ handleSubmit, params = '' }) => {
  const [formValues, setFormValues] = useState({
    name: params.firstName,
    lastName: params.lastName,
    phone: params.phone,
    email: params.email,
    age: params.age,
    status: params.status,
    id: params.id,
  })

  const ControlFileRef = useRef()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    handleSubmit({ ...formValues })
  }

  return (
    <form onSubmit={_handleSubmit}>
      <Group>
        <Control 
            name="id"
            value={formValues.id}
            onChange={handleChange}
            style={{visibility: "hidden"}}
            readOnly
        />
      </Group>
      <Group>
        <Label>Name</Label>
        <Control 
          placeholder="Client's name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </Group>
      <Group>
        <Label>Last Name</Label>
        <Control
          placeholder="Client's last name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          required
        />
      </Group>
      <Group>
        <Label>Phone</Label>
        <Control
          placeholder="Client's Phone"
          type="number"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          minLength="10"
          maxLength="10"
          required
        />
      </Group>
      <Group>
        <Label>Email</Label>
        <Control
          placeholder="Client's email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </Group>
      <Group>
        <Label>Age</Label>
        <Control
          placeholder="Client's age"
          name="age"
          value={formValues.age}
          onChange={handleChange}
          required
        />
      </Group>
      <Group>
        <Label>Status</Label>
        <Select
          name="status"
          value={formValues.status}
          onChange={handleChange}
          required>
            <option value="0">Nuevo</option>
            <option value="1">No interesado</option>
            <option value="2">Número equivocado</option>
            <option value="3">Información equivocada</option>
            <option value="4">Alto potencial</option>
            <option value="5">Bajo potencial</option>
        </Select>
      </Group>
      <Button type="submit" color="primary">
        Save
      </Button>
    </form>
  )
}

export default Form
