import React from 'react';
import SideBar from './components/dashboard/dashboard'

import styled from 'styled-components';

import Tile from "./components/sprites/tile";
import Sprite from "./components/sprites/sprite";
import sideAnimation from "./assets/index.png";
import bird from "./assets/sprites/bird.png"

const Container = styled.div`
    position: relative;
    left: 420px;
    top:150px;
`;

export default class Player extends React.Component{
    render(){
        return(
           <div>
            <Container>
                <Sprite
                   src={bird}
                   states = {3}
                   tile={{width: 36, height:26}}
                   scale={1.25}
                   framesPerStep={6}
                   />
                   
            </Container>
            </div>
        );
    }
}