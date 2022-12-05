const express = require("express");
const router = express.Router();
const Destination = require("../model/Destination");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "WebProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(dbURL, {
    useNewUrlParser: true
});


router.get("/villes/:start", async (req, res) => {
    var vil = "^" + req.params.start;
    const Destinations = await Destination.aggregate([
        {
            '$unwind': {
                'path': '$ville'
            }
        }, {
            '$match': {
                'ville': new RegExp(vil, 'i')
            }
        }
    ])
    res.send(JSON.stringify(Destinations))
});

router.get("/villes", async (req, res) => {
    const posts = await Destination.find({ pays: 'Afghanistan' })
    res.send(posts)
});

module.exports = router;