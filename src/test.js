import React from 'react';
import SideBar from './components/dashboard/dashboard'
import Scroller from './components/scroll/index';
import Board from './components/teamBoards/boardTwo';
import DragDrop from './components/dragDrop/dragDrop';

import styled from 'styled-components';

import Tile from "./components/sprites/tile";
import Sprite from "./components/sprites/sprite";
import sideAnimation from "./assets/index.png";
import bird from "./assets/sprites/bird.png"

const textSend = <div><p>Heyo wha's up errybody <br/> okay okay okyyy</p></div>

export default class Player extends React.Component{

    
    
    render(){
        return(
           <div>
             <Board/>
            </div>
        );
    }
}