import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{marginTop: '50px'}}>
          <Card body className='p-3' 
          style={{
            backgroundColor:'#D8E3E7',
            color: 'black',
            textAlign: 'center'
          }}>Esta sección esta en construcción. <Icon.ConeStriped size={48} color={'#132C33'}/></Card>
        </Container>
    </React.Fragment>
    )
  }
}
