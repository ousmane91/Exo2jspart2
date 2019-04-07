//Afficher une boîte de dialogue après le focus

var elem = document.getElementById('lastname');
elem.onblur = showmessage;

function showmessage() {
  alert('merci de votre participation');
}
