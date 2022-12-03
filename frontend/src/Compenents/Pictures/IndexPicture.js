import "./Pictures.css"
import Button from "../Utils/Button";
import axios from "axios";
import {useState} from "react";




export const IndexPicture = () => {

    const [printPicture, setPrintPictures] = useState("");



    const print = async() => {

        const pageNumber='1';
        const pageSize='1';
        const printPicture = "espana"

        const data = { printPicture ,pageNumber, pageSize} ;

        const output = document.getElementById("output");

        const response = await axios.get("http://localhost:3001/picture", {params : data})

        console.log("hola", response.data)
        const show = response.data;
        //output.innerHTML = show;
        const img = document.createElement("img");
        img.src = show;
        output.appendChild(img);
    }

    return(
        <div className="Picture">
            <h1>IndexPicture</h1>

            <div className="button-container" onClick={print} >
                <Button id="btn" _class="bt Medium" name="GO"  />
            </div>
            <div id="output" className="Picture__container">

                <p>ici</p>

            </div>




        </div>

    );



}