const relogio = document.querySelector('.relogio');
const data = {
    segundo:0,
    minuto:0,
    hora:0
}
var idInterval = 0

function ZeroEsquerda (x){
    if(x < 10){
        return (`0`+x);
    }
    return x;
}
function condicoesRelogio(){
    if(data.segundo == 60){
        data.minuto++;
        data.segundo = 0;
    }
    if(data.minuto== 60){
        data.hora++;
        data.minuto = 0;
    }
    if(data.hora == 24){
        data.hora=0;
        data.segundo=0;
        data.minuto=0;
    }
}


const Iniciar = () =>{
    relogio.classList.remove('pausado');
    idInterval = setInterval(function () {
        data.segundo++;
        relogio.innerHTML = ZeroEsquerda(data.hora)+':'+ZeroEsquerda(data.minuto)+':'+ZeroEsquerda(data.segundo);
        condicoesRelogio();
    }, 10);
}


function Pausar(){
clearInterval(idInterval);
relogio.classList.add('pausado');
}


function Zerar(){
relogio.classList.remove('pausado');
data.hora=0;
data.minuto=0;
data.segundo=0;
relogio.innerHTML = ZeroEsquerda(data.hora)+':'+ZeroEsquerda(data.minuto)+':'+ZeroEsquerda(data.segundo);
}