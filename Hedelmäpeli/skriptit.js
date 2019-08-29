var rahat = 0;
var raha = document.getElementById('info');

function slot() {
    Math.floor(Math.random() * 3);
}

function voitto(slot1, slot2, slot3) {
    if (slot1 == slot2 && slot2 == slot3);
    rahat = rahat + 5;
    return;
}

function pelaa() {

    var n1 = slot();
    var n2 = slot();
    var n3 = slot();

    document.getElementById("slot1").innerHTML = slot1;
    document.getElementById("slot2").innerHTML = slot2;
    document.getElementById("slot3").innerHTML = slot3;
    document.getElementById("rahat").innerHTML = voitto(n1, n2, n3);

    // slot1();
    // slot2();
    // slot3();
}









