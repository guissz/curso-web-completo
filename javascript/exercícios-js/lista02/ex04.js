// Crie funções para converter:
// Celsius → Fahrenheit
// Fahrenheit → Celsius
// Celsius → Kelvin
// Kelvin → Celsius

const celsiusFahrenheit = (temperatura) => {
    return temperatura * 1.8 + 32;
}

const fahrenheitCelsius = (temperatura) => {
    return (temperatura - 32) * 5/9;
}

const celsiusKelvin = (temperatura) => {
    return temperatura + 273.15;
}

const kelvinCelsius = (temperatura) => {
    return temperatura - 273.15;
}

const converterTemperatura = (temperatura, conversao) => {
    const conversaoMaiuscula = conversao.toUpperCase();
    
    switch(conversaoMaiuscula) {
        case 'CF':
            return celsiusFahrenheit(temperatura).toFixed(2);
        case 'FC':
            return fahrenheitCelsius(temperatura).toFixed(2);
        case 'CK':
            return celsiusKelvin(temperatura).toFixed(2);
        case 'KC':
            return kelvinCelsius(temperatura).toFixed(2);
        default:
            return 'Conversão inválida';
    }
}

console.log(converterTemperatura(21, 'cf'));
console.log(converterTemperatura(85.2, 'fc'));
console.log(converterTemperatura(18.6, 'ck'));
console.log(converterTemperatura(341.1, 'kc'));