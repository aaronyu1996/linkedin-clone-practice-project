import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
 
function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        // using arrow function to render a jsx expression
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://media.licdn.com/dms/image/C5616AQGCHJ1VzrKt2A/profile-displaybackgroundimage-shrink_350_1400/0/1517616453155?e=1701302400&v=beta&t=k45aZzgtOfFRxTMOK5vPE_9VRFvOAB9XPpkcWUQhvz8" alt="" />
                <Avatar src={user.photoUrl} className='sidebar_avatar'>
                    {user.email[0]}
                </Avatar> 
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">99</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">898</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
            </div>
        </div>
  )
}
 
export default Sidebar;