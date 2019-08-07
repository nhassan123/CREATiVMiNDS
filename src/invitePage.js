import React from 'react';
import './Game.css';
import SideBar from './components/Sidebar/index'
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import GameOne from './assets/towerRoom.png';



class DashBoard extends React.Component{
    render(){
    return(<div> 
        <SideBar/>
        <div className="dashboard">
         <div><h2>Tess has invited you to play</h2> <h1>Escape the Tower!</h1>
         <br/> <br/>
         <div><img src={GameOne} width="600px" /> </div>
         <a href="/modSelect"><button> Play </button></a>
        </div></div>
    </div>);
    }
}
 
export default DashBoard;