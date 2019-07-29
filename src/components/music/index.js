import React from 'react';
import PropTypes from 'prop-types';


class Music extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            play: false,
        }
    }
    
    audio = new Audio(this.props.song)
  
   componentDidMount = () =>{
     this.audio.play();
   }

    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Turn Off Sound' : 'Turn on Sound'}</button>
        </div>
      );
    }
  }

  export default Music;