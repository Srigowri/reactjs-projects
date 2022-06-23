import React, { useState } from 'react'

export default function Joke(props){    
    const [isShown, setIsShown] = useState(false);
    const [text, setText] = useState("show punchline")
    const styles={}
    function handleClick(){
        setIsShown(old=>!old);
    }
    return (
        <div className="joke">
            <p>{props.setup}</p>
            <button  onClick={handleClick}> {isShown? "hide":"show"} Punchline</button>
            {isShown && <p>{props.punchline}</p>}
            <hr/>
        </div>
    )
}
