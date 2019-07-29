import React from 'react';
import './Game.css';


import SideBar from './components/Sidebar/index'
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import GameOne from './images/game.jpeg';
import GameTwo from './images/game2.jpeg';
import GameThree from './images/game3.jpeg';


class DashBoard extends React.Component{
    render(){
    return(<div> 
        <SideBar/>
        <span className="dashboard">
         <h1> Welcome back, Diego! </h1>
         <h2>Suggested games</h2>
         <span className="image"><img src={GameOne} width="150px"/></span>
         <span className="image"><img src={GameTwo} width="150px"/></span>
         <span className="image"><img src={GameThree} width="150px"/></span>
        </span>
    </div>);
    }
}
 
export default DashBoard;