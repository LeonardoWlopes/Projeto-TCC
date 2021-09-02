function calcular(){
    let soma = 0
    for(inputnumber = 1; inputnumber <= 7;inputnumber ++){
    let inputs = document.getElementById(`input${inputnumber}`)
    soma = soma + Number(inputs.value)
    }
    alert(soma)
}