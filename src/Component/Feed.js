import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalednerViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import FlipMove from 'react-flip-move'


export default function Feed() {
    
    //Creating a state (react hooks) for posting
    const [post, setPost] = useState([]);

    //for the input field 
    const [input,setInput] = useState('')

    //grab data from list
    const user = useSelector(selectUser);
    //setting up firebase data post useeffect, when rerender happens it ownt fire off again
    useEffect(() => {
        // connecting to firebase (real time connection fo post collection)
        //creating a real time listeneer that is directly maped to database
       db.collection("post").orderBy("timestamp", "desc").onSnapshot(snapshot => (
           setPost(snapshot.docs.map(doc => (
               {
                   id: doc.id,
                   data: doc.data()
               }
           )))
       ))
    }, [])
    
    
    //whenever their is a clickable function we should create an arrow function 
    //with an event
    const sendPost = e => {
      e.preventDefault();

      //when i send the post push it to the db
      db.collection('post').add({
         name: user.displayName,
         description: user.email,
         message: input,
         photoUrl: user.photoUrl || '',
         timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    //   when input is made refresh
    setInput("")
    }
    

    return (
        <div className="Feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        {/* for onChange set an event to fire off input  */}

                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalednerViewDayIcon} title="Write article" color="#7FCC15E"/>
                </div>
            </div>
            {/* Posts */}
            {/* every time i have a post I will render it out on the screen */}
            {/* destruct the post */}
            {/* rerender out our post */}
            {/* add a key so it can renrender the last one */}
            {/* post right here */}
            <FlipMove>
            {post.map(({id, data: {name, description, message, photoUrl}}) => (

            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl = {photoUrl}
            />
))}
</FlipMove>


           
            
            {/* <Post name='kenneth okereke' 
            description='this is a test' 
            message='How are you?'/> */}
            

        </div>
    )
}
