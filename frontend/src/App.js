import './App.css';
import { Widget} from "./Compenents/Widget";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Containers/NavBar";
import { IndexTranslate } from './Compenents/GoogleTranslate/IndexTranslate';
import {useState} from "react";



function App() {
  return (
    <div className="App">
        <NavBar />
        <Widget />

    </div>
  );
}

export default App;
