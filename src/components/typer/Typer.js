import React from 'react';
import PropTypes from 'prop-types';

import './typer.css';

class Typer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            currString: 0,
            typingSpeed:150,
          }
        
    }
    
    componentDidMount(){
      this.handleType();
    }
  
    handleType = () => {
      const{dataText} = this.props;
      const{text, currString, typingSpeed} = this.state;
      const fullText = dataText[currString];
  
      
      this.setState({
        text: fullText.substring(0, text.length +1),
      });
  
      //this.setState({
      //  text: fullText.substring(0, text.length +1)
      //});
     
      if(text===fullText){
        if(currString !== dataText.length){
          this.setState({currString: currString+1,
          text:''})
        }
      }

      /**
      if(text==fullText){
        setTimeout(() => this.setState({loopNum: loopNum+1, text:''}), 500);
        }
        else if (isDeleting && text === ''){
         this.setState({
            isDeleting: false,
            loopNum: loopNum +1
         }); */
        
        if(text != fullText.length || currString != dataText.length-1){
          setTimeout(this.handleType, typingSpeed);
        }
        
    };
  
    render(){
      return(<div id="speech">
        <span>{this.state.text}</span>
        <span id="cursor"></span>
        </div>);
    }
  }

Typer.PropTypes = {
    dataText: PropTypes.array.isRequired
}; 

  export default Typer;