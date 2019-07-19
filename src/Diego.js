import React from 'react';
import styled from 'styled-components';

import Tile from "./tile";
import Sprite from "./sprite";
import sideAnimation from "./assets/index.png";
import diego from "./assets/sprites/coachResize.png"

const Container = styled.div`
    position: relative;
    left: 120px;
    top:150px;
`;

export default class Diego extends React.Component{
    render(){
        return(
            <Container>
                <Sprite
                   src={diego}
                   states = {1}
                   tile={{width: 110, height:280}}
                   scale={1.5}
                   framesPerStep={1}
                   />
                   
            </Container>
        );
    }
}