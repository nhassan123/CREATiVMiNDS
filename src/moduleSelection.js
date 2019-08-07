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
         <h2>Team</h2>
         <div id="team">Diego S. Tess M. Harry P. Ann M.</div>
         <div><h2>Module</h2> Your team is a stranded on a high tower.<br/>
         A lesson on simple machines will give you clues needed to escape.</div>
         <br/> <br/>
         <h3>Top Pick for You</h3>
         <div><a href="/story"><img src={GameOne} width="300px" /></a> </div>
         <h3>More modules</h3>
         <div><img src={GameOne} width="300px" /> <img src={GameOne} width="300px" /> <img src={GameOne} width="300px" /> </div>
         <a href="/teamGame"><button> Go! </button></a>
        </div>
    </div>);
    }
}
 
export default DashBoard;