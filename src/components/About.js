import React from 'react' 
import styled from 'styled-components'
import Socials from '../components/Socials';
import Profile from '../attachments/profile.JPG'

const Styles = styled.div`
    .about{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .header{
        align-self: center;
    }

    .story{
        align-self: flex-start;
        text-align: left;
    }

    .profile{
        align-self: flex-end;
    }

    .links{
        align-self: flex-start;
    }
`;

export default function About () {
    return (
        <div>
            <h3 className='header'>About Me</h3>
            <div className='about'>
                <div style={{display: 'inline-block', width: '30px'}}><Socials className='links'/></div>
                <p className='story' style={{display: 'inline-block', width: '800px'}}>Full stack software engineer with a strong background in chemistry. I am proficient in Ruby and JavaScript (ES6) and have experience with Rails and React frameworks. I am also a graduate of the University of California at Santa Cruz, where I majored in chemistry with a biochemistry concentration.
                I am excited to be starting a new career path as a software developer. I am eager to learn new languages and skills and continue to grow as a programmer and a scientist. Using my background in biochemistry and my passion for creating innovative new applications I hope to be able to contribute to exciting advancements in a dynamic field.</p>
                <img className='profile' src={Profile} width='200' alt=''></img>
            </div>
        </div>
    )
}
