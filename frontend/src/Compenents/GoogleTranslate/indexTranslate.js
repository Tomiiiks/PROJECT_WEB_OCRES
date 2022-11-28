import TextBox from "./TextBox";
import Arrow from "./arrow";
import button2 from "./button2";
import Modal from "./Modal";
import "./Translate.css";
import {useState} from "react";

export const indexTranslate= () => {

    const [inputLanguage, setInputLanguage] = useState('English')
    const [outputLanguage, setOutputLanguage] = useState('French')


    const handleClick = () =>{
        setInputLanguage(outputLanguage)
        setOutputLanguage(inputLanguage)
    }

    return (
        <section className="index-Translate" id="index-Translate">
            <container>
        <div>
            <TextBox
                selectedLanguage
                style='input'/>
            <div className="arrow-container" onClick={handleClick}>
            <Arrow/>
            </div>
            <TextBox style='output'/>


            <button2/>
            <Modal/>
        </div>
            </container>
        </section>
    )
}
