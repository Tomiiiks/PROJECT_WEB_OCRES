import './App.css';
import { Widget} from "./Compenents/Widget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from "react-bootstrap";
import { IndexTranslate } from './Compenents/GoogleTranslate/IndexTranslate';
import {useState} from "react";



function App() {
  return (
    <div className="App">
        <Widget />

    </div>
  );
}

export default App;
