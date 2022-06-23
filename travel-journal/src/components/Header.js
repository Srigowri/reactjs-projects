import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAsia} from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return (
        <div className="header">
            <FontAwesomeIcon className="header--globe" icon={faEarthAsia}/>
            <span className="header--website">srigowri.eth</span>
        </div>
    )
}