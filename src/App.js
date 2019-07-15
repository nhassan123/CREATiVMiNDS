import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import './App.css';
import Animation from './components/animation';
import Game from './Game';
import Diego from './Diego';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>CREATiV MiNDS</h1>
        </div>
          <Router>
             <Route exact path="/" component={gamePage}/>
             <Route path="/teamGame" component={TeamGame}/>
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

const LoginPage = () => {
  return(
    <div class="Login">
        USERNAME<br/> <input type="text"></input> <br/>
        PASSWORD<br/> <input type="text"></input> <br/>
        <a href="/teamGame"><button>LOGIN</button></a>
        
   
  </div> );
  }

  const TeamGame = () =>{
    return(
      <div>
          <Game/>
      </div>
    )
  }


export default App;
