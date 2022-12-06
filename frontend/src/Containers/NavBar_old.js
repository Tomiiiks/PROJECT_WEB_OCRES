/*import React from "react";
import handleClick from "./Dropdown.js";
import './navBar.css'
import '../Compenents/Utils/Button.css'
import '../Compenents/Utils/TextInput.css'
import { Container, Row, Col, Alert, Dropdown } from "react-bootstrap";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            where: null,
            from: null
        }
    };


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data.get('where'));
        console.log(data.get('from'));
        this.state.where = data.get('where');
        this.state.from = data.get('from');
    }


    onKeyUpValue(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size={12}>
                        <nav class="Forme Navcont">
                            <h2 class="h2p">TravelGO</h2>
                            <form class="Navcont" onSubmit={this.handleSubmit}>
                                <div id="dropinfo">
                                    <input placeholder="Où aller ?" type="search" id="where" ref="Where" name="where" onclick={handleClick.handleClick("where")}></input >
                                </div>

                                <div id="dropinfo">
                                    <input placeholder="De ou ?" type="search" id="from" ref="from" name="from" onKeyUp={this.onKeyUpValue.bind(this)}></input>
                                </div>

                                <button class="bt Medium" type=" submit" >GO</button>
                            </form>
                        </nav>
                    </Col>
                </Row>
            </Container >
        );
    };


}*/