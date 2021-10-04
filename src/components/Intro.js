import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
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