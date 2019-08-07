import React from 'react';
import './style.css';

import Img from './Diego.png';

class Profile extends React.Component{
    render(){
        return(
           <div>
            <div className="profImg">
                <img className="avatar" src={Img} width={300}/>
            </div>
            <div className="mainInfo">
                <div><h1>Diego Santiago</h1></div>
                <div>
                    <h2>Grade: 4 <br/>
                    Teacher: Ms. Frizzle </h2>
                </div>
            </div>
            <br/> <br/>
        </div>);
    }
}

export default Profile;