let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

let monTableau = [1, 2, 3, 4, 5];
let monTableau2 = [10, 20, 30, 40, 50];
let i = 0;
while(i < monTableau2.length) {
    let result = monTableau2[i] + 2;
    console.log(monTableau2[i] + "+ 2 = " + result);
    i++;
}


let monTableau3 = [12, 22, 32, 42, 52];
let a = 0;
while(a < monTableau3.length) {
    let result = monTableau3[a] / 30;
    console.log(monTableau3[a] + "/ 30 = " + result);
    a++
}

let tableauUnV3 = tableauUn;
let modulo = 0;
while(modulo < tableauUnV3) {
    let result = tableauUnV3[modulo] % 2;
    console.log(tableauUnV3[modulo] + " % 2 =" + result);
    modulo++;
}

let tableauUnV2 = tableauUn.filter(function(filtre){
    return filtre > 2;
})
console.log(tableauUnV2);

let tableauUnV4 = tableauUn.filter(function(filtre2){
    return filtre2 >= 4;
})
console.log(tableauUnV4);

//------------------------------------------------------------------------
//PARTIE 2

let tableau2 = [tableauDeux];
console.log(tableau2);

let tableau2v2= [tableau2, tableauDeux];
console.log(tableau2v2);

let tableau2v3 = tableauDeux.concat(tableauDeux);
console.log(tableau2v3);

let tableau2v4 = tableauDeux.filter(function(filtre3){
    return filtre3.length > 2 + 2;
})
console.log(tableau2v4);

let tableauDeuxv1 = tableauDeux;
let modulo2 = 0;
while(modulo < tableauDeuxv1) {
    let result = tableauDeuxv1[modulo2] % 2;
    console.log(tableauDeuxv1[modulo2] + " % 2 =" + result);
    modulo2++;
}
