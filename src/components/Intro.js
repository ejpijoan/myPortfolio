import React, {Component} from 'react';
import styled from 'styled-components';

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
                <>
                        <h1 className='intro'>
                        Hi, My name is Emiko. I'm a <span style={{color: 'tomato', fontWeight: 'bold'}}>{this.state.roles[this.state.index]}</span>
                        </h1>
                </>
           )
        }    
}

export default Intro;