const Produit = require('../models/produitModel');

//Ajout d'un nouveau produit
exports.add_new_produit = async function (req, res, next) {

    let data = [{key : req.body.key, value : req.body.value}]
    const produit = new Produit({
        slug: req.body.slug,
        nom: req.body.nom,
        data : data
    });
    //console.log(produit)

    produit.save().then(produit => {
        res.status(200).json({
            produit
        });
    }).catch(erreur => {
        res.status(400).json({
            message: "Echec d'ajout du nouveau produit",
            informationErreur: erreur
        });
    });

}

exports.get_all_produit = function (req, res, next) {
    Produit.find()
        .exec()
        .then(produits =>{
            if (produits.length > 0){
                res.status(200).json({
                    produits
                });
            }else{
                res.status(200).json({
                    "message" : "La liste des produit est vide!"
                });
            }
        }).catch(erreur =>{
        res.status(400).json({
            message : "Echec d'obtention de la liste des produit!",
            informationErreur : erreur
        });
    });

};