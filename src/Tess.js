import React from 'react';
import styled from 'styled-components';

import Tile from "./tile";
import Sprite from "./sprite";
import sideAnimation from "./assets/index.png";
import tess from "./assets/sprites/pipe.png"

const Container = styled.div`
    position: relative;
    left: 620px;
    top:200px;
`;

export default class Tess extends React.Component{
    render(){
        return(
            <Container>
                <Sprite
                   src={tess}
                   states = {1}
                   tile={{width: 1131, height:1764}}
                   scale={0.2}
                   framesPerStep={1}
                   />
                   
            </Container>
        );
    }
}