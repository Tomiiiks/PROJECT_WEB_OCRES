var express = require("express");
const axios = require('axios');

var router = express.Router();

const textToTranslate = "Hello World";

router.get('/translate', async (req,res) => {


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
    };

    axios.request(options).then(function (response) {
        //console.log("ici", response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
});
module.exports = router;