import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Logo from './tempLogo.png';
import Animation from './components/animation';
import Game from './Game';
import Diego from './Diego';
import MiniGame from './miniGame';
import SideBar from './Sidebar';
import InvitePage from './invitePage';
import Test from './test';
import ModuleSelection from './moduleSelection';
import Story from './storyline';
import GameEnd from './GameEnd';
import TeamBoard from './components/teamBoards/board';
import Collab from './Collab';
import BoardTwo from './components/teamBoards/boardTwo';
import Profile from './profile';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


class App extends Component {

  state = {
    show:false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="App">
       
        <AppBar>
        <div className="App-header">
          <a href="/dashboard"><img src={Logo} height="80px"></img></a> <b>CREATiV MiNDS</b>
          </div>
        
        
        </AppBar>
        <div id="body">
             <Router>
             <Route exact path="/" component={LoginPage}/>
             <Route path="/dashboard" component={dashBoard}/>
             <Route path="/teamGame" component={TeamGame}/>
             <Route path="/hockeyGame" component={miGame}/>
             <Route path="/invitePage" component={InvitePage}/>
             <Route path="/modSelect" component={ModuleSelection}/>
             <Route path="/story" component={Story}/>
             <Route path="/collab" component={TeamBoard}/>
             <Route path="/together" component={Collab} />
             <Route path="/togetherAgain" component={BoardTwo}/>
             <Route path="/modal" component={Test}/>
             <Route path="/endgame" component={GameEnd} />
             <Route path="/profile" component={Profile} />
           </Router>
           </div>  
       </div>
    );
  }
}

const gamePage = () => {
  return(
    <Game></Game>
  );
}

const dashBoard = () => {
  return(
    <SideBar/>
  );
}

const LoginPage = () => {
  return(
    <div class="Login">
        <b>USERNAME</b><br/> <input type="text" value="DiegoS"></input> <br/>
        <b>PASSWORD</b><br/> <input type="text" value="*******"></input> <br/>
        <a href="/dashboard"><button>LOGIN</button></a>
        
   
  </div> );
  }

  const TeamGame = () =>{
    return(
      <div>
          <Game/>
      </div>
    )
  }

  const miGame = () =>{
    return(
      <div>HLEOELO
        <MiniGame></MiniGame></div>
    );
  }

export default App;
