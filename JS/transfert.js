function getElements(){
    var chaine_res = ""
    var score = 0
    var prenom = document.page_traitement.firstname.value

    if(prenom == ""){
        document.getElementById("result").innerHTML = "Il faut remplir le champs prénom sinon tu ne peux pas accéder à ton score !!";
        document.getElementById("result").style.border = "2px solid red"
        document.getElementById("result").style.padding = "20px"
        document.getElementById("result").scrollIntoView();
        return;
    }

    document.getElementById("img1").style.visibility = "visible"
    document.getElementById("img2").style.visibility = "visible"
    document.getElementById("img3").style.visibility = "visible"
    document.getElementById("img4").style.visibility = "visible"
    document.getElementById("img5").style.visibility = "visible"


    var question1_rep = document.page_traitement.question1.value
    if(question1_rep == "Exorciste"){
        document.getElementById("img1").src = "../PHOTOS_PAGES/correct.png"
        score += 1
    }

    else {
        document.getElementById("img1").src = "../PHOTOS_PAGES/faux.png"
        document.getElementById("c1").style.color = "green"
    }

    var question2_rep = document.page_traitement.question2.value
    if(question2_rep == "rituels"){
        document.getElementById("img2").src = "../PHOTOS_PAGES/correct.png"
        score += 1
    }

    else {
        document.getElementById("img2").src = "../PHOTOS_PAGES/faux.png"
        document.getElementById("c2").style.color = "green"
    }

    var question3_rep = document.page_traitement.question3.value
    if(question3_rep == "musee_occult"){
        document.getElementById("img3").src = "../PHOTOS_PAGES/correct.png"
        score += 1
    }

    else {
        document.getElementById("img3").src = "../PHOTOS_PAGES/faux.png"
        document.getElementById("c3").style.color = "green"
    }

    var question4_rep = document.page_traitement.question4.value
    if(question4_rep == "Winnie"){
        document.getElementById("img4").src = "../PHOTOS_PAGES/correct.png"
        score += 1
    }

    else {
        document.getElementById("img4").src = "../PHOTOS_PAGES/faux.png"
        document.getElementById("c4").style.color = "green"
    }

    var question5_rep = document.page_traitement.poupee.value
    if(question5_rep != "" && question5_rep.toUpperCase() == "ROBERT"){
        document.getElementById("img5").src = "../PHOTOS_PAGES/correct.png"
        score += 1
    }

    else {
        document.getElementById("img5").src = "../PHOTOS_PAGES/faux.png"
        document.getElementById("poupee").style.color = "green"
        document.getElementById("poupee").value = "robert"
    }

    chaine_res = "<span>Ton score est de "+score+", </span><span> "

    if(score >= 4) {
        chaine_res += prenom+" tu es imbattable !"
    }

    else if(score < 4 && score >= 3) {
        chaine_res += prenom+" tu t'en sors plutôt bien !"
    }

    else {
        chaine_res += prenom+" tu dois revoir ça !"
    }

    chaine_res += "</span>"
    document.getElementById("result").style.border = "2px solid red"
    document.getElementById("result").style.padding = "20px"
    document.getElementById("result").innerHTML = chaine_res;
    document.getElementById("result").scrollIntoView();
}

function resetElements() {
    document.getElementById("img1").style.visibility = "hidden"
    document.getElementById("img2").style.visibility = "hidden"
    document.getElementById("img3").style.visibility = "hidden"
    document.getElementById("img4").style.visibility = "hidden"
    document.getElementById("img5").style.visibility = "hidden"

    document.getElementById("c1").style.color = "white"
    document.getElementById("c2").style.color = "white"
    document.getElementById("c3").style.color = "white"
    document.getElementById("c4").style.color = "white"
    document.getElementById("poupee").style.color = "black"
    document.getElementById("poupee").value = ""


    document.page_traitement.firstname.value = ""
    document.page_traitement.poupee.value = ""
    document.page_traitement.question1.value = "Shining"
    document.page_traitement.question2.value = "assassinat"
    document.page_traitement.question3.value = "musee_occult"
    document.page_traitement.question4.value = "teletubbies"

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style = "none";
}