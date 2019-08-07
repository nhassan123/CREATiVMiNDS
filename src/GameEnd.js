
import React from 'react';
import styled from "styled-components";


import './Game.css';
import Player from './player';
import Diego from './Diego';
import muzaq from './assets/knd.mp3';
import MiniGame from './miniGame';
import Typer from './components/typer/Typer';
import Music from './components/music/index';
import Modal from './components/modal/modal';

const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;
const Container = styled.div`
  height: 50px;
`;
const words = ["HI there MAte", "Hello again"];
const display = <Typer dataText={words} />;


class Game extends React.Component {
  
  
  state = {
    topPosition: 380,
    leftPosition: 800,
    dialogue: ['Thanks for all your help, Diego!',
    'Together, we built a pulley to lift up this heavy bag.',
    'I can easily move it now!',
    ],
    showResponse: true,
    exit: false,
} 

    handleClick = (event) => {

        const elemOffset = this.getElementById('my_audio');
        elemOffset.play();
}
 
   response = (event) =>{
     this.setState({
       showResponse:false,
       exit: true,
       dialogue:["I want you to take this wheel with a curved edge.", "It will help you and your friends get out of the tower."]
     });
   }

   
    render() {
       return (
           <div>
            <div className="tower" style={{width: WIDTH, height:HEIGHT}}>
            
            <Container>
                    <div className={this.state.modalState?'hidden':''}><Player/></div>
                    <div className={this.state.modalState?'hidden':''}> <Diego /></div>
            </Container>               
                 <span id="wheelbarrow"/>
                 <span id="pulley" />
            </div>
            <Typer dataText={this.state.dialogue}/>
            <button className={this.state.showResponse?'':'hidden'} onClick={this.response}>Happy to help!</button>
            <a href= "/collab"><button className={this.state.exit?'':'hidden'} >Go back to your team</button></a> 
            <Music song={muzaq}/>

           

            </div>
        );
    }
}

export default Game;


