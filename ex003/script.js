function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if(fano.value == "" || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.marginTop = '10px'
        if(sex[0].checked){
            genero = 'HOMEM'
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src','homem-bebe.png')
            } else if(idade < 21){
                img.setAttribute('src', 'homem-adolescente.png')
            } else if(idade < 60) {
                img.setAttribute('src','homem-adulto.png')
            } else {
                img.setAttribute('src','homem-idoso.png')
            }
        } else if(sex[1].checked){
            genero = 'MULHER'
            if(idade >=0 && idade <= 12){
                img.setAttribute('src','mulher-bebe.png')
            } else if (idade < 21){
                img.setAttribute('src','mulher-adolescente.png')
            }else if(idade < 60){
                img.setAttribute('src','mulher-adulta.png')
            } else {
                img.setAttribute('src','mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}