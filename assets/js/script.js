var portfolio = document.getElementById("linkPanorama");
portfolio.addEventListener("click", clickPanorama);



function clickPanorama(){

  //document.querySelector("#panorama").style.display = 'none';
  document.querySelector("#journal").style.display = 'none';
  document.querySelector("#macro").style.display = 'none';
  document.querySelector("#portrait").style.display = 'none';


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