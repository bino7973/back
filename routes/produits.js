const express = require('express');

const router = express.Router();


const produitController = require('../controllers/produitController');


router.post('/',produitController.add_new_produit);

router.get('/',produitController.get_all_produit);




module.exports = router;