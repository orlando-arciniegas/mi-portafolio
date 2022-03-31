import React, { Component } from 'react'
import { Container, Accordion } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

export default class Experience extends Component {
  render() {
    return (
      <React.Fragment>
      <Container style={{marginTop: '3em', color: 'black'}} className="p-3">
    
        <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Digital House | Maquetador Front End </Accordion.Header>
            <Accordion.Body>
            <p>Octure 2021 - Actualidad</p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        
        <Accordion  className='mt-5'>
        <Accordion.Item eventKey="1">
          <Accordion.Header>ONG Somos más | Desarrollador Full Stack</Accordion.Header>
            <Accordion.Body>Julio - Septiembre 2021</Accordion.Body>
        </Accordion.Item>
        </Accordion>
       
      </Container>
    </React.Fragment>
    )
  }
}
