import './App.css';
import { Widget } from "./Compenents/Widget";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Containers/NavBar";
import Nav from "./Containers/nav"
import { IndexTranslate } from './Compenents/GoogleTranslate/IndexTranslate';
import { useState } from "react";



function App() {

  var nav = new Nav();

  return (
    <div className="App">
      <NavBar navigation={nav} />
      <Widget navigation={nav} />
    </div>
  );
}

export default App;
