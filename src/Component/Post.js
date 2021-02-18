import { Avatar } from '@material-ui/core'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ThumbsUpOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'

import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import "./Post.css"
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

//foward Ref


//{name, description, message, photoURL}
const Post = forwardRef(({name,description, message, photoURL}, ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL}>
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
         <InputOption Icon={ThumbsUpOutlinedIcon} title="like" color="gray" />
         <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
         <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
         <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
        </div>
        
    )
})

export default Post
