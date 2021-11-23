import './Navigation.css';
import React from 'react'
import resume from './attachments/resume.pdf' 
import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap'

function Navigation () {
        return(
            <Navbar className='navbar' bg='light' expand={false}>
                <Container fluid>
                    <Navbar.Brand className='brand' href="/">Emiko</Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar' />
                    <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='NavbarLabel'>Emiko</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-end flex-grow-1 pe-3'>
                                <Nav.Link className='navlink' href="/about">About</Nav.Link>
                                <Nav.Link className='navlink' href="/portfolio">Work</Nav.Link>
                                <Nav.Link className='navlink' href={resume}>Resume</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>    
        )
}

export default Navigation