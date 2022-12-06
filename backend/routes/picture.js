var express = require("express");
const axios = require('axios');
const {response} = require("express");

var pictureRouter = express.Router();




pictureRouter.get('/picture',    (req,res) => {
    const{printPicture, pageNumber,pageSize} = req.query;

    //const printPicture = req.query;
    //const printPicture = "Congo";

    const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: printPicture, pageNumber: pageNumber, pageSize: pageSize, autoCorrect: 'false'},
        headers: {
            'X-RapidAPI-Key': '9e11b0b296msh7d97c87936fd571p1d249fjsn8414fe1b3715',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        //res.json(response.data)
        console.log("url",response.data.value[0].url)
        console.log("titl",response.data.value[0].title)
        console.log("all",response.data)
       res.json(response.data.value[0].url) //A remettre pour avoir l'url de l'image
    }).catch(function (error) {
        console.error(error);
    });
});
    module.exports = pictureRouter;