import React, {Component} from 'react';

class Intro extends Component {
        constructor() {
                super();
                this.state = {
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist']
                }
        }
       

        render(){
           return <h3>Hi, My name is Emiko. I'm a full stack software engineer.</h3>     
        }      
}

export default Intro;