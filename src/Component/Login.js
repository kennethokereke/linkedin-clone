import React, {useState} from 'react'
import { auth } from './firebase'
import './Login.css'
import {useDispatch} from 'react-redux'
import { login } from '../features/counter/userSlice'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profile, setProfile] = useState('')

    //this will help push the user into the redux(dispatch)
    const dispatch = useDispatch();
    

  
    const loginInApp = (e) => {
        e.preventDefault(); 

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            })
            )
        })
        .catch((error) => alert(error));
    
    }

    const register = () => {
        if(!name) {
            return alert("please enter name")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profile

                })
                )

            })
        })
        //some type of insight as to what went wrong
        .catch((error) => alert(error.message))
    }
    return (
      
        <div className="Login">
           <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" 
           alt="Linkedin"/>

           <form>
               <input placeholder="fullname" type="text" value={name} onChange={ e => setName(e.target.value)}/>
               <input placeholder="Profile picture" type="text" value={profile} onChange={e => setProfile(e.target.value)}/>
               <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email"/>
              
               <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

               <button type="submit" onClick={loginInApp}>Sign In</button>
           </form>
           <p>
               Not a member?
               <span className="Login_register" onClick={register}>Register Now</span>
           </p>
        </div>
    )
}
