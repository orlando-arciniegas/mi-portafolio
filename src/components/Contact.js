import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

export default class Contact extends Component {
  render() {
    return (
    <React.Fragment>
      <Container style={{marginTop: '50px'}}>
        <Card body className='p-3' 
          style={{
            backgroundColor:'#D8E3E7',
            color: 'black',
            textAlign: 'center' 
          }}>Si te interesa contactarme, puedes usar cualquiera de estos medios y te respondere a la brevedad.
          <ul className='list-contacts'>
            <li><a href='https://www.linkedin.com/in/orlando-arciniegas/'><Icon.Linkedin /></a></li>
            <li><a href="mailto:orlandoarciniegas1508@gmail.com"><Icon.EnvelopePlus /></a></li>
            <li><a href='https://drive.google.com/file/d/1V5Wq0NpOfbOlc0Xov9vhdisz7QZzJsbI/view?usp=sharing'><Icon.FileEarmarkPersonFill /></a></li>
            <li><a href='https://github.com/orlando-arciniegas'><Icon.Github /></a></li>
          </ul>
          
          
          </Card>
      </Container>
    </React.Fragment>
    )
  }
}
