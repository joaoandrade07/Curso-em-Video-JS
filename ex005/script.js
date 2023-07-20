function contar(){
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var paso = document.getElementById('passo')
    var res = document.querySelector('#res')
    var passo = Number(paso.value)
    if(inicio.value == ""|| fim.value==""){
        res.innerHTML = "<p>Impossível contar!</p>"
    } else {
        if(passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        res.innerHTML = "<p>Contando:</p>"
        if(Number(inicio.value) > Number(fim.value)){
            for(var i = Number(inicio.value); i >= Number(fim.value); i-=passo){
                res.innerHTML += `${i} \u{1F449} `
            }
        }else{
            for(var i = Number(inicio.value); i <= Number(fim.value); i+=passo){
                res.innerHTML += `${i} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}


/*
Caso não tenha inicio ou fim colocar impossível contar
quando o passo for igual a 0, colocar um alert 'Passo inválido! Consiferando PASSO 1'
Colocar 1 mao pra direita, 2 mao ... ate o fim que é uma mao e uma bandeira
*/