import React, {Component} from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects'

class Profile extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <About/>
                <Projects/>
            </div>
        )
    }
}

export default Profile