const express = require('express');
const path = require('path');

const app = express();

// définir l'emplacement où sont placées toutes nos ressources (dossier public)
app.use(express.static(path.join(__dirname,'public')));

// définir le moteur de template utilisé (EJS)
app.set('view engine', 'ejs');

// Pour éviter l'erreur Heroku $PORT
app.set('port', (process.env.PORT || 8080));

// Page d'accueil
app.get('/', function(requete,reponse){
    const titrePage = "Page d'accueil";
    reponse.render('index', {titre: titrePage});
})
// Page de présentation
.get('/presentation', function(requete,reponse){
    const titrePage = "Présentation";
    reponse.render('presentation', {titre: titrePage});
})
// Page Aventure Digitale
.get('/aventure', function(requete,reponse){
    const titrePage = "Aventure Digitale";
    reponse.render('aventure', {titre: titrePage});
})
// Page Réalisations
.get('/realisations', function(requete,reponse){
    const titrePage = "Réalisations";
    reponse.render('realisations', {titre: titrePage});
})
// Page d'erreur 404
.use(function(requete, reponse, next){
    const titrePage = "Erreur 404";
    const messageErreur = "La page demandée n'existe pas";
    reponse.status(404).render('erreur404', {msg: messageErreur, titre:titrePage});
});

// Modification pour le fonctionnement sur Heroku
app.listen(app.get('port'), function() {
    console.log('App is running on Heroku, server is listening on port ', app.get('port'));
});
console.log("Serveur démarré...");
