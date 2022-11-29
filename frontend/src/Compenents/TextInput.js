import React from "react";
import './TextInput.css';

export default class TextInput extends React.Component {


    Delete = () => {
        console.log('this is:', this);
    };

    render() {
        const { type, placeHolder, id } = this.props;
        return (
            <input placeholder={placeHolder} type={type} id={id}></input>
        );
    }
}