import React from "react";
import { Alert } from "react-bootstrap";
import './Button.css';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name, _class, action, type } = this.props;
        return (
            <button class={_class} onClick={action} type={type} >{name}</button>
        )
    }
}