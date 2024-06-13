import React from 'react'
import { useState } from 'react';
import AddUser from './AddUser.jsx'
import './User.css'
import image from './assets/user.jpeg';

function User() {
    let[counter, setCounter]=useState(0);

    function changeCount(){
        setCounter(counter+1);
    }

  return (
    <div className="container">
      <h1 className="text-center m-auto mt-3 text-success">USERS</h1>
      <div className="img ">
        <p className="value mt-4">{counter}</p>
        <img src={image} alt="" width={125}/>
      </div>


      <AddUser count={{counter,changeCount}} />
    </div>
  )
}

export default User;