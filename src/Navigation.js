import React, {Component} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar bg='light'>
                <Container>
                    <Navbar.Brand href="/">Emiko</Navbar.Brand>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/portfolio">Work</Nav.Link>
                </Container>
            </Navbar>    
        )
    }
}

export default Navigation