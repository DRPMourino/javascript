function verificar() {
    var data = new Date() //Cria um novo objeto Date, representando a data e hora atuais.
    var ano = data.getFullYear() // Obtém o ano atual a partir do objeto Date criado na linha anterior.
        var fano = document.getElementById('txtano') //Obtém o elemento HTML com o ID 'txtano' e armazena-o na variável fano. Geralmente, elementos com IDs são caixas de entrada de texto ou campos de formulário relacionados a anos de nascimento ou datas.
        var res = document.querySelector('div#res') //Obtém o primeiro elemento div com o ID 'res' e armazena-o na variável res. Isso é usado para manipular o conteúdo dessa div mais tarde.
        if(fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')

            img.style.display = 'block'; //Centralizar a foto
            img.style.margin = 'auto'; //Centralizar a foto

            if (fsex[0].checked) { //Fotos junto com a idade
                gênero = 'Homem'
                if (idade >= 0 && idade < 3) {
                    //Bebê
                    img.setAttribute('src','imagens/bebe-m.png')
                } else if (idade < 10) {
                    //Criança
                    img.setAttribute('src','imagens/criança.m.png')
                } else if (idade < 21) {
                    //Jovem
                    img.setAttribute('src','imagens/adolescente.m.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','imagens/adulto.m.png')
                } else if (idade > 60) {
                    //Idoso
                    img.setAttribute('src','imagens/idoso-m.png')
                }
            } else if (fsex[1].checked){ //Fotos junto com a idade
                gênero = 'Mulher'
                if (idade >= 0 && idade < 3) {
                    //Bebê
                    img.setAttribute('src','imagens/bebe-f.png')
                } else if (idade < 10) {
                    //Criança
                    img.setAttribute('src','imagens/criança.f.png')
                } else if (idade < 18) {
                    //Jovem
                    img.setAttribute('src','imagens/adolescente.f.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAttribute('src','imagens/adulta.f.png')
                } else if (idade > 60){
                    //Idoso
                    img.setAttribute('src','imagens/idosa-f.png')
                }
            }
            res.style.textAlign = 'Center' //Centralizar o texto
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` //Texto com a idade
            res.appendChild(img) //Para aparecer as fotos
        }
    
}