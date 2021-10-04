import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        currentRole = () => {
              this.setState({
                      num: num++
              })  
              return this.state.roles[this.state.num]
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