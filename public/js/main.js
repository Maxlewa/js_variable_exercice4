// EXO 3

// let reponse = prompt('ton prénom ?')
// console.log(reponse);
// alert(reponse);

// EXO 4

// 1

// let nom = "Lemaire"
// let prenom = "Maxence"
// let ville = prompt("Ville ?")
// alert(ville)
// console.log(nom + " " + prenom);

// 2A

// let nom = "Lemaire"
// let prenom = "Maxence"
// let villeDepart = "Bruxelles"
// let villeDestination = "Montréal"

// console.log("Le voyage de " + villeDepart + " vers " + villeDestination + " a été enregistré au nom de " + nom + " " + prenom);
// alert("Le voyage de " + villeDepart + " vers " + villeDestination + " a été enregistré au nom de " + nom + " " + prenom);

// 2B

let nom = prompt('Votre nom :')
let prenom = prompt('Votre prénom :')
let villeDepart = prompt('Ville de départ ?')
let villeDestination = prompt("Ville d'arrivée ?")

let phrase = `Le voyage de ${villeDepart} vers ${villeDestination} a été enregistré au nom de ${nom} ${prenom}`;
console.log(phrase);

alert("Le voyage de " + villeDepart + " vers " + villeDestination + " a été enregistré au nom de " + nom + " " + prenom);