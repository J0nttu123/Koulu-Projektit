var rahat = 50;
var slots = [0,0,0];
var lukko1 = lukko2 = lukko3 = 0; 
var n1, n2, n3;
var panos = 1;
var saa_lukita = false;

var images = [
    "omena.png",
    "päärynä.png",
    "kirsika.png"];

function slot() {
    return Math.floor(Math.random() * 3);
}

function voitto(slot1, slot2, slot3) {
    if (slot1 == slot2 && slot2 == slot3) {
    rahat = rahat + 5;
    } else {
        rahat = rahat-1;
    }
    return rahat;

}


function pelaa() {

    if (lukko1 == 0) {
        n1 = slot();
    }
        

    if (lukko2 == 0) {
        n2 = slot();
    }
    
   if (lukko3 == 0) {
        n3 = slot(); 
    }
       
    if (rahat < 1) {
        return;
    }
      
    var s1 = document.getElementById("slot1");
    var s2 = document.getElementById("slot2");
    var s3 = document.getElementById("slot3");
    
    s1.src = "img/"+images[n1];
    s2.src = "img/"+images[n2];
    s3.src = "img/"+images[n3];

    document.getElementById("rahat").innerHTML = voitto(n1, n2, n3);
    document.getElementById("panos").innerHTML = 1;

    if (lukko1 == 1 || lukko2 == 1 || lukko3 == 1){       
        saa_lukita = false;
        lukko1 = lukko2 = lukko3 = 0;
    } else {
        saa_lukita = true;
    }
       
    update();

}

function panos(){
    
}

function lukitse(j) {

    if (saa_lukita == false) {
        return;
    }

    if (j.id == "lukko1") {
        if (lukko1 == 0) {
            lukko1 = 1;
        } else {
            lukko1 = 0;    
        }
        console.log(lukko1);
        vaihdaKuva(j, lukko1);                                                                                                                  
    }

    if (j.id == "lukko2") {
        console.log(j.id)
        if (lukko2 == 0) {
            lukko2 = 1;
        } else {
            lukko2 = 0;
        }
        console.log(lukko2);
        vaihdaKuva(j,lukko2);
    }

    if (j.id == "lukko3") {
        console.log(j.id)
        if (lukko3 == 0) {
            lukko3 = 1;
        } else {
            lukko3 = 0;
        }
        console.log(lukko3);
        vaihdaKuva(j,lukko3);

    }
    
}

function vaihdaKuva(elem, lukko) {
    console.log(elem);
    if (lukko == 0)   { 
        document.getElementById(elem.id).src = "./img/lukitus1.png";
    }
    else {
        document.getElementById(elem.id).src = "./img/lukitus2.png";
    }

}

function update() {

    document.getElementById("panos").innerHTML = panos;
    document.getElementById("rahat").innerHTML = rahat;

    // Tarkista lukitus
    let l1 = document.getElementById("lukko1");
    let l2 = document.getElementById("lukko2");
    let l3 = document.getElementById("lukko3");
    
    vaihdaKuva(l1,lukko1);
    vaihdaKuva(l2,lukko2);
    vaihdaKuva(l3,lukko3);

    if (saa_lukita == false){
        document.getElementById("lukko1").disabled = true;
    } else {
        document.getElementById("lukko1").disabled = false;
    }

    if (saa_lukita == false){
        document.getElementById("lukko2").disabled = true;
    } else {
        document.getElementById("lukko2").disabled = false;
    }

    if (saa_lukita == false){
        document.getElementById("lukko3").disabled = true;
    } else {
        document.getElementById("lukko3").disabled = false;
    }

    

}