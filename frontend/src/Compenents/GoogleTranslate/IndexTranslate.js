import TextBox from "./TextBox";
import Arrow from "./arrow";
import Button2 from "./button2";

import Modal from "./Modal";
import "./Translate.css";
import {useEffect, useState} from "react";
import axios from 'axios'

export const IndexTranslate = () => {
    const [showModal, setShowModal] = useState(false)
    const [inputLanguage, setInputLanguage] = useState('English')
    const [outputLanguage, setOutputLanguage] = useState('French')
    const [languages, setLanguages] = useState(null)

    const getLanguages = () =>{

        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'e1b79b871bmshe59236e1e317826p12afbejsnae344e015a94',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        }

        axios.request(options).then(function (response) {
            console.log(response.data)
           const arrayOfData = Object.keys(response.data.data).map(key => response.data.data[key])
            setLanguages(arrayOfData)
        }).catch(function (error) {
            console.error(error)
        })}

const translate = () => {

    fetch("http://localhost:3001/translate")
        .then(response => response.json())
        .then(translate => {
            // this.setState({post: airports})
            console.log(translate);
        })
        .catch(err => console.log(err));
}
    //console.log('languages', languages)

    useEffect(() => {
        getLanguages()
    },[])

    //ici

    //ici



    const handleClick = () => {
        setInputLanguage(outputLanguage)
        setOutputLanguage(inputLanguage)
    }

    return (
        <section className="index-Translate" id="index-Translate">
            <container>
                <div>
                    {!showModal &&<>
                    <TextBox
                        style='input'
                        selectedLanguage={inputLanguage}
                        setShowModal={setShowModal}
                        //setTextToTranslate={setTextToTranslate}
                        //textToTranslate={textToTranslate}
                        //setTranslatedText={setTranslatedText}
                    />
                    <div className="arrow-container" onClick={handleClick}>
                        <Arrow/>
                    </div>
                    <TextBox
                        style='output'
                        setShowModal={setShowModal}
                        selectedLanguage={outputLanguage}
                        //translatedText={translatedText}

                    />
                        <div className="button-container" onClick={translate}>
                            <Button2 />
                        </div>
               </> }
                    {showModal && (<Modal setShowModal={setShowModal}
                    languages={languages}
                    choseLanguage={showModal ==='input' ? inputLanguage : outputLanguage}
                    setChosenLanguage={showModal==='input' ? setInputLanguage : setOutputLanguage}
                    />)}

                </div>
            </container>
        </section>
    )
}
