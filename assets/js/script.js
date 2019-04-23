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


  var formulaire = document.getElementById("formEnregistrer");
  var regex;


  formulaire.addEventListener("submit", validation);


// fullname.addEventListener("blur", verifFullName);


function validation(event) {

  event.preventDefault();

  var error = document.getElementById("errorFormulaire");
  var fullname = document.getElementById("fullname");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var errs = [];

  if (fullname.value.length == 0) {
    //alert("Le champ Full name est vide");

    errs.push("Le champ Full name est obligatoire");
  } else if (fullname.value.length < 3 || fullname.value.length > 50) {
    //alert("problème largeur");
    errs.push("Le champ Full name doit etre compris entre 3 et 50 caracteres");
  }

  if (email.value.length == 0) {
    //alert("Le champ email est vide");
    errs.push("Le champ email est obligatoire");
  } else if (email.value.length < 3 || email.value.length > 50) {
    //alert("problème largeur");
    errs.push("Le champ email doit etre compris entre 3 et 50 caracteres");
  }


  if (message.value.length == 0) {
    //alert("Le champ message est vide");
    errs.push("Le champ message est obligatoire");
  } else if (message.value.length < 3 || message.value.length > 250) {
    //alert("problème largeur");
    errs.push("Le champ message doit etre compris entre 3 et 250 caracteres");
  }

  if (errs.length > 0) {
    console.log("erreur");
    var html = "<div class='alert alert-danger' role='alert'>";
    html = html + "<ul>";
    errs.forEach(function (erreur, index, array) {
      html = html + "<li>" + erreur + "</li>";
    });

    html = html + "<ul>";
    //alert(html);
    error.innerHTML = html;

  } else {
    error.innerHTML = "Ok";

  }
}