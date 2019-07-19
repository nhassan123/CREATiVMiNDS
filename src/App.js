import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Animation from './components/animation';
import Game from './Game';
import Diego from './Diego';
import MiniGame from './miniGame';
import SideBar from './Sidebar';
import InvitePage from './invitePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <b>CREATiV MiNDS</b>
        </div>
             <Router>
             <Route exact path="/" component={LoginPage}/>
             <Route path="/dashboard" component={dashBoard}/>
             <Route path="/teamGame" component={TeamGame}/>
             <Route path="/hockeyGame" component={miGame}/>
             <Route path="/invitePage" component={InvitePage}/>
           </Router>
        
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
        USERNAME<br/> <input type="text"></input> <br/>
        PASSWORD<br/> <input type="text"></input> <br/>
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
