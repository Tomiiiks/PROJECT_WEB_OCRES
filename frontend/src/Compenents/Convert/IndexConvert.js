import "./Conversion.css"
import "../Convert/IndexConvert.js"
import Button from "../Button";
import TextInput from "../TextInput";





export const IndexConvert = () => {



   /* const convert = () => {
        console.log("hello")
        console.log(document.getElementById("from").value);
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
        this.valeur = this.state.value;
    }*/

    /*handleChange = (e) => {
        this.setState({ value: e.target.value });
    }  */

    return(
        <div className="conversion">
            <h1>Conversion</h1>

            <div className="conversion__container">
            <convert/>
            </div>

            <Button _class="bt Medium" name="GO" value="Envoyer" />

        </div>
    )
}