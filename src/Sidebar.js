import React from 'react';
import './Game.css';
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import GameOne from './images/game.jpeg';
import GameTwo from './images/game2.jpeg';
import GameThree from './images/game3.jpeg';


class SideBar extends React.Component{
    render(){
        return(
            <div className="menu">
            <br/>Student Dashboard <br/>
            <a className="menu-item" href="/invitePage">
            <AccountCircle/> &nbsp; Invites <span><b>1</b></span>
            </a>
            <a className="menu-item" href="/">
            <Games/> Modules
            </a>
            <a className="menu-item" href="/">
            <Report/>Progress
            </a>
            </div>
        );
    }
}

class DashBoard extends React.Component{
    render(){
    return(<div> 
        <SideBar/>
        <span className="dashboard">
         <h1> Welcome back, Diego! </h1></span>
         <h2>Suggested games</h2>
         <span className="image"><img src={GameOne} width="150px"/></span>
         <span className="image"><img src={GameTwo} width="150px"/></span>
         <span className="image"><img src={GameThree} width="150px"/></span>
         
    </div>);
    }
}
 
export default DashBoard;