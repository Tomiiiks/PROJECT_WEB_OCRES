import React, { useState } from "react";
import { Widget } from "../Compenents/Widget";
import './navBar.css'
import '../Compenents/Utils/Button.css'
import '../Compenents/Utils/TextInput.css'
import { Container, Row, Col, } from "react-bootstrap";


function NavBar({ navigation }) {


    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const arriv = data.get('where');
        navigation.setStateArr(arriv);
        const dep = data.get('from');
        navigation.setStateDep(dep);
    }


    const handleClick = (idinput, idprarent) => {

        var inp = document.getElementById(idinput);
        if (inp) {

            inp.addEventListener("input", (e) => {
                var a, b, i, val = inp.value;

                closeAllLists();
                if (!val) { return false; }

                a = document.createElement("DIV");
                a.setAttribute("id", idinput + idprarent + "-list");
                a.setAttribute("class", idprarent + "-items");

                document.getElementById(idprarent).appendChild(a);

                if (val) {
                    var url = "http://localhost:3001/villes/" + val;
                    fetch(url)
                        .then(response => response.json())
                        .then(json => {
                            var len;
                            if (json.length >= 5) {
                                len = 5;
                            } else {
                                len = json.length;
                            }
                            for (i = 0; i < len; i++) {

                                if (json[i].ville.substr(0, val.length).toUpperCase() === val.toUpperCase()) {

                                    b = document.createElement("DIV");

                                    b.innerHTML = "<strong>" + json[i].ville.substr(0, val.length) + "</strong>";
                                    b.innerHTML += json[i].ville.substr(val.length);
                                    b.innerHTML += ", ";
                                    b.innerHTML += json[i].pays;


                                    b.innerHTML += "<input type='hidden' value='" + json[i].ville + ", " + json[i].pays + "'>";

                                    b.addEventListener("click", function (e) {

                                        inp.value = this.getElementsByTagName("input")[0].value;

                                        closeAllLists();
                                    });
                                    a.appendChild(b);
                                }
                            }
                        })
                        .catch(err => console.log(err));
                }
            });

            function closeAllLists(elmnt) {
                var x = document.getElementsByClassName(idprarent + "-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt !== x[i] && elmnt !== inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }

            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }
    }



    return (
        <div>
            <Container>
                <Row>
                    <Col size={12}>
                        <nav className="Forme Navcont">
                            <h2 className="h2p">TravelGO</h2>
                            <form className="Navcont" onSubmit={handleSubmit}>
                                <div id="autocomplete" className="autocomplete">
                                    <input placeholder="Où aller ?" type="search" id="where" name="where" autoComplete="off" onclick={handleClick("where", "autocomplete")}></input >
                                </div>

                                <div id="dropinfo" className="dropinfo">
                                    <input placeholder="De ou ?" type="search" id="from" name="from" autoComplete="off" onClick={handleClick("from", "dropinfo")}></input>
                                </div>

                                <button className="bt Medium" type=" submit" >GO</button>
                            </form>
                        </nav>
                    </Col>
                </Row>
            </Container >
            <Widget navigation={navigation} />
        </div>
    );
}

export default NavBar