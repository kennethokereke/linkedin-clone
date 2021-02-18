import React from 'react'
import './sidebar.css'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

export default function Sidebar() {
    //getting the users from the redux store
     const user = useSelector(selectUser);

    const stopAction = e => {
        e.preventDefault();
    }
    const recentIt =(topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
            
        </div>
        
    )
    return (
       
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1520031926676-6c3ef5d9590a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                alt="background"
                />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__numbstats">85</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed your post</p>
                    <p className="sidebar__numbstats">125</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <a href="/" onClick={stopAction}>
                <p>Recent Item</p>
                {recentIt('reactjs')}
                {recentIt('programming')}
                {recentIt('software engineering')}
                {recentIt('design user interface')}
                </a>
               
            
            
        </div>
        </div>
    )
}
