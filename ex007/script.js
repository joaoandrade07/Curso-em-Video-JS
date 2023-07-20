let list = []
let res = document.querySelector('#res')
function adicionar(){
    res.innerHTML = ""
    let num = document.querySelector('#num')
    if (num.value.length == 0 || Number(num.value) > 100 || Number(num.value) < 1 || list.indexOf(Number(num.value)) != -1 ){
        window.alert("Valor inválido ou já encontrado na lista.")
    } else {
        let sel = document.querySelector('#sel')
        list.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = `v${num.value}`
        sel.appendChild(item)
    }
}

function finalizar(){
    list = list.sort()
    let sum = 0
    for(i in list){
        sum +=list[i]
    }
    res.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados.</p>
    <p>O maior valor informado foi ${list[(list.length)-1]}.</p>
    <p>O menor valor informado foi ${list[0]}.</p>
    <p>Somando todos os valores, temos ${sum}.</p>
    <p>A média dos valores digitados é ${sum/(list.length)}.</p>`
}




/*
solicitar um numero de 1 a 100
adicionar ele no delect com a frase 'valor n adicionado'
adicionar o numero no array
não pode adicionar valor repetido, valor fora dos intervalo ou valor nulo

*/