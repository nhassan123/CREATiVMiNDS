import React from 'react';
import AccountCircle from '@material-ui/icons/PersonAdd';
import Games from '@material-ui/icons/VideogameAsset';
import Report from '@material-ui/icons/Star';
import Account from '@material-ui/icons/AccountCircle';



class SideBar extends React.Component{
    render(){
        return(
            <div className="menu">
            <br/>Student Dashboard <br/>
            <a className="menu-item" href="/invitePage">
            <AccountCircle/> &nbsp; Invites <span className="inviteMode"><b>1</b></span>
            </a>
            <a className="menu-item" href="/">
            <Games/> &nbsp; Modules
            </a>
            <a className="menu-item" href="/">
            <Report/> &nbsp; Progress
            </a>
            <a className="menu-item" href="/profile">
            <Account/> &nbsp; Profile
            </a>
            </div>
        );
    }
}

export default SideBar;