import React, {Component} from 'react';
import styled from 'styled-components';

const Styles = styled.div`
        .intro {
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
        }
`;

class Intro extends Component {
        constructor() {
                super();
                this.state = {     
                index: 0,
                roles: ['full stack software engineer', 'biochemist', 'calligrapher', 'sewist'],
                };
        }

        componentDidMount = () => {
                setTimeout(this.currentRole,1500)
        }

        componentDidUpdate = () => {
                setTimeout(this.currentRole,1500)
        }

        currentRole = () => {
              this.setState(prevState => ({
                      index: ((prevState.index + 1)%prevState.roles.length),
              }))
        }
 
        render(){
           return (
                <div className='intro'>
                        <h1>
                        Hi, My name is Emiko. I'm a <span style={{color: 'tomato', fontWeight: 'bold'}}>{this.state.roles[this.state.index]}</span>
                        </h1>
                </div>
           )
        }    
}

export default Intro;