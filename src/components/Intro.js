import React, {Component} from 'react';
import TextLoop from 'react-text-loop';

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
                Hi, My name is Emiko. I'm a 
                <TextLoop children={this.state.roles}/>
             </h1>
           )
        }      
}

export default Intro;