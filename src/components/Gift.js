import React from "react"

function Gift(props) {
    return (
        <div className="gift-item">
            <input 
            type="checkbox" 
            checked={props.item.chosen} 
            id={props.item.id}
            onChange={() => { props.handleChange(props.item.id); props.handleTotal() }} // added second function
            value={props.item.value} 
            />
            <label htmlFor={props.item.id}>{props.item.text}</label>
        </div>
    )
}

export default Gift