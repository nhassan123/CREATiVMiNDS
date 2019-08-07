import React from 'react';
import SideBar from './components/Sidebar/index';
import ProfileImg from './components/profile/index';

import musicIcon from './assets/music.png';
import robotIcon from './assets/robots.png';
import sportsIcon from './assets/sports.png';

import './Game.css';


class Report extends React.Component{
    
    
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
                    Escape the Tower Completed! <br/>
                    Lesson: Introduction to Pulleys and Simple Machines <br/>

                    <div>
                        <h5>Correct Answers</h5>
                        <ul>
                            <li>Definition of simple machines </li>
                            <li>Applications of pulleys</li>
                        </ul>

                        <h5>Need More Practice</h5>
                        <ul>
                            <li>Components of pulleys </li>
                        </ul>
                            
         </div>
                    
                    <button style={divStyle}>Edit</button>
                </span>
            </div>
        );
    }
};

export default Report; 

