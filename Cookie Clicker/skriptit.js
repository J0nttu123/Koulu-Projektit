var kerroin = 1;
var laskuri = 0;


    function nappi(){
        laskuri = laskuri + 1 * kerroin;
        console.log('Pisteet: ' + laskuri);
        tulosta();
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
        if(laskuri < 100){
            show();
            info.innerHTML = "Sinulla pitää olla 100 pistettä";
            hide();
            return;
        }
        
    }