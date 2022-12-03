import React from "react";
import TextInput from "../Compenents/TextInput"
import './navBar.css'
import '../Compenents/Button.css'
import '../Compenents/TextInput'
import { Container, Row, Col, Alert } from "react-bootstrap";
import Button from "../Compenents/Button";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            where: null,
            from: null
        }
    };

    display() {
        alert(this.ou, this.de);
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data.get('where'));
        console.log(data.get('from'));
        this.state.where = data.get('where');
        this.state.from = data.get('from');

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size={12}>
                        <nav class="Forme Navcont">
                            <h2 class="h2p">TravelGO</h2>
                            <form class="Navcont" onSubmit={this.handleSubmit}>
                                <input placeholder="Où aller ?" type="search" id="where" name="where"></input>
                                <input placeholder="De ou ?" type="search" id="from" name="from"></input>
                                <button class="bt Medium" type=" submit" >GO</button>
                            </form>
                        </nav>
                    </Col>
                </Row>
            </Container >
        );
    };

}