var slider = document.getElementById("myRange");

var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    var x = ((slider.value*100)/11)-9;
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
    calcul()
    
})


var slider1 = document.getElementById("slider1");
var output1 = document.getElementById("value1");
output1.innerHTML = slider1.value;

slider1.oninput = function(){
    output1.innerHTML = this.value;
}
slider1.addEventListener("mousemove", function(){
    var y = ((slider1.value*100)/23)-11;
    var color1 = 'linear-gradient(90deg, rgb(117,252,117)' + y + '%, rgb(214,214,214)' + y + '%)';
    slider1.style.background = color1;
    calcul()
})
var montant = document.getElementById("montant");
montant.innerHTML = 8545;

function calcul(){
    mois = slider.value;
    cv = slider1.value
    /************1 MOIS et 2 MOIS**********/
    if (mois==1 || mois==2 && cv>=3 && cv<=6){
        montant.innerHTML = 8545;
    }
    else if (mois==1 || mois==2 && cv>=7 && cv<=10){
        montant.innerHTML = 9131;
    }
    else if (mois==1 || mois==2 && cv>=11 && cv<=14){
        montant.innerHTML = 10581;
    }
    else if (mois==1 || mois==2 && cv>=15 && cv<=23){
        montant.innerHTML = 12645;
    }
    else if (mois==1 || mois==2 && cv>=24){
        montant.innerHTML = 14402;
    }
    /************3 MOIS à 5 MOIS**********/
    else if (mois>=3 && mois<=5 && cv>=3 && cv<=6){
        montant.innerHTML = 15847;
    }
    else if (mois>=3 && mois<=5 && cv>=7 && cv<=10){
        montant.innerHTML = 17253;
    }
    else if (mois>=3 && mois<=5 && cv>=11 && cv<=14){
        montant.innerHTML = 20732;
    }
    else if (mois>=3 && mois<=5 && cv>=15 && cv<=23){
        montant.innerHTML = 25685;
    }
    else if (mois>=3 && mois<=5 && cv>=24){
        montant.innerHTML = 29904;
    }
      /************6 MOIS à 11 MOIS**********/
    else if (mois>=6 && mois<=11  && cv>=3 && cv<=6){
    montant.innerHTML = 28364;
    }
    else if (mois>=6 && mois<=11 && cv>=7 && cv<=10){
        montant.innerHTML = 31175;
    }
    else if (mois>=6 && mois<=11 && cv>=11 && cv<=14){
        montant.innerHTML = 38135;
    }
    else if (mois>=6 && mois<=11 && cv>=15 && cv<=23){
        montant.innerHTML = 48040;
    }
    else if (mois>=6 && mois<=11 && cv>=24){
        montant.innerHTML = 56477;
    }

    /************12 MOIS**********/
    else if (mois==12 && cv>=3 && cv<=6){
    montant.innerHTML = 51015;
    }
    else if (mois==12 && cv>=7 && cv<=10){
        montant.innerHTML = 56368;
    }
    else if (mois==12 && cv>=11 && cv<=14){
        montant.innerHTML = 69625;
    }
    else if (mois==12 && cv>=15 && cv<=23){
        montant.innerHTML = 88492;
    }
    else if (mois==12 && cv>=24){
        montant.innerHTML = 104563;
    }
    
}

