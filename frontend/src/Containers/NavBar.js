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

    keyUpHandler(event) {
        /*var input, filter, ul, li, a, i, div, txtValue;
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
        }*/
        var rtst;
        var url = "http://localhost:3001/villes/" + event.target.value;
        var arrayCopy;
        var inp = document.getElementById("where")
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json[0].ville);
                console.log(json[0].pays);
                arrayCopy = JSON.parse(JSON.stringify(json));
            })
            .catch(err => console.log(err));

        console.log(arrayCopy);
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arrayCopy.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arrayCopy[i][1].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arrayCopy[i][1].substr(0, val.length) + "</strong>";
                    b.innerHTML += arrayCopy[i][1].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arrayCopy[i][1] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });

        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
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
                                    <input placeholder="Où aller ?" type="search" id="where" ref="Where" name="where" onKeyUp={this.keyUpHandler.bind(this)} ></input>
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


}