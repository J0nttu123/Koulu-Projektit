var kerroin = 1;
var laskuri = 0;
var info = document.getElementById('info');

function nappi(){
    laskuri = laskuri + 1 * kerroin;
    console.log('Pisteet: ' + laskuri);
    tulosta();
    info.innerHTML = "";
}

function tulosta(){
    console.log(laskuri);
    document.getElementById("laskenta").innerHTML = laskuri;
}

function laskuri(){
    console.log(pisteet);
    tulosta();
}

function laske(){
    console.log(laskuri);
    laskuri = laskuri + 1 * kerroin * 10;
    laskenta.innerHTML = laskuri;
}

function kaksi(){
    if(laskuri < 200){
        console.log(info);
        info.innerHTML = "Pisteet ei riitä";
        return;
    }
    laskuri = laskuri-200;
    kerroin = kerroin + 1;
    tulosta();
    console.log("kerroin:" + kerroin);
}

function nelja(){
    if(laskuri < 500){
        console.log(info);
        info.innerHTML = "Pisteet ei riitä";
        return;
    }
    laskuri = laskuri-500;
    kerroin = kerroin + 3;
    tulosta();
    console.log("kerroin:" + kerroin);
}

function kymmenen(){
    if(laskuri < 2000){
        console.log(info);
        info.innerHTML = "Pisteet ei riitä";
        return;
    }
    laskuri = laskuri-2000;
    kerroin = kerroin + 9;
    tulosta();
    console.log("kerroin:" + kerroin);
}

