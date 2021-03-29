var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

// Page d'accueil
router.get('/', function(requete,reponse){
  const titrePage = "Page d'accueil";
  reponse.render('index', {titre: titrePage, active:"accueil"});
})
// Page de présentation
.get('/presentation', function(requete,reponse){
  const titrePage = "Présentation";
  reponse.render('presentation', {titre: titrePage, active:"presentation"});
})
// Page Aventure Digitale
.get('/aventure', function(requete,reponse){
  const titrePage = "Aventure Digitale";
  reponse.render('aventure', {titre: titrePage, active:"aventure"});
})
// Page Réalisations
.get('/realisations', function(requete,reponse){
  const titrePage = "Réalisations";
  reponse.render('realisations', {titre: titrePage, active:"realisation"});
})
// Affichage du formulaire de contact
.get('/contactform', function(requete,reponse,next){
  const titrePage = "Formulaire de contact";
  reponse.render('contactform', {titre: titrePage, active:""});
})
// Traitement des données du formulaire
.post('/traitement', function(requete,reponse,next){
  const titrePage = "Formulaire reçu";
  let lenom = requete.body.nom;
  let lemessage = requete.body.msg;

  reponse.render('traitementform', {titre: titrePage, nom: lenom, msg: lemessage, active:""});
})
// Page d'erreur 404
.use(function(requete, reponse, next){
  const titrePage = "Erreur 404";
  const messageErreur = "La page demandée n'existe pas";
  reponse.status(404).render('erreur404', {msg: messageErreur, titre:titrePage});
});


module.exports = router;
