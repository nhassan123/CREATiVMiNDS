import React from 'react';
import styled from 'styled-components';

import Tile from "./tile";
import Sprite from "./sprite";
import sideAnimation from "./assets/index.png";
import diego from "./assets/sprites/Diego.png"

const Container = styled.div`
    position: relative;
    left: 120px;
    top:200px;
`;

export default class Diego extends React.Component{
    render(){
        return(
            <Container>
                <Sprite
                   src={diego}
                   states = {1}
                   tile={{width: 1131, height:1764}}
                   scale={0.2}
                   framesPerStep={1}
                   />
                   
            </Container>
        );
    }
}