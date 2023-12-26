function Confirmar () {
    let ini = document.getElementById('txti') //Associado ao inicio
    let fim = document.getElementById('txtf') //Associado ao fim
    let passo = document.getElementById('txtp') //Associado ao passo
    let res = document.getElementById('res') //Associado ao resposta

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){ // Não pode deixar nada em branco
        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Falta dados') //Alerta se algo tiver em branco
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number (passo.value)
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{2194}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}