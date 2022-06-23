
import React from "react"
import profile_picture from '../images/profile_picture.jpeg'
export default function Info(){
  return (
    <div className = "info--card">
        <img src={profile_picture} alt="profile pic"/>
        <div className="info--name">
            Srigowri
        </div>
        <div className="info--role">
            Frontend Developer
        </div>
        <div className="info--website">
            srigowri.eth
        </div>
        <div className ="info-contact">
            <button className="info--email">Email</button>
            <button className="info--linkedin">LinkedIn</button>
        </div>
    </div>
  )
}