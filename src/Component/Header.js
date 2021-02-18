import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase'
import {logout, selectUser} from "../features/counter/userSlice"
export default function Header() {
    const user = useSelector(selectUser)

    
    //from redux grab information
    const dispatch = useDispatch();
    //logout to firebase
    const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
    }
    return (
        <div className= "Header">
           
            <div className="header__left">
            
            {/* logo */}
            <img className = "logo" src = "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0/1590003577120?e=2159024400&v=beta&t=CtsDFVp0TAdwyg73A8F82MohzKpAQy-pUGA13atPG6A" alt="linkedin"/>
        
            <div className="header__search">
            <SearchIcon/>
            <input type="text"/>
            </div>
           

            </div>

            <div className="header__right flex">
            {/* reusable component */}
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={PeopleIcon} title="My network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Job"/>
            <HeaderOption Icon={ChatIcon} title="Message"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} 
            title="profile" onClick={logoutOfApp}/>

            </div>
            
        </div>
    )
}
