const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

var currencyRouter = express.Router();

currencyRouter.get('/currency', (req, res) => {
    const from_cu=req.query.from
    const to_cu=req.query.to

    console.log("from",from_cu)
    console.log("to",to_cu)
    const options = {
        method: 'GET',
        url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
        params: {from: from_cu, to: to_cu, amount: '1'},
        headers: {
            'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data.info.rate)
    }).catch(function (error) {
        console.error(error)
    })
})

module.exports = currencyRouter;

