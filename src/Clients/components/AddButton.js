import React from 'react'
//import { Container, Section, Button } from 'react-bulma-components'
import { Container, Button } from 'react-bootstrap'

const AddButton = ({ onClick }) => {
  return (
    <Container>
      <div className="is-pulled-right">
        <Button onClick={onClick} color="primary">Add new client</Button>
      </div>
    </Container>
  )
}

export default AddButton
