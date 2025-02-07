window.onload = function(){
    alert("Bienvenu a l'exposition d'art !");
}

document.getElementById("contactForm").onsubmit = function(){
    var fields = document.querySelectorAll("input, textarea");
    for (var fields of fields){
        if (!fields.values){
            alert("veuillez remplir tous les champs");
            return false;
        }
    }
    alert ("Formulaire envoyee avec succes !");
    return false;
}