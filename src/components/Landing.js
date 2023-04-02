import React, { useState } from 'react';
import { Users } from "../data/dataUsers";
import { Movies} from "../data/dataMovies";
import { Constants} from "../Constants";
import User from './User';
import './reflix.css'


export default function Home({setUsername}){

  const [usersData, setUsersData] = useState({ users: Users});

  const loginUser = function(userID){
    let user = usersData.users.find( user => user.id === userID);
    setUsersData({...usersData})
    
    if(localStorage[user.name] === undefined){
      localStorage.setItem(user.name, JSON.stringify({
        movies : Movies ,
        budget : Constants.STARTING_BUDGET
      }))
    }

    setUsername(user.name)
  }

  return (
    <div className="home">
      {usersData.users.map(user=> <User user={user} loginUser={loginUser} key={user.id}/>)}
    </div>
  );
} 