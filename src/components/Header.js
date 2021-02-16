import React from "react"

function Header(props) {
    return (
        <div className="header">
            <h1>Welcome to the Christmas Shopping Calculator!</h1>
                <h3>You need to enter your budget and select the gifts you want to buy.</h3>
                <div className="header-budget">
                    <h4>Budget</h4>
                        <label htmlFor="budget">Please enter how much you can spend (in EUR):</label>
                        <input type="number" id="budget" name="budget" min="1" value={props.money} onInput={props.handleBudget}/>
                </div>
        </div>
    )
}

export default Header