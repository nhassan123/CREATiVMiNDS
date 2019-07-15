
import React from 'react';
import styled from "styled-components";
import './Game.css';
import Player from './player';
import Diego from './Diego';
import Tess from './Tess';

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

                  
                
            </div>
        );
    }
}


export default Game;


