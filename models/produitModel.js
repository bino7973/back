const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    title :  String,
    description : String,
    data : [
        {
            key : String,
            value : String
        }
    ],
});

module.exports = mongoose.model("Produit", produitSchema);