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

// class Header extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             money: 0
//         }
//         this.handleBudget = this.handleBudget.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleBudget(event) {
//         this.setState({
//             money: event.target.value
//         })
//     }

//     // handleClick(event) {
//     //     const userMoney = event => {
//     //         return (
//     //             <div className="user-money">
//     //                 <p>You have: {this.state.money}</p>
//     //             </div>
//     //         )
//     //     }
        
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>Welcome to the Christmas Shopping Calculator!</h1>
//                     <h3>You need to enter your budget and select the gifts you want to buy.</h3>
//                     <div>
//                         <h4>Budget</h4>
//                             <label htmlFor="budget">Please enter how much you can spend (in EUR).</label>
//                             <input type="number" id="budget" name="budget" min="1" value={this.state.money} onInput={this.handleBudget} />
                            
//                     </div>
//             </div>
//         )
//     }
// }

export default Header

// function Header(props) {
//     return (
//         <div>
//             <h1>Welcome to the Christmas Shopping Calculator!</h1>
//                 <h3>You need to enter your budget and select the gifts you want to buy.</h3>
//                 <div>
//                     <h4>Budget</h4>
//                         <label for="budget">Please enter how much you can spend (in EUR).</label>
//                         <input type="number" id="budget" name="budget" min="1" />
//                         <button type="button" onClick={props.handleBudget}>Submit</button>
//                 </div>
//         </div>
//     )
// }