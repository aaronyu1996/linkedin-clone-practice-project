import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();  

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }  

  return (
    <div className='header'>
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin icon" />

            <div className="header_search">
                 <SearchIcon />
                 <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={Home} title='Home' /> 
            <HeaderOption Icon={SupervisorAccount} title='My Network' /> 
            <HeaderOption Icon={BusinessCenter} title='Jobs' />
            <HeaderOption Icon={Chat} title='Messaging' />
            <HeaderOption Icon={Notifications} title='Notifications' />
            <HeaderOption
            avatar={true} 
            title='Me'
            onClick={logoutOfApp} />


        </div>
    </div>
  )
}

export default Header;