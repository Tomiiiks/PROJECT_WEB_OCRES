import "./activiter.css"
import "../Utils/Button.css"

export const IndexActiviter = () => {

    //const tableBody=document.getElementById("table-body");

    const getActiviter = () => {
        fetch("http://localhost:3001/activiters/France")
            .then(response => response.json())
            .then(json => {
                console.log(json[0].pays);
                const output = document.getElementById("activiter");
                const img = document.getElementById("activiterimg");
                const titre = document.getElementById("imgLegende");
                titre.textContent = json[0].activiter;
                img.src = json[0].img;
                output.appendChild(img);
                titre.append();
            })
            .catch(err => console.log(err));
    }



    return (

        <div className="activiter" onClick={getActiviter}>
            <div id="activiter">
                <h2>Activiter</h2>
                <h3 id="imgLegende"></h3>
                <img id="activiterimg"></img>
            </div>
        </div>

    )

}