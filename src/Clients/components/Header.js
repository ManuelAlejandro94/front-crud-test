import React from 'react'
import PropTypes from "prop-types";
//import { Container, Section } from 'react-bulma-components'
import { Container } from 'react-bootstrap'

const Header = ({ title }) => {
  return (
    <Container>
      <h1 className="title has-text-centered">{title}</h1>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header