import React from "react";
import './TextInput.css';

export default class TextInput extends React.Component {


    Delete = () => {
        console.log('this is:', this);
    };

    render() {
        const { type, placeHolder, id, onChange } = this.props;
        return (
            <input placeholder={placeHolder} type={type} id={id} onChange={onChange}></input>
        );
    }
}