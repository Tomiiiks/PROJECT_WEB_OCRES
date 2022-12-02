var express = require("express");
const axios = require('axios');
//const {response} = require("express");

var router = express.Router();

const place = "Lyon";

router.get('/airports', function (req,res,next)  {

        const options = {
            method: 'GET',
            url: `https://world-airports-directory.p.rapidapi.com/v1/airports/${place}`,
            params: {page: '1', limit: '5', sortBy: 'AirportName:asc'},
            headers: {
                'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
                'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
            }
        };//    "start": "node ./bin/www"


        axios.request(options).then(function (response) {
            console.log(response.data)
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
        })
}
);

module.exports = router;


