console.log("start");

let op = "X";
let bwin = false;

let v0=v1=v2=v3=v4=v5=v6=v7=v8 = 9;

function Click(nb){
    
    switch (bwin) {
        case false:
            if(nb == 0){
                xo(v0);
                if(v0 == 9){v0 = xo();show(v0,nb);}else{clicked(nb,v0)}
                win();
            }else if(nb == 1){
                xo(v1);
                if(v1 == 9){v1 = xo();show(v1,nb);}else{clicked(nb,v1)}
                win();
            }else if(nb == 2){
                xo(v2);
                if(v2 == 9){v2 = xo();show(v2,nb);}else{clicked(nb,v2)}
                win();
            }else if(nb == 3){
                xo(v3);
                if(v3 == 9){v3 = xo();show(v3,nb);}else{clicked(nb,v3)}
                win();
            }else if(nb == 4){
                xo(v4);
                if(v4 == 9){v4 = xo();show(v4,nb);}else{clicked(nb,v4)}
                win();
            }else if(nb == 5){
                xo(v5);
                if(v5 == 9){v5 = xo();show(v5,nb);}else{clicked(nb,v5)}
                win();
            }else if(nb == 6){
                xo(v6);
                if(v6 == 9){v6 = xo();show(v6,nb);}else{clicked(nb,v6)}
                win();
            }else if(nb == 7){
                xo(v7);
                if(v7 == 9){v7 = xo();show(v7,nb);}else{clicked(nb,v7)}
                win();
            }else if(nb == 8){
                xo(v8);if(v8 == 9){v8 = xo();show(v8,nb);}else{clicked(nb,v8);}win();
            }
            break;
        default:
            break;
    }
}

function xo(n){
    if(n == 9){
        op = (op == 'X'?'O':'X');
    }return op;
}

function show(c,d){
    console.log(c+d);
    document.getElementById(d).innerHTML = "<p>"+c+"</p>";
    document.getElementById(d).style.backgroundColor = "#04aa6d";
}

function restart(){
    console.log("restart");
    v0=v1=v2=v3=v4=v5=v6=v7=v8 = 9;
    let sq = document.getElementsByClassName("square");

    for (let i = 0; i < sq.length; i++) {
        sq[i].innerHTML = "";
        sq[i].style.backgroundColor = "#fff";
    }
    document.getElementById("win").innerHTML = "<h1>Waiting</h1>";
    bwin = false;
}

function clicked(nb,ne){
    console.log(nb + " : Já foi clicado - " + ne);
}

function win(){
    if(v0==v1 && v1==v2 && v1!=9 || v3==v4 && v4==v5 && v4!=9 || v6==v7 && v7==v8 && v7!=9 ||
       v0==v3 && v3==v6 && v3!=9 || v1==v4 && v4==v7 && v4!=9 || v2==v5 && v5==v8 && v5!=9 ||
        v2==v4 && v4==v6 && v4!=9 || v0==v4 && v4==v8 && v4!=9){
        console.log("win: "+xo());
        document.getElementById("win").innerHTML = "<h1>Congratulations '"+xo()+"' Win</h1>";
        bwin = true;
    }

    if(v0!=9 && v1!=9 && v2!=9 && v3!=9 && v4!=9 && v5!=9 && v6!=9 && v7!=9 && v8!=9 && bwin == false){
        document.getElementById("win").innerHTML = "<h1>A Tie</h1>";
    }
}

function loading(){
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            console.log(i); 
        }, 500);       
    }
}