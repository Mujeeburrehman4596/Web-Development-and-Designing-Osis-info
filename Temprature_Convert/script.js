document.getElementById('convertBtn').addEventListener('click', function () {
    const temperature = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number!';
    } else {
        switch (unit) {
            case 'Celsius':
                result = `${temperature}°C is ${celsiusToFahrenheit(temperature).toFixed(2)}°F and ${celsiusToKelvin(temperature).toFixed(2)}K`;
                break;
            case 'Fahrenheit':
                result = `${temperature}°F is ${fahrenheitToCelsius(temperature).toFixed(2)}°C and ${fahrenheitToKelvin(temperature).toFixed(2)}K`;
                break;
            case 'Kelvin':
                result = `${temperature}K is ${kelvinToCelsius(temperature).toFixed(2)}°C and ${kelvinToFahrenheit(temperature).toFixed(2)}°F`;
                break;
        }
    }

    document.getElementById('result').textContent = result;
});

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
