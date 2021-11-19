import React, {Component} from 'react';
import '../css/Intro.css'
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

        roleStyle = () => {
                return {color: 'tomato', fontWeight: 'bold'}
        }
 
        render(){
           return (
                <Container className='container'>
                        <h1 className='intro'>
                        Hi, My name is Emiko. I'm a <span style={this.roleStyle()}>{this.state.roles[this.state.index]}</span>
                        </h1>
                </Container>
           )
        }    
}

export default Intro;