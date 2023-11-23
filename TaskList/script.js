const listaTarefas = document.querySelector('#listaTarefas');
const tarefaInput = document.querySelector('.tarefaInput');
const inserirTarefasInput = document.querySelector('#inserirTarefas input');

/*FUNÇÃO PARA INSERIR TAREFA COM ENTER */
inserirTarefasInput.addEventListener('keypress', function(e){
if(e.key === 'Enter'){
    adicionarTarefa();
}
});
/*FUNÇÃO PARA APAGAR TAREFA */
document.addEventListener('click',function(e){
elementoClicado = e.target;
if(elementoClicado.classList.contains('apagar')){
elementoClicado.parentElement.remove();
salvarTarefas();
}
});


function adicionarTarefa(){

if(!tarefaInput.value)   return;
else    criaTarefa(tarefaInput.value);

}

function criaButton(){
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class','apagar');
    return button;
}

function criaLi(tarefa){
    const li = document.createElement('li');
    li.innerText = tarefa;
    li.setAttribute('class','Tarefa'+tarefa+'  ');
    const button = criaButton();
    li.appendChild(button);
    return li;
}
function limpaInput(){
inserirTarefasInput.value = '';
inserirTarefasInput.focus();
};

function criaTarefa(tarefa){
    const li = criaLi(tarefa);
    listaTarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
}

function salvarTarefas(){
const liTarefas = listaTarefas.querySelectorAll('li');
const listaDeTarefas = [];

for(let li of liTarefas){
    let tarefaTexto = li.textContent;
    tarefaTexto = tarefaTexto.replace('Apagar','').trim(); //trim tira o espaçinho do final nesse caso
    listaDeTarefas.push(tarefaTexto);
}
const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas',tarefasJSON);

};

(function adicionarTarefasSalvas(){
const tarefas = localStorage.getItem('tarefas');
const listaDeTarefas = JSON.parse(tarefas);

for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
}
})();