import React from 'react';
import PropTypes from 'prop-types';
import './board.css';
import FlipCard from './flipcards/flipcard';
import Modal from '../modal/modal';


const options = ['Elevator', 'Ladder', 'Car', 'Paper', 'Laptop', 'Chair', 'Escalator', 'Phone', 'Stairs', 'Bus'];
const answers = {'Elevator':true, 'Ladder':true, 'Escalator':true, 'Stairs':true, 'Car':false, 'Paper':false, 'Laptop':false, 'Chair':false, 'Phone': false, 'Bus':false};
const rightAns = ['Elevator', 'Ladder', 'Escalator', 'Stairs'];
const items = ['wheel', 'rope', 'weight', 'motor'];
const itemList = items.map((item) => <span>{item}</span>);
const answer = {'yes': 'That is correct! An elevator uses a pulley and a stong cable to move people up and down a building.'}

class TeamBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected: {'Elevator':true, 'Escalator':true, 'Stairs':true, 'Ladder':true},
            answered: false,
            leave: true,
            show: false,
            showAnswer: false
        }
        this.turnOthers = this.turnOthers.bind(this);
        this.answerYes = this.answerYes.bind(this);
        this.answerNo = this.answerNo.bind(this);
        
        
    }

    sendAlert(){
        alert('This is an alert box');
    }

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

    answerYes(){
        console.log('yes was oerede');
        this.setState({showAnswer: true});
        this.setState({show:false})
    }

    answerNo(){
        this.setState({show:false})
    }
            
     
    turnOthers(){
        let nelected = {'Elevator':true, 'Escalator':true, 'Stairs':true, 'Ladder':true};
        console.log('Here now yo');
        this.setState({selected:nelected, answered: true})
    }
        

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    
    render(){

        const cards = rightAns.map((right)=><FlipCard front={right} backDisplay={right} reveal={this.state.selected[right]}>  </FlipCard>);
        return(
        <div>
        <Modal onClose={this.showModal} show={this.state.showAnswer}>
                <h2> Explanation</h2>
                {answer['yes']}
        </Modal>
        <div className="board" id={this.state.showAnswer?'hidden':''}>
            <div className="flipboard">
                {cards}
            </div>
            
            <h2> Using the components your team has, what machine can you build to get from the top of tower to the ground? </h2>
            <div className="teamItems" id={this.state.show?'hidden': ''} onClick={e => {
            this.showModal(e);
          }}>
                {itemList}
            </div>
            <Modal onClose={this.showModal} show={this.state.show}>
                Tess picked <b>Elevator</b>. Do you agree? <br/>
                <button onClick={this.answerYes}>Yes</button> <button onClick={this.answerNo}>No</button>
            </Modal>
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

export default TeamBoard;
