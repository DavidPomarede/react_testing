import React, { Component } from "react";
import "./style.css";


class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }


    changeMessage() {
        if (this.state.message == 'Welcome visitor') {
            this.setState({
                message: 'Thank you for subscribing'
            })
        } else {
            this.setState({
                message: 'Welcome visitor'
            })
        }

    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}> Subscribe</button>
        </div>
        )
    }
}


export default Message;
