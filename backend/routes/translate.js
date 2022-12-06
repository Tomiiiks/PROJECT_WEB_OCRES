var express = require("express");
const axios = require('axios');
const {response} = require("express");

var translateRouter = express.Router();

const textToTranslate = "";
translateRouter.get(`/translate/:${textToTranslate}`,  (req,res) => {

    //const {textToTranslate}= req.query;
    console.log("Je suis la ",req)


    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
            'to[0]': 'fr',
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain'
        },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: [{text: `${textToTranslate}`}]

        //data: {text: textToTranslate}
        //data: [{text: `${textToTranslate}`}] //a utiliser en guillemet
    };

    axios.request(options).then((response)=> {
        console.log("ici", response.data);
        res.json(response.data)
    }).catch((error)=> {
        console.error(error);
        return response.data
    });
});
module.exports = translateRouter;