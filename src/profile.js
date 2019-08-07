import React from 'react';
import SideBar from './components/Sidebar/index';
import ProfileImg from './components/profile/index';

import musicIcon from './assets/music.png';
import robotIcon from './assets/robots.png';
import sportsIcon from './assets/sports.png';

import './Game.css';


class UserProfile extends React.Component{
    
    
    render(){

        const divStyle = {
            position: 'absolute',
            top: '140px',
            right: '20px' 
        };

        return(
            <div>
                <SideBar/>
                <span className="dashboard">
                    <ProfileImg/>
                    <div className="panelBoard">
                    <div className="panel">
                        <h4>Learning Styles</h4>

                        Kinesthetic
                        <div className="dt"><span className="db"> </span></div>

                        Auditory
                        <div className="dt"><span className="dd"> </span></div>


                        Visual
                        <div className="dt"><span className="dc"> </span></div>
                    </div>
                    <div className="panel"> 
                        <h4>Interests</h4>
                            
                            <div> <img src={robotIcon} width='40px'/> &emsp; Robotics </div>
                            <div> <img src={musicIcon} width='40px'/> &emsp; Music </div>
                            <div> <img src={sportsIcon} width='40px'/> &emsp; Sports </div>
                        
                    </div>    
         </div>
                    
                    <button style={divStyle}>Edit</button>
                </span>
            </div>
        );
    }
};

export default UserProfile; 

