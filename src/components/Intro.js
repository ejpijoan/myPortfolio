import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                redirect: false,        
                index: 0,
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        componentDidMount = () => {
                document.addEventListener('click', this.handleClick)
                setTimeout(this.currentRole,1500)
        }

        componentDidUpdate = () => {
                setTimeout(this.currentRole,1500)
        }

        componentWillUnmount = () => {
                document.removeEventListener('click', this.handleClick)
        }

        currentRole = () => {
              this.setState(prevState => ({
                      index: ((prevState.index + 1)%prevState.roles.length),
              }))
        }

        render(){
           if(this.state.redirect){
                return <Redirect push to='/profile' />
           } 

           return (
                <h1>
                Hi, My name is Emiko. I'm a {this.state.roles[this.state.index]}
                </h1>
           )
        }      
}

export default Intro;