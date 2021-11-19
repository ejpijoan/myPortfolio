import React, {Component} from 'react';
import './Profile.css';
import About from '../components/About';
import Socials from '../components/Socials';

class Profile extends Component {

    render() {
        return (
            <div>
                <About/>
            </div>
        )
    }
}

export default Profile