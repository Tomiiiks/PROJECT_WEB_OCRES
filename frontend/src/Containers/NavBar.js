import React from "react";
import { useState, useEffect } from "react";
import './navBar.css'
import '../Compenents/Utils/Button.css'
import '../Compenents/Utils/TextInput.css'
import { Container, Row, Col, Alert } from "react-bootstrap";

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

    filterFunction() {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("where");
        filter = input.value.toUpperCase();
        div = document.getElementById("dropinfo");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size={12}>
                        <nav class="Forme Navcont">
                            <h2 class="h2p">TravelGO</h2>
                            <form class="Navcont" onSubmit={this.handleSubmit}>

                                <input placeholder="Où aller ?" type="search" id="where" name="where" onkeyup={this.filterFunction} ></input>
                                <div id="dropinfo"><a></a> <a></a></div>

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