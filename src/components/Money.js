import React from "react"

function Money(props) {
    const backgroundStyle = {backgroundColor: (props.amountToSpend === 0 || props.amountNeeded === 0 ? "inherit" : (props.amountToSpend >= props.amountNeeded) ? "#8BFB83" : "#F48080")}
    return (
        <div className="result" style={backgroundStyle}>
            <p>You have: &euro; {props.amountToSpend}</p>
            <p>You will need: &euro; {props.amountNeeded}</p>
        </div>
    )
}

export default Money