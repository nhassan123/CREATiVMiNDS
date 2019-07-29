import React from 'react';
import './Game.css';
import './modal.css';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';


class DashBoard extends React.Component{
    state = {
        show: true
      };

      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    
    render() {
      if(!this.state.show){
          return(<div>OKK</div>);}
      return(
       <div className="modal" id="modal">
         <h2>Modal Window</h2>
         <div className="content">Helotkess</div>
         <div class="actions">
            <button className="toggle-button" onClick={this.onClose}>X</button>
            </div>
       </div>);
    }
    
}


 
export default DashBoard;