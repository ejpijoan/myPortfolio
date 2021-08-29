import React, {Component} from 'react';
import TextLoop from 'react-text-loop';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                currentRole: '',
                roleNum: 0,
                };
        }
        componentDidMount = () => {
                this.changeRoles()
        }

        changeRoles = () => {
             setInterval(this.currentRole(), 1000)           
        }

        currentRole = () => {
                this.setState(prevState => {
                        return {
                                ...prevState,
                                currentRole: prevState.roles[prevState.roleNum],
                                rollNum: ((prevState.roleNum + 1) % prevState.roles.length),
                                }
                        }
                )
        }

        render(){
           return <h1>Hi, My name is Emiko. I'm a {this.state.currentRole}.</h1>     
        }      
}

export default Intro;