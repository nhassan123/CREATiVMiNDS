
import React from 'react';
import styled from "styled-components";
import './Game.css';
import Player from './player';
import Diego from './Diego';
import sound from './assets/knd.mp3';

const CELL_SIZE = 20;
const WIDTH = 1200;
const HEIGHT = 600;
const Container = styled.div`
  height: 50px;
`;


class Game extends React.Component {



    render() {
       return (
            <div className="tower" style={{width: WIDTH, height:HEIGHT}}>
                <Container>
                    <Player/>
                    <Diego/>
                </Container>   
                <audio src={sound} id="my_audio" loop="loop" controls></audio>

                  
                
            </div>
        );
    }
}


export default Game;


