const express = require('express');
const path = require('path');

const app = express();

// définir l'emplacement où sont placées toutes nos ressources (dossier public)
app.use(express.static(path.join(__dirname,'public')));

// définir le moteur de template utilisé (EJS)
app.set('view engine', 'ejs');

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

app.listen(443);
console.log("Serveur démarré...");
