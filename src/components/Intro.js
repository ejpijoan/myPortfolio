import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                index: 0,
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        componentDidMount = () => {
                this.setState(prevState => ({
                        currentRole: prevState.roles[0]
                }))
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
                <h1>
                Hi, My name is Emiko. I'm a {this.state.roles[this.state.index]}
                </h1>
           )
        }      
}

export default Intro;