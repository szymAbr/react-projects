import React from "react"
import deco from "../img/deco.png"

function Decoration(props) {
    return (
        <img src={deco} alt="Christmas decoration" className={`deco-${props.number}`}/>
    )
}

export default Decoration