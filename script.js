
function calcular(){
    //Somar os valores
    let soma = 0
    for(inputnumber = 1; inputnumber <= 7;inputnumber ++){
    let inputs = document.getElementById(`input${inputnumber}`)

    //Resultados finais
    soma = soma + Number(inputs.value)
    }

    //chamada para extrato
    if(soma != 0){
    extrato(soma)
    }
    else{
        limpar()
        zerar()
    }
    
}
function extrato(soma){
    let valorkwh = 0.80
    let display = document.getElementById('resultados')
    display.innerHTML = ''
    display.innerHTML = `<h3>Total sendo gasto: ${soma}Kwh</h3>`
    display.innerHTML += `<h3>Valor por hora: <span>R$ ${valorhora.toFixed(2)}</span></h3>`
    display.innerHTML += ` <h3>Valor em 24 horas<span>R$ ${valordia.toFixed(2)}</span></h3>`
    display.innerHTML += `<h3>Valor mensal: <span>R$ ${valorfinal.toFixed(2)}</span></h3>`
}
function limpar(){
    let display = document.getElementById('resultados')
    display.innerHTML = ''
}
function zerar(){
    for(inputnumber = 1; inputnumber <= 7;inputnumber ++){
        let inputs = document.getElementById(`input${inputnumber}`)
        inputs.value = ""
        limpar()
    }
}