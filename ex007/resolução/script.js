let num = document.querySelector("#fnum")
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

//Verificar se é um número que está no intervalo especificado
function isNumero(n){ //recebe um número
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//Verificar se o número está na lista
function inLista(n, l){ //recebe um número e a lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//Adicionar o número na lista e no select
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //após adicionar um valor ou não, limpa o valor digitado do campo
    num.focus() // Deixa a caixa em foco
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let i in valores){
            soma += valores[i]
            if (valores[i]>maior){
                maior = valores[i]
            } else if(valores[i]< menor) {
                menor = valores[i]
            }
        }
        let media = soma/tot
        media = media.toFixed(2)
        media = media.replace('.',',')
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}