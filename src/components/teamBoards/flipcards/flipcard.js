import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class FlipCard extends React.Component{
    constructor(props){
        super(props),
        this.state={
            show: false
        }
    }
    
    render(){

        const frontDisplay = <p> </p>
        const backDisplay = <p>{this.props.backDisplay}</p>

        return(
            <div className="flip-card">
                <div className="flip-card-inner">
                    
                    <div className={this.props.reveal?"flip-card-back":"flip-card-front"}>
                        
                        {this.props.reveal?backDisplay:frontDisplay}
                                       
                    </div>
                    
                
                </div>
            
            
            </div>
        )
    }
}

export default FlipCard;