function calcular(){
    let inicio = document.getElementById('infoinicio')
    let fim = document.getElementById('infofim')
    let passo = document.getElementById('infopasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossivel Contar!'   
    }
    else{
        res.innerHTML = 'Calculando.. <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       //condicao para passo 0
        if(p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if(i<f){
            //contagem crescente
            for(let c=i; c <=f; c+=p ){
                res.innerHTML +=`${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c=i; c>=f; c-=p){
                res.innerHTML +=`${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
  
}