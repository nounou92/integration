let nom : string;
let prenom : string;
let age : number;
let active : boolean;
let taille : number;

nom = 'Sassi';
prenom = 'Nouha'
age =36;
active = true;
taille = 1.63;


let couleurs = ['bleu', 'blanc', 'rouge', 'jaune', 'marron', 'noir','orange', 'rose', 'violet','vert'];

couleurs.forEach(console.log)
for (let i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i]);    
}

let num = ['main', 89 , true];
num.push(false);
num.push('pieds');
num.push(30);
num.forEach(console.log)

let part : (String | Number) [] = []
part.push('dents');
part.push (37);
part.push('bras')
part.push(2);
part.forEach(console.log)

// exercice 1
//Question 1
let firstName : 'Sassi'

//Question 2
let fName : String
fName = 'Sassi'

//Question 3

let SpacecraftName : String
let speedMPH  : Number
let kilometersToMars : Number
let kilometersToTheMoon : Number
let milesPerKilometer : Number


let personne : {
    nom : string
    prenom : string
    age : number
};

personne = {
    nom : 'Sassi',
    prenom : 'Nouha',
    age : 36
}

console.log(personne);
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age);


enum typeAppartement {
    hlm = 'hlm',
    privee = 'privee'
};

let appartement : {
    etage : number,
    superficie : number,
    agence : string,
    ascenseur : boolean,
    parking : any,
    surfacePiece : number[],
    typeAppartement : typeAppartement
}

appartement = {
    etage : 2,
    superficie : 56,
    agence : 'ijgrfjr',
    ascenseur : true,
    parking : 'oui',
    surfacePiece : [20,3,12],
    typeAppartement : typeAppartement.privee
}
console.log(appartement);
console.log(appartement.etage);
console.log(appartement.parking);

