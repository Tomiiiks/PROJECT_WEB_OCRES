var express = require("express");
const axios = require('axios');

var router = express.Router();

router.get('/translate', function (req,res,next) {

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
            data: '[{"Text":"I would really like to drive your car around the block a few times."}]'
        };

    axios.request(options).then(function (response) {
        //console.log("ici", response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
});
    module.exports = router;