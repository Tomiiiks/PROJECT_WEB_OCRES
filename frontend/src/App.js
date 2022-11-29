import './App.css';
import { Widget} from "./Compenents/Widget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from "react-bootstrap";
import { indexTranslate } from './Compenents/GoogleTranslate/indexTranslate';

function App() {
  return (
    <div className="App">
        <Widget />

    </div>
  );
}

export default App;
