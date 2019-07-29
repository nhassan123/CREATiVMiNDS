import React from 'react';
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';



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
            <a className="menu-item" href="/">
            <Report/> Profile
            </a>
            </div>
        );
    }
}

export default SideBar;