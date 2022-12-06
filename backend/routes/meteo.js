var express = require("express");
const axios = require('axios');
const {response} = require("express");
const app = express();

var meteoRouter = express.Router();

    meteoRouter.get('/meteo',   (req,res) => {

    const city=req.query.location;

        const options = {
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: {location: city , format: 'json', u: 'c'},
            headers: {
                'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };
        axios.request(options).then( (response)=> {
            console.log(response.data)
            res.json(response.data)
        }).catch(function (error) {
            console.error(error)
        })
});
module.exports = meteoRouter;