import React, { Component } from 'react';
import './style.css';

import Wheel from './wheel.svg';
import Rope from './rope.svg';
import Box from './box.png';
import Motor from './motor.png';

export default class ToDoDragDropDemo extends Component {
    state = {
        objects: [
          {id: "1", item:"WHEEL", source: Wheel, type:"inDash", assignedTo:"Diego", seen:true},
          {id: "2", item:"ROPE", source: Rope, type:"inDash", assignedTo:"Tess",  seen:false},
          {id: "3", item:"BOX", source: Box, type:"inDash", assignedTo:"Harry",  seen:false},
          {id: "4", item:"MOTOR", source: Motor, type:"inDash", assignedTo:"Ann",  seen:false}
        ],
        player: 'Diego',
        text: 'Move your clue into the white box to share with your friends!',
        visible: false,
    }

    onDragStart = (event, item) => {
    	console.log('dragstart on div: ', item);
    	event.dataTransfer.setData("item", item);
	}
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let itemName = event.dataTransfer.getData("item");

	    let objects = this.state.objects.filter((object) => {
	        if (object.item == itemName) {
	            object.type = cat;
	        }
	        return object;
	    });

	    this.setState({
	        ...this.state,
	        objects
	    });
	}
    
    addClues = (event) => {
        let items = this.state.objects.filter((object)=> 
        {if(object.assignedTo === this.state.player){
            return object;}
        });

        if(items[0].type==="inDash"){
            this.setState({text: 'You have to move your clue into the box first'});
        }
        else{
            let newobjects = this.state.objects.filter((object) => {
                if (object.type === "inDash") {
                    object.type = "onDisplay";
                    object.seen = true;
                }
                return object;
            });
            this.setState({visible: true, objects: newobjects})
        }
    }

    render() {
		var tasks = {
	      onDisplay: [],
	      inDash: []
	    }

		this.state.objects.forEach ((object) => {
		  tasks[object.type].push(
		    <span key={object.id} 
		      onDragStart = {(event) => this.onDragStart(event, object.item)}
		      draggable
		      className="draggable"
		      id={object.seen?'':'hidden'}>
			  {object.item}
		      <img src={object.source} width="200px"/>
		    </span>
		  );
		});

	    return (
         <div className="drag-container">
	         <h1> {this.state.text}</h1>
            <div className="inProgress"
	    		onDragOver={(event)=>this.onDragOver(event)}
      			onDrop={(event)=>{this.onDrop(event, "onDisplay")}}>
	          <div className="group-header"></div>
	          {tasks.onDisplay}
	        </div>
	        <div className="droppable"
	        	onDragOver={(event)=>this.onDragOver(event)}
          		onDrop={(event)=>this.onDrop(event, "inDash")}>
	          <div className="group-header"></div>
	          {tasks.inDash}
	        </div>	      
            <button onClick={this.addClues} id={this.state.visible?'hidden':''}>Share</button>
            <a href="/togetherAgain"><button id={this.state.visible?'':'hidden'}>Go</button></a>  
	      </div>
	    );
      }
}