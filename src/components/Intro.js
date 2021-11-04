import '../css/Intro.css'
import React, {Component} from 'react';
import {Container} from 'react-bootstrap'

class Intro extends Component {
        constructor() {
                super();
                this.state = {     
                index: 0,
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        componentDidMount = () => {
                setTimeout(this.currentRole,1500)
        }

        componentDidUpdate = () => {
                setTimeout(this.currentRole,1500)
        }

        currentRole = () => {
              this.setState(prevState => ({
                      index: ((prevState.index + 1)%prevState.roles.length),
              }))
        }
 
        render(){
           return (
                <Container className='align-items-center'>
                        <h1 className='intro' contentEditable>
                        Hi, My name is Emiko. I'm a <span style={{color: 'tomato'}}>{this.state.roles[this.state.index]}</span></h1>
                </Container>
           )
        }    
}

export default Intro;