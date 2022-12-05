const mongoose = require('mongoose');
const DestinationSchema = new mongoose.Schema({
    pays: String,
    ville: [String]
});

module.exports = mongoose.model("Destination", DestinationSchema)