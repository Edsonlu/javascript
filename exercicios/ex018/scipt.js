function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.nodeValue) > ano) {
    window.alert(`[ERRO![ Verifique os dados e tente novamente!`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //BeBê
                img.setAttribute('src', 'imagens/bebe-masculino.jpg')
            } else if (idade >= 5 && idade < 11) {
                //Criança
                img.setAttribute('src', 'imagens/criança-masculino.jpg')
            } else if (idade >= 11 && idade < 17) {
                //Adolescente
                img.setAttribute('src', 'imagens/adolescente-masculino.jpg')
            } else if (idade >= 17 && idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-masculino.jpg')
            } else if (idade >= 30 && idade < 49) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-masculino.jpg')
            } else if (idade >= 49 && idade < 70) {
                //Meia idade
                img.setAttribute('src', 'imagens/meia-idade-masculino.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-masculino.jpg')
            }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'imagens/bebe-feminino.jpg')
            } else if (idade >= 5 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criança-feminino.jpg')
            } else if (idade >= 12 && idade < 18) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescente-feminino.jpg')
            } else if (idade >= 18 && idade < 30) {
                //Adulto
                img.setAttribute('src', 'imagens/jovem-feminino.jpg')
            } else if (idade >= 30 && idade < 49) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-feminino.jpg')
            } else if (idade >= 49 && idade < 70) {
                //Meia idade
                img.setAttribute('src', 'imagens/meia-idade-feminino.jpg')
            }
              else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa-feminino.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}