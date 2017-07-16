// Jeu du pendu

/* On stock les mots dans un tableau et on crée une nouvelle variable pour les selectionner aléatoirement. On initialise également un compteur de fautes à 0. */ 

var mots = [ "chat", "chien", "homme", "ornithorynque" ];

var mot = mots[Math.floor(Math.random() * mots.length)];

var erreurs = 0;

/* On utilise un tableau et une boucle pour parcourir la longueur du mot selectionné afin de le retourner sous forme d'underscore */

var motcache = [];

for (var i = 0; i < mot.length; i++) {
motcache[i] = "_"; }

/* On passe au jeu en appliquant des options selon la saisie de l'user */

var lettresrestantes = mot.length;

do {
alert(motcache.join(" "));
var choix = prompt("Trouvez les lettres manquantes");
if (choix.length != 1) {
alert("Merci d'entrer une lettre pour pouvoir jouer.");
} 
else {
for (var j = 0; j < mot.length; j++) {
if (mot[j] === choix) {
 motcache[j] = choix;
 lettresrestantes--;
}
}
}
}
while (lettresrestantes > 0) 

if (choix != mot) {coups++}

if (erreurs <= 10){
alert("La réponse est " + mot);
alert("Bien joué, vous avez fait seulement " + coups + " erreurs");}

else{
alert("La réponse est " + mot);
alert("Perdu, vous avez fait " + coups + " erreurs");}