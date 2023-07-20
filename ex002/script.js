function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    minuto = minuto.toString()
    //hora = 20
    console.log(typeof(minuto))
    msg.innerHTML = `Agora são ${hora}:${('0'+minuto).slice(-2)}.`

    if (hora >= 5 && hora<12){
        //BOM DIA
        img.src = 'fotoManha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <18){
        //BOA TARDE
        img.src = 'fotoTarde.png'
        document.body.style.background = 'rgb(231, 171, 91)'
    }else{
        //BOA NOITE
        img.src = 'fotoNoite.png'
        document.body.style.background = 'rgb(2, 0, 36)'
    }
} 