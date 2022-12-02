var express = require("express");
const axios = require('axios');
const {response} = require("express");

var router = express.Router();

router.get('/picture',  (req,res) => {



    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: 'argentina landscape', pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
        headers: {
            'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {

        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
});
    module.exports = router;