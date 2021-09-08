
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
    
}
function extrato(soma){
    let valorkwh = 0.80
    let display = document.getElementById('resultados')
    display.innerHTML = ''
    display.innerHTML = `<h3>Total sendo gasto: ${soma}Kwh</h3>`

    display.innerHTML += `<h3>Total sendo gasto R$ ${soma*valorkwh}</h3>`

}