function tabuada(){
    var numero = document.querySelector('#num')
    var res = document.querySelector('#res')
    if(numero.value == ""){
        window.alert("[ERRO] Nenhum número informado!")
    } else {
        var num = Number(numero.value)
        res.innerHTML=""
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${i*num}`
            item.value = `v${i}`
            res.appendChild(item)
        }
    }
}