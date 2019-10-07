var pisteet = 0;
var pistetaulukko = [0,0];
var vuoro = 0;
var images = [
    "noppa1.jpg",
    "noppa2.jpg",
    "noppa3.jpg",
    "noppa4.png",
    "noppa5.png",
    "noppa6.png"];

function pelaa(){
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("noppa").src = "img/"+images[dice - 1];
    pisteet += dice; 
    document.getElementById("pisteet").innerHTML = pisteet;

    if (dice == 1 ){
      pisteet = 0;
      vuoronVaihto();
    }
   
}

function vuoronVaihto(){
      pistetaulukko[vuoro] += pisteet;
      
      if (pistetaulukko[vuoro] >= 100){
        pelaajat();
        alert("win");
        document.getElementById("pelaa").disabled = true;
        document.getElementById("vaihda").disabled = true;   
        return;
      }

      vuoro = vuoro + 1;
      
      if (vuoro > pistetaulukko.length - 1) {
        vuoro = 0;
      }
      pisteet = 0;

      

      pelaajat();
  
}


function pelaajat(){
    document.getElementById("pelaaja1").innerHTML = pistetaulukko[0];
    document.getElementById("pelaaja2").innerHTML = pistetaulukko[1];

    if(vuoro == 0){
      document.getElementById("pelaaja").innerHTML = "Pelaajan1 vuoro"
    }else if(vuoro == 1){
      document.getElementById("pelaaja").innerHTML = "Pelaajan2 vuoro"
    }
  
}









