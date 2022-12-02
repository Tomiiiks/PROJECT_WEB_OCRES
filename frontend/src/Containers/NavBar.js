import React from "react";
import TextInput from "../Compenents/TextInput"
import './navBar.css'
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Compenents/Button";

export default class NavBar extends React.Component {
    valeur;

    constructor(props) {
        super(props)
        this.state = {
            ou: null,
            de: null,
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
        this.valeur = this.state.value;
    }

handleChange = (e) => {
     this.setState({ value: e.target.value });
}



    render() {
        return (
            <Container>
                <Row>
                    <Col size={12}>
                        <form onSubmit={this.handleSubmit} method="get" action="">
                        <nav class="Forme Navcont">
                            <h2 class="h2p">TravelGO</h2>
                            <TextInput placeHolder="Où aller ?" type="search"  id="where" ></TextInput>
                            <TextInput placeHolder="De ou ?" type="search" value={this.state.value} id="from" onChange={this.handleChange}></TextInput>
                            <Button _class="bt Medium" name="GO" value="Envoyer" />
                        </nav>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    };

}