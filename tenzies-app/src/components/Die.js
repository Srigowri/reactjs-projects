import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld? "pink":"transparent"
    }
    return (
        <div className="die-face" style={styles} onClick={()=>props.handleClick(props.id)}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}