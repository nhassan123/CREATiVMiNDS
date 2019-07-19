import React from 'react';
import './Game.css';
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import GameOne from './images/game2.jpeg';


class SideBar extends React.Component{
    render(){
        return(
            <div className="menu">
            <br/>Student Dashboard <br/>
            <a className="menu-item" href="/">
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
        <div className="dashboard">
         Tess has invited you to play <b>Escape the Tower!</b>
         <br/> <br/>
         <div><img src={GameOne} width="300px" /> </div>
         <a href="/teamGame"><button> Play </button></a>
        </div>
    </div>);
    }
}
 
export default DashBoard;