import React, {useEffect} from 'react';

import './App.css';
import Feed from './Component/Feed';
import Header from './Component/Header';
import Login from './Component/Login';
import Sidebar from './Component/Sidebar';
import Widgetss from './Component/Widge'
import  {login, logout, selectUser} from './features/counter/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import { Autorenew, Widgets } from '@material-ui/icons';
import { auth } from './Component/firebase';

function App() {

const user =  useSelector(selectUser)
const dispatch = useDispatch()

useEffect(() => {
 auth.onAuthStateChanged(userAuth => {
   if (userAuth) {
     //user is loggin
     dispatch(login({
       email: userAuth.email,
       uid: userAuth.uid,
       displayName: userAuth.displayName,
       photoUrl: userAuth.photoURL,

     }))

   } else {
     //user logged out
     dispatch(logout());
   }
 })
}, [])

  return (
    <div className="App">
  
      {/* Header */}
      <Header />
  {!user ? (
    <Login/>
  ) : (
    
     <div 
     className="App__body">
     {/* left sidbar */}
   <Sidebar/>
   {/* feed */}
   <Feed/>
  {/* right sidebar */}
  {/* <Widgetss/> */}
  <Widgetss/>
   </div>
   
  )}
    </div>
  );
 
}

export default App;
