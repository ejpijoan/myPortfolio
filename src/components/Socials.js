import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export default function Socials () {
        return (
            <div>
                <a href='https://www.linkedin.com/in/emiko-nagasawa-pijoan/'><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                <br/>
                <a href='https://www.facebook.com/emiko.nagasawapijoan'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                <br/>
                <a href='https://github.com/Emi691'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <br/>
                <a href={`mailto:em1kopi@gmail.com`}><FontAwesomeIcon icon={['far', 'envelope']} /></a>
            </div>
        )
}


