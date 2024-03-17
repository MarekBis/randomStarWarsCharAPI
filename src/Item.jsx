import React from "react";

class Item extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            clicks:0
        }
    }

    clickMe() {
        console.log("I clicked", this.props.myName)
        this.setState({
            clicks:this.state.clicks+1
        })
    }
    render() {
        return (
            <>
            <h1 onClick={() => this.clickMe()}>Hello from {this.props.myName}</h1>
            <span>{this.state.clicks} clicks Item</span>
            </>
        )
    }
}
export default Item;