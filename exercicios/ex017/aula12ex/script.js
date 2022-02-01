function carregar() {
    var msg = window.document.getElementById('msg')
    var msgsaudaçao = window.document.getElementById('msgsaudaçao')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    msgsaudaçao.innerHTML = `Tenha um bom dia <br> Em nome do Senhor Jesus`
    if (hora  >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}