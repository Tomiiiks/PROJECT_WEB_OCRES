import React from "react";
import './TextInput.css';

export default class TextInput extends React.Component {


    render() {
        const { type, placeHolder, id, onChange } = this.props;
        return (
            <input placeholder={placeHolder} type={type} id={id}></input>
        );
    }
}