import React from "react";
import './DateInput.css';


export default class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateStart: null
        };
    }


    render() {
        return (
            <div>
                <input type="date" min={new Date().toISOString().split("T")[0]} onChange={e => this.setState({ dateStart: e.target.value })}></input>
            </div>
        );
    }
}