
import React from 'react';
import styled from "styled-components";


import './Game.css';
import Player from './player';
import Diego from './Diego';
import muzaq from './assets/knd.mp3';
import MiniGame from './miniGame'

const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;
const Container = styled.div`
  height: 50px;
`;


class Music extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(muzaq)
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Turn Off Sound' : 'Turn on Sound'}</button>
        </div>
      );
    }
  }

class Typer extends React.Component{
  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed:150,
  }

  componentDidMount(){
    this.handleType();
  }

  handleType = () => {
    const{dataText} = this.props;
    const{text, isDeleting, loopNum, typingSpeed} = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    
    this.setState({
      text: isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0, text.length +1),
      typingSpeed: isDeleting ? 10: 80
    });

    //this.setState({
    //  text: fullText.substring(0, text.length +1)
    //});
    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 500);   
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    /**
    if(text==fullText){
      setTimeout(() => this.setState({loopNum: loopNum+1, text:''}), 500);
      }
      else if (isDeleting && text === ''){
       this.setState({
          isDeleting: false,
          loopNum: loopNum +1
       }); */
      
      if(loopNum != fullText.length){
        setTimeout(this.handleType, typingSpeed);
      }
  };

  render(){
    return(<h2>
      <span>{this.state.text}</span>
      <span id="cursor"></span>
      </h2>);
  }
}
class Game extends React.Component {

    handleClick = (event) => {

        const elemOffset = this.getElementById('my_audio');
        elemOffset.play();
}

    render() {
       return (
           <div>
            <Music/>
            <div className="tower" style={{width: WIDTH, height:HEIGHT}}>
                <Container>
                    <Player/>
                    <Diego/>
                </Container>               
                <span><a href="hockeyGame">Click Here </a></span>
            </div>
            <div id="speech"><Typer dataText={['Hi there, Diego!',
      'I am so glad you are here. I could use your help',
      'We need to move this brick off the bag.',
      'I wonder if that hockey stick over there might be of use.']} /> </div>
            </div>
        );
    }
}

export default Game;


