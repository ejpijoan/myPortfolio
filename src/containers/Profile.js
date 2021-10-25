import React, {Component} from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Socials from '../components/Socials';

class Profile extends Component {

    render() {
        return (
            <div>
                <About/>
                <Projects/>
                <Resume/>
                <Socials/>
            </div>
        )
    }
}

export default Profile