console.log("Olá")
const btnCalc = document.querySelector('.btnCalc')
let diamExtValue = document.getElementById('diamExt')
const diamIntValue = document.getElementById('diamInt')
const espessValue = document.getElementById('espessura')
const largValue = document.getElementById('largura')
const form = document.getElementById('calcForm')

const option = document.getElementById('selection-liga')
console.log(option)

//teste***********************************************************************
function calcularComprimento(valueDiamExt, valueDiamInt, valueEspess) {
    const pi = Math.PI;
    return (pi * (Math.pow(valueDiamExt, 2) - Math.pow(valueDiamInt, 2))) / (4 * valueEspess);
}

function calcularPeso(valueLarg, valueEspess, compr, optionValue) {
    const volume = valueLarg * valueEspess * compr;
    return volume * optionValue;
}


//teste***********************************************************************

form.addEventListener('submit', function diametro (ev) {
    ev.preventDefault()


    const pi = Math.PI;
    //const pi = 3.14

    const optionValue = parseFloat(option.value)
    const valueDiamExt = parseFloat(diamExtValue.value)
    const valueDiamExtM = valueDiamExt / 1000.0
    const valueDiamInt = parseFloat(diamIntValue.value)
    const valueDiamIntM = valueDiamInt / 1000.0
    const valueLarg = parseFloat(largValue.value)
    const valueLargM = valueLarg / 1000.0
    const valueEspess = parseFloat(espessValue.value)
    const valueEspessM = valueEspess / 1000.0
    /*
    const compr = parseFloat ([pi/4 * (valueDiamExt**2 - valueDiamInt**2)] / (valueEspess * 1000))
    const comprAjus = Math.round(compr)
    const height = parseFloat(compr * valueEspess * valueLarg * optionValue)
    const heightAjus = Math.round(height)
    */
    
    const compr = parseFloat (pi * (Math.pow(valueDiamExtM, 2) - Math.pow(valueDiamIntM, 2))) / (4 * valueEspessM);
    //const compr = parseFloat ([pi * (valueDiamExt - valueDiamInt)**2] / (valueEspess * 4))
    const comprAjus = Math.round(compr)
    const height = parseFloat(calcularPeso(valueLargM, valueEspessM, compr, optionValue))
    
    alert(`
           Diametro interno: ${valueDiamInt} mm
           Diametro externo: ${valueDiamExt} mm
           Espessura: ${valueEspess} mm
           Largura: ${valueLarg} mm
           Densidade: ${optionValue} g/cm3
           Comprimento: ${compr.toLocaleString('pt-br', {style: 'decimal'})}
           Peso: ${height.toLocaleString('pt-br')} Kg`)

    diamExtValue.value = ""
    diamIntValue.value = ""
    largValue.value = ""
    espessValue.value = ""
    option.value = ""
})





