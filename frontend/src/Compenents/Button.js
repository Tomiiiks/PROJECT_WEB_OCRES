import React from "react";
import './Button.css';

export default class Button extends React.Component {


    render() {
        const { name, _class } = this.props;
        return (
            <button class={_class}>{name}</button>
        )
    }
}