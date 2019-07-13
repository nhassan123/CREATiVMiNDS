import React, { Component } from 'react';
//import logo from '../static/persona.jpg';
import '../App.css';
//import myData from '../patients/patient1.json';
//mport CategoryCard from './CategoryCard'

//import Accordion from './components/Accordion';

class Animation extends React.Component{
  
  render(){

    return(
      <div>
    
      <img src="/characters/towerRoom.png" width = "100%" height="100%;"/>
      </div>);
}
}




class MainPage extends React.Component{
  render(){
    return(
      <div>
       <Animation/> 
           
      </div>
    );
  }
}

export default MainPage;