import React from 'react';
import PropTypes from 'prop-types';
import './board.css';
import FlipCard from './flipcards/flipcard';
import { Button } from '@material-ui/core';

import Elevator from './elevator.png';
import Escalator from './escalator.png';
import Ladder from './ladder.png';
import Stairs from './stairs.png';

const options = ['Elevator', 'Ladder', 'Car', 'Paper', 'Laptop', 'Chair', 'Escalator', 'Phone', 'Stairs', 'Bus'];
const answers = {'Elevator':true, 'Ladder':true, 'Escalator':true, 'Stairs':true, 'Car':false, 'Paper':false, 'Laptop':false, 'Chair':false, 'Phone': false, 'Bus':false};
const rightAns = ['Elevator', 'Ladder', 'Escalator', 'Stairs'];
const rightAnsToo = [{id:1, item:"Elevator", back: Elevator},
                    {id:2, item:"Ladder", back: Ladder},
                    {id:3, item:"Escalator", back: Escalator},
                    {id:4, item:"Stairs", back: Stairs} ]


class PlayerBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected: {'Elevator':false, 'Escalator':false, 'Stairs':false, 'Ladder':false},
            answered: false,
            leave: true
        }
        this.turnOthers = this.turnOthers.bind(this);
    }

    optionItems = options.map((option) =>
    <li key={option} onClick={(e) => this.handleChange(option,e)}>
    {option}
    </li>
    );

    handleChange(someAnswer){
        console.log('this was clicked '+ someAnswer);
        let newSelected = this.state.selected;
        
        if(answers[someAnswer] && !this.state.answered){
                console.log('Its here');
                newSelected[someAnswer]=true
                this.setState({selected:newSelected, answered: true})
                setTimeout(this.turnOthers, 3000);
            }
            
    }

    turnOthers(){
        let nelected = {'Elevator':true, 'Escalator':true, 'Stairs':true, 'Ladder':true};
        console.log('Here now yo');
        this.setState({selected:nelected, answered: true})
    }
        

    
    
    render(){

        const cards = rightAnsToo.map((right)=><FlipCard front={right.item} backDisplay={right.back} reveal={this.state.selected[right.item]}>  </FlipCard>);
        return(
        <div>
        <div className="board">
         <div className="flipboard">
            {cards}
         </div>
        
        <h2> Which of the following items can help us move from the top floor of a building to the ground floor? </h2>
        <div className="flipcard">
        
            {this.optionItems}
        
        </div>
        </div>
        <a href="/together"><button>Done</button></a>
        </div>
        );
    }
}

//PlayerBoard.PropTypes = {
//    images: PropTypes.array.isRequired,
//    imageTags: PropTypes.array.isRequired,
//    optionsList: PropTypes.array.isRequired
    
//};

export default PlayerBoard;
