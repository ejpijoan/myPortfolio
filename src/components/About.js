import React from 'react' 
import '../css/About.css'
import {Container} from 'react-bootstrap'
import Socials from '../components/Socials';
import Profile from '../attachments/profile.JPG'


function About () {
    return (
        <div>
            <h3 className='header'>About Me</h3>
            <Container className='about'>
                <p className='story'>Full stack software engineer with a strong background in chemistry. I am proficient in Ruby and JavaScript (ES6) and have experience with Rails and React frameworks. I am also a graduate of the University of California at Santa Cruz, where I majored in chemistry with a biochemistry concentration.
                I am excited to be starting a new career path as a software developer. I am eager to learn new languages and skills and continue to grow as a programmer and a scientist. Using my background in biochemistry and my passion for creating innovative new applications I hope to be able to contribute to exciting advancements in a dynamic field.</p>
                <img className='profile' src={Profile} width='200' alt=''></img>
                <Socials className='links'/>
            </Container>
        </div>
    )
}

export default About