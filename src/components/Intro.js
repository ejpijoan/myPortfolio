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

        currentRole = () => {
              this.setState(prevState => ({
                      index: ((prevState.index + 1)%(prevState.roles.length - 1)),
                      currentRole: prevState.roles[prevState.index]
              }))
        }

        render(){
           return (
                <h1>
                Hi, My name is Emiko. I'm a {}/>
                </h1>
           )
        }      
}

export default Intro;