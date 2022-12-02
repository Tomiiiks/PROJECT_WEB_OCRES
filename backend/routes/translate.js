var express = require("express");
const axios = require('axios');

var router = express.Router();

router.get('/translate', function (req,res,next) {
    //const {textToTranslate, inlanguage,outLanguage} = req.query;

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "Hello");
    encodedParams.append("target", "fr");
    encodedParams.append("source", "en");

    const options = {


        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',

        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },

    };

    axios.request(options).then(function (response) {
        console.log("ici", response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
});
    module.exports = router;