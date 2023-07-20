function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert("Por favor, digite um número!")
    }else{
        tab.innerHTML = ""
        let n = Number(num.value)
        for(let c = 0; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}