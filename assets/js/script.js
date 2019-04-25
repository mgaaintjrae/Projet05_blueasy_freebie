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




/* ****************************   FORMULAIRE   ****************************** */

/*var fullname = document.querySelector("#fullname"); //champ fullname
var mail = document.querySelector("#email"); //champ email
var message = document.querySelector("#message"); //champ message
var formulaire = document.querySelector("#formEnregistrer"); //champ formulaire



formulaire.addEventListener("submit", function (e) { //fonction du gestionnaire d'évènement Submit

	e.preventDefault(); //bloque l'envoi du formulaire

	var valeurFullname = fullname.value; //valeur du champ fullname	
	var valeurMail = mail.value; //valeur du champ mail	
	var valeurMessage = message.value; //valeur du champ message	

	var errorFullname = document.querySelector("#errorFullname"); //champ du span erreur	
	var errorMail = document.querySelector("#errorMail");
	var errorMessage = document.querySelector("#errorMessage");


	function verifFullname() {
		//console.log(valeurFullname);

		if (!fullname) { // Si fullname n'existe pas
			return false; // Je retourne faux
		} else if (valeurFullname == "") { // Sinon si la valeur deu champ fullname est vide
			//console.log("champ vide!");
			errorFullname.innerText = "The fullname is required !"; // J'affiche une erreur
			return false; //Et je retourne faux
		} else if (!valeurFullname.match(/^[A-Za-z' -]+$/)) {
			//console.log("caractères incorrects !");
			errorFullname.innerText = "Incorrect characters !";
			return false;
		} else if (valeurFullname.length < 3 || valeurFullname.length > 40) {
			//console.log("problème de longueur");
			errorFullname.innerText = "Please enter a name between 2 and 40 characters";
			return false;
		} else {
			errorFullname.innerText = "";
			//console.log("ok");
			return true;
		}

	};
	verifFullname();

	function verifMail() {
		//console.log(valeurMail);

		if (!mail) {
			return false;
		} else if (valeurMail == "") {
			errorMail.innerText = "The mail is required !";
			return false;
		} else if (!valeurMail.match(/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)) {
			errorMail.innerText = "Invalid mail !";
			return false;
		} else if (valeurMail.length > 50) {
			//console.log("problème de longueur");
			errorMail.innerText = "Please enter a mail less than 50 characters";
			return false;
		} else {
			errorMail.innerText = "";
			//console.log("ok");
			return true;
		}

	};
	verifMail();

	function verifMessage() {
		//console.log(valeurMessage);
		if (!message) {
			return false;
		} else if (valeurMessage == "") {
			errorMessage.innerText = "Do not hesitate to leave me a message";
			return false;
		} else if (!valeurMessage.match(/^[A-Z0-9a-z-é'èàçêâîôëäïö,0-9]+$/)) {
			//console.log("Caractères incorrects !");
			errorMessage.innerText = "Incorrect characters !";
			return false
		} else {
			errorMessage.innerText = "";
			//console.log("ok");
			return true;
		}
	};
	verifMessage();

	if (verifFullname() && verifMail() && verifMessage() == true ){		
		confirm("Do you confirm sending your message?");
		return true;
	} else {
		return false;
	}

	/*
		if (verifFullname() == true) {
			console.log("Envoie le formulaire");
		} if (verifMail() == true) {
			console.log("Envoie le formulaire");
		} if (verifMessage() == true) {
			console.log("Envoie le formulaire");
		} else {
			alert("Le formulaire n'a pas pu être envoyé !");
		}
		*/
/*
});
*/


/* ****************************   FORMULAIRE   ****************************** 
******************************  AUTRE METHODE   *****************************
window.onload=function(){
	var formulaire = document.getElementById("formEnregistrer");
	formulaire.addEventListener("submit", verifFullName);
	}
	function verifFullName(event) {
	
		event.preventDefault();
	
		var error = document.getElementById("errorFormulaire");
		var fullname = document.getElementById("fullname");
		var email = document.getElementById("email");
		var message = document.getElementById("message");
		var errs = [];
		
		if(fullname.value.length  == 0){
			//alert("Le champ Full name est vide");
	
			errs.push("Le champ Full name est obligatoire");
		}
		else  if (fullname.value.length < 3 || fullname.value.length > 50){
			//alert("problème largeur");
			errs.push("Le champ Full name doit etre compris entre 3 et 50 caracteres");
		}
		
		if(email.value.length  == 0){
			//alert("Le champ email est vide");
			errs.push("Le champ email est obligatoire");
		}
		else  if (email.value.length < 3 || email.value.length > 50){
			//alert("problème largeur");
			errs.push("Le champ email doit etre compris entre 3 et 50 caracteres");
		}
	
		
			if(message.value.length  == 0){
			//alert("Le champ message est vide");
			errs.push("Le champ message est obligatoire");
		}
		else  if (message.value.length < 3 || message.value.length > 250){
			//alert("problème largeur");
			errs.push("Le champ message doit etre compris entre 3 et 250 caracteres");
		}
	  
		if(errs.length > 0){
			console.log("erreur");
			var html = "<div class='alert alert-danger' role='alert'>";
			html = html + "<ul>";
			errs.forEach(function(erreur, index, array) {
				html = html + "<li>" +erreur + "</li>";
			});
			
			html = html + "<ul>";
			//alert(html);
			error.innerHTML  = html;
		
		}
		else{
			error.innerHTML = "Ok";
		
		}  
	}
	*/
	
	