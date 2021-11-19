import './Navigation.css';
import React, {Component} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar className='navbar' bg='white'>
                <Container className='justify-content-end'>
                    <NavDropdown className='dropdown' title='dropdown'>
                        <NavDropdown.Item className='navlink' href="/">Emiko</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item className='navlink' href="/about">About</NavDropdown.Item>
                        <NavDropdown.Item className='navlink' href="/portfolio">Work</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>    
        )
    }
}

export default Navigation