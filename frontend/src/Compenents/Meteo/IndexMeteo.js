import "./Meteo.css"
import Button from "../Utils/Button";
import axios from "axios";
import { useState } from "react";




export const IndexMeteo = () => {

    const[city, setCity] = useState("Paris");
    const[sun, setSun] = useState("");
    const[winds, setWinds] = useState(0);
    const[temperature, setTemperature] = useState(0);
    const[humidity, setHumidity] = useState(0);


    const addMeteo = () => {



        const options = {
            method: 'GET',
            url: 'http://localhost:3001/meteo',
            params: {location: city , format: 'json', u: 'c'},
            headers: {
                'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };

        axios.request(options).then( (response)=> {
            console.log(response.data)

            setTemperature(response.data.current_observation.condition.temperature)
            setWinds(response.data.current_observation.wind.speed)
            setHumidity(response.data.current_observation.atmosphere.humidity)
            setSun(response.data.current_observation.condition.text)

        }).catch((error)=> {
            console.error(error)
        });



        /*
        setCity("Paris");


        const output = document.getElementById("output");

        const response = await axios.get("http://localhost:3001/meteo", {params : city})

        console.log("hola", response.data)

        const show = response.data;
        //output.innerHTML = show;*/

    }

    return(
        <div className="Meteo">
            <h1>Meteo</h1>

            <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
            <div className="button-container" onClick={addMeteo} >
                <Button id="btn" _class="bt Medium" name="GO"  />
            </div>
            <div id="output" className="Meteo__container">

                <h3>Meteo: {city}</h3>

                <h4>Temperature : {temperature} C°</h4>

                <h4>Ensoleillement :{sun} </h4>

                <h4>Humidity : {humidity}%</h4>

                <h4>Wind : {winds}km/h</h4>

            </div>
        </div>
    );
}