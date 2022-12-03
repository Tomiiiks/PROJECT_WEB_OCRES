import TextBox from "./TextBox";
import Arrow from "./arrow";
import Button2 from "./button2";

import Modal from "./Modal";
import "./Translate.css";
import {useEffect, useState} from "react";
import axios from 'axios'
import data from "bootstrap/js/src/dom/data";

export const IndexTranslate = () => {
    const [showModal, setShowModal] = useState(false)
    const [inputLanguage, setInputLanguage] = useState('English')
    const [outputLanguage, setOutputLanguage] = useState('French')
    const [languages, setLanguages] = useState(null)
    const [textToTranslate, setTextToTranslate] = useState('')
    const [translatedText, setTranslatedText] = useState('')

    const getLanguages = () => {

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
        })
    }

    const translate = async() => {

        //const textToTranslate = document.getElementById('input').textContent;



         //     console.log(document.getElementById('input').value);
         const textToTranslate = "Hello";
        console.log(textToTranslate);


        await axios.post('http://localhost:3001/translation', textToTranslate
         ).then((response) => {
             console.log("heho",response.data)
             setTranslatedText(response.data)
         }).catch((error) => {
             console.log(error)
         })
     }


        /*//{data: [{text: `${textToTranslate}`}]}
        const response = fetch("http://localhost:3001/translate",)
            .then(response => response.json())
            .then(translate => {
             console.log("ici",translate[0].translations[0].text)
            })
            .catch(err => console.log(err));/
    }*/
        //console.log('languages', languages)

        useEffect(() => {
            //getLanguages()
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
                            {!showModal && <>
                                <TextBox
                                    id={'input'}
                                    style='input'
                                    selectedLanguage={inputLanguage}
                                    setShowModal={setShowModal}
                                    onChange={(e) => setTextToTranslate(e.target.value)}
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
                                    value={translatedText}

                                />
                                <div id="btn" className="button-container" onClick={translate}>
                                    <Button2/>
                                </div>
                            </>}
                            {showModal && (<Modal setShowModal={setShowModal}
                                                  languages={languages}
                                                  choseLanguage={showModal === 'input' ? inputLanguage : outputLanguage}
                                                  setChosenLanguage={showModal === 'input' ? setInputLanguage : setOutputLanguage}
                            />)}

                        </div>
                    </container>
                </section>
            )


}