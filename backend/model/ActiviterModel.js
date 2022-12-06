const mongoose = require('mongoose');
const ActiviterSchema = new mongoose.Schema({
    pays: String,
    activiter: String,
    img: String
});

module.exports = mongoose.model("Activiters", ActiviterSchema)