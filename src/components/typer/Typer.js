import React from 'react';
import PropTypes from 'prop-types';

import './typer.css';

class Typer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            loopNum: 0,
            typingSpeed:90,
          }
        
    }
    
    componentDidMount(){
      this.handleType();
    }
  
    handleType = () => {
      const{dataText} = this.props;
      const{text, loopNum, typingSpeed} = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      
      this.setState({
        text: fullText.substring(0, text.length +1),
      });
  
      //this.setState({
      //  text: fullText.substring(0, text.length +1)
      //});
     
      if(text===fullText){
          this.setState({loopNum: loopNum+1,
          text:''});
        
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
        
        //if(text != fullText.length || currString != dataText.length-1){
          setTimeout(this.handleType, typingSpeed);
        //}
        
    };
  
    render(){
      return(<div><center><div id="speech">
        <span>{this.state.text}</span>
        <span id="cursor"></span>
        </div>
        </center>
        </div>);
        
    }
  }

Typer.PropTypes = {
    dataText: PropTypes.array.isRequired
}; 

  export default Typer;