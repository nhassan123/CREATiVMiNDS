import React from 'react';
import './Game.css';
import SideBar from './components/Sidebar/index'
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';

import SportsGame from './assets/sportsRoom.png';
import RobotGame from './assets/robot.png';
import hospital from './assets/hospital.png';
import preschool from './assets/preschool.jpg';
import GameOne from './images/game2.jpeg';

import Diego from './assets/people/Diego.png';
import Ann from './assets/people/ann.png';
import Harry from './assets/people/harry.png';
import Tess from './assets/people/tess.png';



class DashBoard extends React.Component{
    render(){
    return(<div> 
        <SideBar/>
        <div className="dashboard">
         <h2>Team</h2>
         <div id="team">
            <span> <img src={Diego} className="pic" width="100px"/>Diego S. </span>
            <span> <img src={Tess} className="pic" width="100px"/>Tess M. </span>
            <span> <img src={Harry} className="pic" width="100px"/>Harry P. </span>
            <span> <img src={Ann} className="pic" width="100px"/>Ann M. </span> 
            </div>
         <div><h2>Module</h2> Your team is a stranded on a high tower.<br/>
         A lesson on simple machines will give you clues needed to escape.</div>
         <br/> <br/>
         <h3>Top Pick for You</h3>
         <div><a href="/story"><img src={SportsGame} width="300px" /></a> </div>
         <h3>More modules</h3>
         <div><img src={RobotGame} width="300px" /> <img src={hospital} width="300px" /> <img src={preschool} width="300px" /> </div>
         <a href="/teamGame"><button> Go! </button></a>
        </div>
    </div>);
    }
}
 
export default DashBoard;