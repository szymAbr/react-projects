import React from "react"
import Gift from "./components/Gift"
import giftData from "./components/giftData"
import Header from "./components/Header"
import Money from "./components/Money"
import Decoration from "./components/Decoration"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gifts: giftData,
            money: 0,
            total: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleBudget = this.handleBudget.bind(this)
        this.handleTotal = this.handleTotal.bind(this)
    }

    handleChange(id) { // checkbox checked/unchecked
        this.setState(prevState => {
            const updatedGiftData = prevState.gifts.map(present => {
                if (present.id === id) {
                    return {
                        ...present,
                        chosen: !present.chosen
                    }
                }
                return present
            })
            return {
                gifts: updatedGiftData
            }
        })
    }

    handleTotal() { // updating total amount needed
        function getTotal(total, val) {
            return total + val
        }
        this.setState(prevState => {
            const activeValueArray = prevState.gifts.map(present => {
                let giftValue
                if (present.chosen) {
                    giftValue = present.value
                } else {
                    giftValue = 0
                }
                return giftValue
            })
            const updatedTotal = activeValueArray.reduce(getTotal, 0)
            return {
                total: updatedTotal
            }
        })

    }

    handleBudget(event) { // show user's budget on input
        this.setState({
            money: event.target.value
        })
    }

    render() {
        const giftItems = this.state.gifts.map(item => <Gift key={item.id} item={item} handleChange={this.handleChange} handleTotal={this.handleTotal}/>) // added handleTotal

        return (              
            <div className="container">
                <Header money={this.state.money} handleBudget={this.handleBudget}/>
                <Decoration number="1"/>
                <Decoration number="2"/>
                <div>
                    <div className="gift-list">
                        {giftItems}
                    </div>
                    <Money amountToSpend={this.state.money} amountNeeded={this.state.total}/>
                </div>
            </div>
        )
    }
}

export default App