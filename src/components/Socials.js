import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

class Socials extends Component {
    constructor(){
        super();
        this.state = {
            email: 'em1kopi@gmail.com'
        }
    }
    
    render(){
        return (
            <div>
                <a href='https://www.linkedin.com/in/emiko-nagasawa-pijoan/'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                <br/>
                <a href='https://www.facebook.com/emiko.nagasawapijoan'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                <br/>
                <a href='https://github.com/Emi691'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <br/>
                <a href={`mailto:${this.state.email}`}><FontAwesomeIcon icon={['far', 'envelope']} /></a>
            </div>
        )
    }
}

export default Socials

