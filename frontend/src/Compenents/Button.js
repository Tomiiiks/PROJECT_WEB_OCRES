import "./Button.css";
import { Component } from "react";


export default class Button extends Component {
    render() {
        return (
            <button class={this.props._class}>{this.props.name}</button>
        );
    }
}