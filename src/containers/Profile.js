import React, {Component} from 'react';
import Intro from '../components/Intro';
import About from '../components/About'

class Profile extends Component {
    render() {
        return (
            <div>
                <Intro/>
                <About/>
            </div>
        )
    }
}

export default Profile