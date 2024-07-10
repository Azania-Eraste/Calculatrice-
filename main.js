
var Ans;

function AjoutNombre(nombre) {
    document.getElementById('ecran').value += nombre;
}

function effaceTout() {
    document.getElementById('ecran').value = "";
}

function calcul() {
    try {
        var resultat = eval(document.getElementById('ecran').value);
        document.getElementById('ecran').value = resultat;
        Ans = resultat;
    } catch (error) {
        document.getElementById('ecran').value = 'ERROR';
    }
}

function efface() {
    var resultat = document.getElementById('ecran').value;
    resultat = resultat.slice(0, -1);
    document.getElementById('ecran').value = resultat;
}

function afficheAns() {
    document.getElementById('ecran').value += Ans;
}