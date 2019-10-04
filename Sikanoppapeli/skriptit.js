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
   
   
      
}

function vuoronVaihto(){
      pistetaulukko[vuoro] += pisteet;
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

}





