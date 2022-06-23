import React from "react";

export default function Header(props){
    return (
        <nav className={props.lightMode?"light":"dark"}>
            <img  
                className="nav--logo_icon" 
                src="logo192.png"            
            />
            <h3 className="nav--logo_text">React Facts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.changeMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}