import React, { Component } from "react";
import "./style.css";


class Message2 extends Component {

    constructor() {
        super()
        this.state = {
            message2: 'How are you?'
        }
    }


    changeMessage() {
        if (this.state.message2 == 'How are you?') {
            this.setState({
                message2: 'Fine thank you!'
            })
        } else {
            this.setState({
                message2: 'How are you?'
            })
        }

    }

    render() {
        return (
        <div>
            <h1>{this.state.message2}</h1>
            <button onClick={() => this.changeMessage()}>I'm good.</button>
        </div>
        )
    }
}


export default Message2;
