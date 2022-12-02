import "./Pictures.css"
import Button from "../Button";




export const IndexPicture = () => {

    const show = () => {

        fetch("http://localhost:3001/picture")
            .then(response => response.json())
            .then(show => {
                // this.setState({post: airports})
                console.table("ici",show.value[0].url )
            })
            .catch(err => console.log(err));
    }

    const print = () => {

        const output = document.getElementById("output");


        fetch("http://localhost:3001/picture")
            .then(response => response.json())
            .then(show => {

                //output.innerHTML = show.value[0].url

                //output.textContent= `${show.value[0].url}`
                const img= document.createElement("img");
                img.src= `${show.value[0].url}`
                output.appendChild(img);
            })


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