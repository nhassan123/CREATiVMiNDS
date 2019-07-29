
import React from 'react';
import styled from "styled-components";


import './Game.css';
import Player from './player';
import Diego from './Diego';
import muzaq from './assets/knd.mp3';
import MiniGame from './miniGame';
import Typer from './components/typer/Typer';
import Music from './components/music/index';

const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;
const Container = styled.div`
  height: 50px;
`;
const words = ["HI there MAte", "Hello again"];



class Game extends React.Component {
  
  
  state = {
    topPosition: 380,
    leftPosition: 800,
    dialogue: ['Hi there, Diego!',
    'I am so glad you are here. I could use your help',
    'We need to move this brick off the bag.',
    'I wonder if that hockey stick over there might be of use.']
  }
    handleClick = (event) => {

        const elemOffset = this.getElementById('my_audio');
        elemOffset.play();
}
 
   moveStick = (event) =>{
     this.setState({
       topPosition:500,
       leftPosition:500
     });

     words= ["gonna tyr something new now", "why is this so hardddd", "this could have been simpler tbh"]
   }

    render() {
       return (
           <div>
            <Music song={muzaq}/>
            <div className="tower" style={{width: WIDTH, height:HEIGHT}}>
                <Container>
                    <Player/>
                    <Diego/>
                </Container>               
                <span id="stick" style={{top: this.state.topPosition, left:this.state.leftPosition}} onClick={this.moveStick}>Hockey Stick </span>
                <span id="brick">Brick </span>
                <span id="bag">Bag </span>
            </div>
            <Typer dataText={words} /> 

            </div>
        );
    }
}

export default Game;


