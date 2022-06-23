import React, { useEffect, useState } from "react";
export default function WindowTracker(props){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        function callback(){            
            setWindowWidth(window.innerWidth);            
        }
        window.addEventListener("resize",callback);
        return function(){
            window.removeEventListener("resize",callback);
        }
    },[]);

    return (
        <h1>
            Window width: {windowWidth}
        </h1>
    )
}