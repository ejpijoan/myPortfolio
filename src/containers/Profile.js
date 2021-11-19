import React, {Component} from 'react';
import './Profile.css';
import About from '../components/About';
import Projects from '../components/Projects';
import Socials from '../components/Socials';

class Profile extends Component {

    render() {
        return (
            <div>
                <About/>
                <Projects/>
                <Socials/>
            </div>
        )
    }
}

export default Profile