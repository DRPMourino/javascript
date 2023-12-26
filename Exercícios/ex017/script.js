function tabuada() {
    let num = document.getElementById('txtn') //Obtém o elemento HTML com o ID 'txtn', que provavelmente é um campo de entrada de texto onde o usuário deve digitar um número.
    let tab = document.getElementById('seltab') //Obtém o elemento HTML com o ID 'seltab', que provavelmente é um elemento <select> onde as opções da tabuada serão exibidas.
    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um número!') //Verifica se o comprimento do valor inserido no campo de entrada de texto é zero. Parece haver um erro de digitação, pois deveria ser length em vez de lenght. Caso o comprimento seja zero, exibe um alerta solicitando ao usuário que digite um número.
    } else {
        let n = Number(num.value) //Converte o valor digitado pelo usuário para um número.
        let c = 1 //Inicializa uma variável c com o valor 1. Essa variável será usada como contador no loop.
        tab.innerHTML = ''
        while (c <= 10) { //Inicia um loop while que irá executar 10 vezes, gerando as opções da tabuada.
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //${n} x ${c} = ${n*c}``: Define o texto do elemento <option> com a expressão da multiplicação correspondente.
            item.value = `tab${c}` //Define o valor do elemento <option>.
            tab.appendChild(item) //Adiciona o elemento <option> ao elemento <select>.
            c++ // Incrementa o contador para a próxima iteração do loop.
        }
    }

}