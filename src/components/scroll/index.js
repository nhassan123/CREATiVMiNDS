import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


class Scroller extends React.Component{
    constructor(props){
        super(props);
    }
        
    render(){
        return(
            <div className="scroll-up">
            {this.props.scrollText}
            </div>
        )
    }
}

Scroller.PropTypes = {
    scrollText: PropTypes.string.isRequired
}; 

export default Scroller;