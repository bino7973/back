const express= require('express');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./configurations/db')
const path = require('path');
const cors = require('cors');

//importation des routes de l'api
const produitRoutes = require('./routes/produits');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use(cors())


app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorisation')
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});




app.use('/produits', produitRoutes);

module.exports = app;