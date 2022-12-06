const express = require("express");
const router = express.Router();
const Activiters = require("../model/ActiviterModel");
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "WebProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;
mongoose.connect(dbURL, {
    useNewUrlParser: true
});



router.get("/activiters/:pays", async (req, res) => {
    var paysR = req.params.pays;
    const Activite = await Activiters.find({ pays: paysR })
    res.send(JSON.stringify(Activite))
});

router.get("/activiters", async (req, res) => {
    const posts = await Activiters.find()
    res.send(posts)
});

router.put('/activiters', (req, res) => {
    const { activiter, pays, img } = req.body;

    const id = _.uniqueId();

    Activiters.push({ pays, activiter, img, id });

    res.json({
        message: `Activiter ${id} ajouter`,
        activ: { activ, id }
    });

});

router.delete('/activiters/:pays', (req, res) => {

    const { pays } = req.params;

    // Remove from "DB"
    _.remove(Activiters, ["pays", pays]);

    // Return message
    res.json({
        message: `Just removed ${pays}`
    });
});

/* UPDATE user. */
router.post('/activiters/:pays', (req, res) => {
    // Get the :id of the user we want to update from the params of the request
    const { pays } = req.params;
    // Get the new data of the user we want to update from the body of the request
    const { Activiter, img } = req.body;
    // Find in DB
    const activiterToUpdate = _.find(Activiters, ["pays", pays]);
    // Update data with new data (js is by address)
    activiterToUpdate.Activiter = Activiter;
    activiterToUpdate.img = img;

    // Return message
    res.json({
        message: `Just updated ${Pays} with ${Activiter} et ${img}`
    });
});

module.exports = router;