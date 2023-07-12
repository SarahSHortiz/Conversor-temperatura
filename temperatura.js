function gerarTemperatura(){
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const resultado = document.getElementById('resultado')


// pegando as informações para a converção

// agora é feito o calculo das temperaturas

// se o valor digitado no celcius for verdadeiro ele vai fazer a operação:
// Converter Celsius para Fahrenheit e Kelvin

if (celsiusInput.value !== ''){
const celsius = parseFloat(celsiusInput.value);
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

    // Atualizar os valores nos campos de entrada correspondentes
fahrenheitInput.value = fahrenheit.toFixed(2);
kelvinInput.value = kelvin.toFixed(2);
resultado.textContent = '';
}

else if(fahrenheitInput.value !== '') {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32 ) * 5/9;
    const kelvin = (kelvin - 459.67) * 5/9;

    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
    resultado.textContent = '';
}
else if( kelvinInput.value !== ''){
    const kelvin = parseFloat(kelvinInput.value);
    const celsius = kelvin - 273.15;
    const fahrenheit = (kelvin * 9/5) - 459.67;

    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultado.textContent = '';
}

else {resultado.textContent = "digite um valor";}
}