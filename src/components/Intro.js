import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                index: 0,
                currentRole: '',
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        componentDidMount = () => {
                this.setState(prevState => ({
                        currentRole: prevState.roles[0]
                }))
        }

        componentDidUpdate = () => {
                setTimeout(this.currentRole,1000)
        }

        currentRole = () => {
              this.setState(prevState => ({
                      index: ((prevState.index + 1)%(prevState.roles.length - 1)),
                      currentRole: prevState.roles[prevState.index]
              }))
        }

        render(){
           return (
                <h1>
                Hi, My name is Emiko. I'm a {this.state.currentRole}/>
                </h1>
           )
        }      
}

export default Intro;