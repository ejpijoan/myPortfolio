import React, {Component} from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Socials from '../components/Socials';

class Profile extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <About/>
                <Projects/>
                <Resume/>
                <Socials/>
            </div>
        )
    }
}

export default Profile