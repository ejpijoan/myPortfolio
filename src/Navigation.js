import './Navigation.css';
import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar className='Navbar' bg='white'>
                <Container className='justify-content-end'>
                    <Nav className='flex-column'>
                            <Navbar.Brand href="/">Emiko</Navbar.Brand>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/portfolio">Work</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>    
        )
    }
}

export default Navigation