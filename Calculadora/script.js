function Calculadora(){

this.calculadora = document.querySelector("#calculadora");
this.display = document.querySelector('.display');

this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
};


this.capturaEnter = () => {
    this.display.addEventListener('keypress', e =>{
        if(e.key === 'Enter')this.fazerConta();
    });
}

this.capturaCliques = () => {
    this.calculadora.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('num')) this.insereNumDisplay(el.textContent);
        if(el.classList.contains('clear')) this.clear();
        if(el.classList.contains('del')) this.deletar1Num();
        if(el.classList.contains('equal')) this.fazerConta();
    });

};

this.insereNumDisplay = el =>{
    this.display.value += el;
    this.display.focus();
};

this.clear= () => {
    this.display.value = '';
    this.display.focus();
};

this.deletar1Num = () => {
    this.display.value = this.display.value.slice(0,-1);
    this.display.focus();
};

this.fazerConta = () =>{
    try{
        const conta = eval(this.display.value);
        if(!conta) {
            alert('Conta inválida');
            return;
          }
        this.display.value = conta;

    }catch(err){
        alert('Conta inválida');
    }
};
}

const calculadora = new Calculadora();
calculadora.inicia();