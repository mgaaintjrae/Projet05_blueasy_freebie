/* ***************** Système de filtres sur images ***********************
 **********************     Section PORTFOLIO     *********************** */

/* ******************* VARIABLES ******************** */
var portfolio_panoramas = document.querySelector("#linkPanoramas");
var portfolio_portraits = document.querySelector("#linkPortraits");
var portfolio_macro = document.querySelector("#linkMacro");
var portfolio_journal = document.querySelector("#linkJournal");
var portfolio_all = document.querySelector("#linkAll");

/* ******************* EVENEMENTS ******************** */
portfolio_panoramas.addEventListener("click", clickPanoramas);
portfolio_portraits.addEventListener("click", clickPortraits);
portfolio_macro.addEventListener("click", clickMacro);
portfolio_journal.addEventListener("click", clickJournal);
portfolio_all.addEventListener("click", clickAll);

/* ******************* FONCTIONS ******************** */
function clickPanoramas() {
  document.querySelector("#panoramas").style.display = 'block';
  document.querySelector("#journal").style.display = 'none';
  document.querySelector("#macro").style.display = 'none';
  document.querySelector("#portraits").style.display = 'none';
}

function clickPortraits() {
  document.querySelector("#panoramas").style.display = 'none';
  document.querySelector("#journal").style.display = 'none';
  document.querySelector("#macro").style.display = 'none';
  document.querySelector("#portraits").style.display = 'block';
}

function clickMacro() {
  document.querySelector("#panoramas").style.display = 'none';
  document.querySelector("#journal").style.display = 'none';
  document.querySelector("#macro").style.display = 'block';
  document.querySelector("#portraits").style.display = 'none';
}

function clickJournal() {
  document.querySelector("#panoramas").style.display = 'none';
  document.querySelector("#journal").style.display = 'block';
  document.querySelector("#macro").style.display = 'none';
  document.querySelector("#portraits").style.display = 'none';
}

function clickAll() {
  document.querySelector("#panoramas").style.display = 'block';
  document.querySelector("#journal").style.display = 'block';
  document.querySelector("#macro").style.display = 'block';
  document.querySelector("#portraits").style.display = 'block';
}



/* ********************         Formulaire        *********************** */

/* ******************* VARIABLES ******************** */
/*
var formulaire = document.querySelector("#envoyer");

var fullname = document.querySelector("#fullName");

/* ******************* EVENEMENTS ******************** */
/*
formulaire.addEventListener("submit", verifFinale);

// fullname.addEventListener("blur", verifFullName);

/* ******************* FONCTIONS ******************** */
/*
function verifFullName() {
  if (fullname.value.length < 3 || fullname.value.length > 50) {
    console.log("problème largeur");
  } else {
    console.log("ok");
  }
}


// Envoi du formulaire true ou false
function verifFinale(event) {
  event.preventDefault();
  if (error["fullname"] == "ok" && error["email"] == "ok") {
    console.log("envoi du message");
  } else {
    console.log("erreur");
  }
}*/


window.onload = function () {
  /* *************** VARIABLES **************** */
  var formulaire = document.querySelector("#envoyer");
  /* *************** EVENEMENTS **************** */
  formulaire.addEventListener("submit", verifFullName, false);
}

// fullname.addEventListener("blur", verifFullName);

/* *************** FONCTIONS **************** */
function verifFullName() {
  console.log('lol');

  var fullname = document.querySelector("#fullName");

  if (fullname.value == "") alert("Le champ Nom est vide");
  else if (fullname.value.length < 3 || fullname.value.length > 50) alert("problème largeur");
  else alert("ok");

}

/*
var bouton1 = document.querySelector("#btn1");
function envoiForm(event) {
  if (this.elements.adresse.value === "") {
    alert("L'adresse est vide.");
    event.preventDefault();
  }
}

var formulaire = document.getElementById("coordonnees");
formulaire.addEventListener("submit", envoiForm, false);

*/