
import React from 'react';
import styled from "styled-components";


import './Game.css';
import Player from './player';
import Diego from './Diego';
import muzaq from './assets/knd.mp3';
import Bag from './assets/bag.svg';

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
    topPosition: 280,
    leftPosition: 700,
    dialogue: ['Hi there, Diego!',
    'I am so glad you are here. I could use your help',
    'We need to move this brick off the bag.',
    'I wonder if that hockey stick over there might be of use.'],
    show: false,
    options: false,
    modalState: false,
    skipShow: false,
  }

  showModal = e => {
    this.setState({
      modalState: !this.state.modalState,
      options: false
    });
  };
    handleClick = (event) => {

        const elemOffset = this.getElementById('my_audio');
        elemOffset.play();
}
 
   moveStick = (event) =>{
     this.setState({
       topPosition:400,
       leftPosition:300,
       show:true,
       dialogue: ["We can use this hockey stick as a simple machine."]
     });
   }

   question = (event) =>{
     this.setState({
       show: false,
       dialogue:["Do you know what a simple machine is?"],
       options: true
     })
   }
   
   answerEasier = (event) =>{
     this.setState({
       modalState:false,
       skipShow: true,
       dialogue:["That's right! Great job, Diego"]
     });
   }

   answerHarder = (event) =>{
    this.setState({
      modalState:false,
      skipShow: true,
      dialogue:["Not quite!", "Simple machines can be used to make work easier", "We can use them to lift heavy objects.", "We need to put in less effort when we use simple machines"]
    });
  }

  answerNotSure = (event) =>{
    this.setState({
      modalState:false,
      skipShow: true,
      dialogue:["Simple machines can be used to make work easier", "We can use them to lift heavy objects.", "We need to put in less effort when we use simple machines"]
    });
  }
    render() {
       return (
           <div>
            <div className="tower" style={{width: WIDTH, height:HEIGHT}}>
            <Modal onClose={this.showModal} show={this.state.modalState} title="Simple Machine">
          A simple machine makes work <br/>
          <button onClick={this.answerEasier}>Easier</button> <button onClick={this.answerHarder}>Harder</button> <button onClick={this.answerNotSure}>Not Sure</button>
        </Modal>
        <Container>
                    <div className={this.state.modalState?'hidden':''}><Player/></div>
                    <div className={this.state.modalState?'hidden':''}> <Diego /></div>
                </Container>               
                <span id="stick" style={{top: this.state.topPosition, left:this.state.leftPosition}} onClick={this.moveStick}></span>
                <span id="brick"> </span>
                <span id="bag"> </span>
            </div>
            <Typer dataText={this.state.dialogue}/>
            < a href="/endgame"><button className={this.state.skipShow?'':'hidden'}>Skip to End</button></a>
            <button className={this.state.show?'':'hidden'} onClick={this.question}>OK</button> 
            <div><button className={this.state.options?'':'hidden'} onClick={e => {
            this.showModal(e);
          }}>Yes</button> <button className={this.state.options?'':'hidden'}>No</button> </div>
            <Music song={muzaq}/>
            <span className='bag'/>

           

            </div>
        );
    }
}

export default Game;


