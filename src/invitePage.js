import React from 'react';
import './Game.css';
import SideBar from './components/Sidebar/index'
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import GameOne from './images/game2.jpeg';


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