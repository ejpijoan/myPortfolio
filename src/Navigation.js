import './Navigation.css';
import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar className='navbar' bg='white'>
                <Container className='justify-content-end'>
                    <Nav className='flex-column'>
                            <Navbar.Brand className='brand' href="/">Emiko</Navbar.Brand>
                            <Nav.Link className='navlink' href="/about">About</Nav.Link>
                            <Nav.Link className='navlink' href="/portfolio">Work</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>    
        )
    }
}

export default Navigation