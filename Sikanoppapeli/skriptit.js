var pisteet = 0;
var pelaaja1 = 0;
var pelaaja2 = 0;
var images = [
    "noppa1.jpg",
    "noppa2.jpg",
    "noppa3.jpg",
    "noppa4.jpg",
    "noppa5.jpg",
    "noppa6.jpg"];

function pelaa(){
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = dice;
    pisteet += dice; 
    document.getElementById("pisteet").innerHTML = pisteet;
    var s1 = document.getElementById("noppa").innerHTML = pisteet
    
    s1.src = "img/"+images[n1];
    s1.src = "img/"+images[n2];
    s1.src = "img/"+images[n3];
         
}




