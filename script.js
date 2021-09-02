function calcular(){
    let soma = 0
    for(inputnumber = 1; inputnumber <= 7;inputnumber ++){
    let inputs = document.getElementById(`input${inputnumber}`)

    //Resultados finais
    soma = soma + Number(inputs.value)
    }
    if(soma != 0){
    extrato()
    }
    
}
function extrato(){
    let display = document.getElementById('resultados')
    display.innerHTML = ''

}