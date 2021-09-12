import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

function Socials () {
    return (
        <div>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            <a href='https://www.linkedin.com/in/emiko-nagasawa-pijoan/'>LinkedIn</a>
            <br/>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <a href='https://www.facebook.com/emiko.nagasawapijoan'>Facebook</a>
            <br/>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <a href='https://github.com/Emi691'>Github</a>
        </div>
    )
}

export default Socials

