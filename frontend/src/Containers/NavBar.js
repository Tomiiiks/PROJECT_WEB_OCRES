import React from "react";
import TextInput from "../Compenents/TextInput"
import './navBar.css'
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Compenents/Button";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ou: null,
            de: null
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size={12}>
                        <nav class="Forme Navcont">
                            <h2 class="h2p">TravelGO</h2>
                            <TextInput placeHolder="Où aller ?" type="search" id="where" onChange="e => this.setState({ ou: e.target.value })"></TextInput>
                            <TextInput placeHolder="De ou ?" type="search" id="from" onChange="e => this.setState({ de: e.target.value })"></TextInput>
                            <Button _class="bt Medium" name="GO" />
                        </nav>
                    </Col>
                </Row>
            </Container>
        );
    };

}