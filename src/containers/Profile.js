import React, {Component} from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Socials from '../components/Socials';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            components: [<Intro/>]
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', this.handleClick)
    }

    componentDidUpdate = () => {
        document.removeEventListener('click', this.handleClick)
    }

    handleClick = () => {
        this.setState( prevState => ({
            components: [...prevState.components, <About/>, <Projects/>, <Resume/>, <Socials/>]
        }))
    }

    render() {
        return (
            <div>
                {this.state.components}
            </div>
        )
    }
}

export default Profile