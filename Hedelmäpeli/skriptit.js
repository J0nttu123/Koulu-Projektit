var rahat = 50;
var raha = document.getElementById('info');

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

    var n1 = slot();
    var n2 = slot();
    var n3 = slot();
    if (rahat < 1) {
        return;
    }
    var kirsika = new Image(100,100); kirsika.src ="img/kirsika.png";
    var omena = new Image(100,100); omena.src ="img/omena.png";
    var päärynä = new Image(100,100); päärynä.src ="img/päärynä.png";
    var imgObjects = [kirsika,omena,päärynä];
    document.getElementById("rahat").innerHTML = voitto(n1, n2, n3);

    // slot1();
    // slot2();
    // slot3();
}
