const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal: "bicho.png",
    bravo:  "bravo.png",
    morto:   "morto.png",
    comendo:  "comendo.png",
    alimentado: "marshmello.png",
}


let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function contadortempo () {
if(intervalo)clearInterval

 intervalo = setInterval(() => {
contador++;

console.log("tempo:", contador);

if(contador == 30){
cria.scr = estados.bravo;

}
if(contador == 60){
cria.scr = estados.morto;

}

 }, 1000);



}

function alimentar(){

    cria.scr = estados.comendo;
    contador =0;
    console.log("comeu");

    if(time_click) clearInterval(time_click)
        time_click = setTimeout(()=>{
            cria.src = estados.comendo;
            time_out = setTimeout(()=>{
                  cria.src = estados.normal;


            },2000);
        },1000);
}



contadortempo();



    
