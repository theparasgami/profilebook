import React from "react";
import './Card.scss'
import imgSrc from "./profile.jpeg"


const DefaulCard=()=>{
  return (
       
    <div className="Card">
        <div className="fullName">Welcome</div>
        <div className="Avatar">
          <img src={imgSrc} alt="logo" />
        </div>
        <div className="Email">Click below buttons to view Profile</div>
    </div>
 )
}

const Card=(props)=>{

  return (
       
    <div className="Card">
        <div className="fullName">{props.user.first_name}&nbsp;{props.user.last_name}</div>
        <div className="Avatar">
          <img src={props.user.avatar} alt="avt"/>
        </div>
        <div className="Email">{props.user.email}</div>
    </div>
 )
    
}

export {Card,DefaulCard};