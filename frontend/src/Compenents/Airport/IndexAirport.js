import "./Airport.css"
import "../Utils/Button.css"
import Button from "../Utils/Button";
import {render} from "react-dom";
import {useState} from "react";

export const IndexAirport = () => {
    const [place, setPlace] = useState("");


    //const tableBody=document.getElementById("table-body");

    const getAirport = ()=>{
       fetch(`http://localhost:3001/airports/${place}`)
           .then(response => response.json())
              .then(airports => {
                 // this.setState({post: airports})
                  console.log(airports);
              })
           .catch(err => console.log(err));
    }



getAirport();

    /*const populateTable = (airports) => {
        for(const airport of airports){
            const tableRow = document.createElement("tr");
            const tableIcon = document.createElement("td");

    tableIcon.textContent="+"
    tableRow.append(tableIcon)
    tableBody.append(tableRow)

            /*const airportDetails = {
                Airport_Name: airport.AirportName,
                City: airport.city,
                Country: airport.country,
                Airport_Code: airport.AirportCode,

            }

            for (const airportDetail in airportDetails){
                const tableCell = document.createElement("td");
                const word = Array.from(airportDetails[airportDetail]);

                for (const [index, letter] of word.entries()){
                    const letterElement = document.createElement("div");

                    //letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }
                tableRow.append(tableCell);
            }*/

            //tableBody.append(tableRow);
      //  }
   // }


return(

    <div className="first">
        <h2>Liste des Aéroports</h2>
        <p>Cherher votre airport</p>

        <input type="text" placeholder="City" onChange={(e) => setPlace(e.target.value)}/>
        <div className="button-container" onClick={getAirport} >
            <Button id="btn" _class="bt Medium" name="GO"  />
        </div>
        <div className="second">
        <table>

            <thead>
                <tr>
                    <th></th>
                    <th id="Airport_Name">Airport Name</th>
                    <th id="City">City -</th>
                    <th id="Country"> Country -</th>
                    <th id="Airport_Code">Airport Code</th>
                </tr>
            </thead>
            <tbody id="table-body"></tbody>
        </table>
        </div>
    </div>

)

}