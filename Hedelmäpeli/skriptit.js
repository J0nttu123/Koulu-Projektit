var rahat = 50;
var lukko1 = lukko2 = lukko3 = 0; 
var n1, n2, n3;
var panos = 1;
var saa_lukita = false;
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var images = [
    "omena.png",
    "päärynä.png",
    "kirsika.png"];

function slot() {
    console.log()
    return Math.floor(Math.random() * 3);
}

function voitto() {

    // Omena
    if (n1 == n2 && n2 == n3) {

        rahat = rahat + panos;

        if (n1 == 0) {
            if (panos == 1){
                rahat += 1;
            } else if(panos == 2) {
                rahat += 2;
            } else if (panos == 3){
                rahat += 3;
            }
            
        // Päärynä
        } else if (n1 == 1) {
            if (panos == 1){
                rahat += 2;
            } else if(panos == 2) {
                rahat += 4;
            } else if (panos == 3){
                rahat += 6;
            }
            
        // Kirsikka
        } else if (n1 == 2) {
            if (panos == 1){
                rahat += 3;
            } else if(panos == 2) {
                rahat += 6;
            } else if (panos == 3){
                rahat += 10;
            }
        }
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
          }
    }
    
    
    update();
}

function pelaa() {

    if (rahat < 1) {
        return;
    } else if (rahat < panos){
        return;
    }

    rahat = rahat - panos;

    if (lukko1 == 0) {
        n1 = slot();
    }
        

    if (lukko2 == 0) {
        n2 = slot();
    }
    
   if (lukko3 == 0) {
        n3 = slot(); 
    }
      
    var s1 = document.getElementById("slot1");
    var s2 = document.getElementById("slot2");
    var s3 = document.getElementById("slot3");
    
    s1.src = "img/"+images[n1];
    s2.src = "img/"+images[n2];
    s3.src = "img/"+images[n3];

    voitto();

    if (lukko1 == 1 || lukko2 == 1 || lukko3 == 1){       
        saa_lukita = false;
        lukko1 = lukko2 = lukko3 = 0;
    } else {
        saa_lukita = true;
    }

    update();
    
}

var asetaPanos = function(x){
        panos = x;
        if(panos == 1){
            document.getElementById("taulu1").src = "img/taulu1.png"
        }else if (panos == 2){
            document.getElementById("taulu1").src = "img/taulu2.png"
        }else if (panos == 3){
            document.getElementById("taulu1").src = "img/taulu3.png"
        }

        
        update();
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
    var l1 = document.getElementById("lukko1");
    var l2 = document.getElementById("lukko2");
    var l3 = document.getElementById("lukko3");
    
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
