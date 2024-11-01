console.log("Olá")
const btnCalc = document.querySelector('.btnCalc')
let diamExtValue = document.getElementById('diamExt')
const diamIntValue = document.getElementById('diamInt')
const espessValue = document.getElementById('espessura')
const largValue = document.getElementById('largura')
const form = document.getElementById('calcForm')

const option = document.getElementById('selection-liga')
console.log(option)




form.addEventListener('submit', function diametro (ev) {
    ev.preventDefault()

    const pi = 3.14

    let optionValue = parseFloat(option.value)
    let valueDiamExt = parseFloat(diamExtValue.value)
    let valueDiamInt = parseFloat(diamIntValue.value)
    let valueLarg = parseFloat(largValue.value)
    let valueEspess = parseFloat(espessValue.value)
    /*
    const compr = parseFloat ([pi/4 * (valueDiamExt**2 - valueDiamInt**2)] / (valueEspess * 1000))
    const comprAjus = Math.round(compr)
    const height = parseFloat(compr * valueEspess * valueLarg * optionValue)
    const heightAjus = Math.round(height)
    */
    
    const compr = parseFloat ([pi * (valueDiamExt - valueDiamInt)**2] / (valueEspess * 4))
    const comprAjus = Math.round(compr)
    const height = parseFloat(/*compr **/ valueEspess * valueLarg * optionValue)
    
    alert(`
           Diametro interno: ${valueDiamInt}
           Diametro externo: ${valueDiamExt}
           Espessura: ${valueEspess}
           Largura: ${valueLarg}
           Densidade: ${optionValue}
           Comprimento: ${compr.toLocaleString('pt-br', {style: 'decimal'})}
           Peso: ${height.toLocaleString('pt-br', {style: 'decimal'})} Kg`)

    diamExtValue.value = ""
    diamIntValue.value = ""
    largValue.value = ""
    espessValue.value = ""
    option.value = ""
})





