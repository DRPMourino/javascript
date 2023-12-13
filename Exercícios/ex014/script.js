function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src="imagens/Dia.jpg"
        document.body.style.background = '#85C8F2'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src="imagens/Tarde.jpg"
        document.body.style.background = '#F28705'
    } else { 
        //BOA NOITE!
        img.src="imagens/Noite.jpg"
        document.body.style.background = '#222426'
    }
}