import React, {useState} from 'react'
import { Navbar,Nav, Container, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as Icon from 'react-bootstrap-icons';
export default function Home() {

  const [atHome, exitHome] = useState(true);

  return (
  <React.Fragment>
    <Navbar className='navbar'>
    <Container>
      <Navbar.Brand className="mx-auto">Orlando Arciniegas <Icon.PersonWorkspace /></Navbar.Brand>
    </Container>
    </Navbar>
  <Navbar className='navbar'>
    <Container>
    <Nav className="mx-auto">
    <LinkContainer to="/" onClick={e => atHome(true)}>
        <Nav.Link className='link-home'>Inicio</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/experience" onClick={e => exitHome(false)}>
        <Nav.Link>Experiencia</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/project" onClick={e => exitHome(false)}>
        <Nav.Link>Proyectos</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/contact" onClick={e => exitHome(false)}>
        <Nav.Link>Contacto</Nav.Link>
    </LinkContainer>
    </Nav>
    </Container>
  </Navbar>
  {
    atHome ? (
  <Container style={{marginTop: '3em'}}>
  <Card body className='p-3' 
  style={{
    backgroundColor:'#D8E3E7',
    color: 'black',
    textAlign: 'center'
  }}><span style={{color: '#51C4D3', fontSize: '1em'}}>{
  "<h1> "
  }</span>
  Bienvenido a mi portafolio
  <span style={{color: '#51C4D3', fontSize: '1em'}}>{
  " </h1>"
  }</span><br/><br/>
  <p>En esta sección te estare contando un poco sobre mí.</p>
  </Card>

  </Container>
    ) :
    ''
  }
  
  </ React.Fragment>
  )
}
