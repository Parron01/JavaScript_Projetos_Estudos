var Adicionados = []
var resp = document.getElementById('resp')
var valor = document.getElementById('entradaNum')
/////////////////////////////////////////////////////////////////////////////////////
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
/////////////////////////////////////////////////////////////////////////////////////
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

/////////////////////////////////////////////////////////////////////////////////////
function adicionar()
{
    var valor = document.getElementById('entradaNum')
    var select = document.getElementById('selectAnalisador')
    if(valor.value.length == 0){
        window.alert("Não inseriu nenhum número.")
    }
    else if(isNumero(valor.value) && !inLista(valor.value, Adicionados)) {
        Adicionados.push(Number(valor.value))
        var num = Number(valor.value)
        var inserido = document.createElement('option')
        inserido.text = `Valor ${num} foi adicionado!`
        select.appendChild(inserido)
        resp.innerHTML = ''
    }else{
        window.alert("Valor inválido. Ou já encontrado na lista.")
        }
        valor.value = ''
        valor.focus()
}





function finalizar(){

    if(Adicionados.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var cadastrados = Adicionados.length
        var maiorValor = Adicionados[0]
        var menorValor = Adicionados[0]
        var somaTotal = 0
        var media = 0
        for (var i in Adicionados){
            somaTotal += Adicionados[i]
            if(Adicionados[i] > maiorValor)
                maiorValor=Adicionados[i]
            if(Adicionados[i] < menorValor)
                menorValor = Adicionados[i]
        }
        media = somaTotal/cadastrados
        resp.innerHTML = ''
        resp.innerHTML +=(`<p>Ao todo temos ${cadastrados} numeros cadastrados. </p>`)
        resp.innerHTML +=(`<p>O maior valor informado foi ${maiorValor}. </p>`)
        resp.innerHTML +=(`<p>O menor valor informado foi ${menorValor}. </p>`)
        resp.innerHTML +=(`<p>Somando todos os valores, temos ${somaTotal}.</p>`)
        resp.innerHTML +=(`<p>A media dos valores digitados é ${media}</p>`)
    }


}