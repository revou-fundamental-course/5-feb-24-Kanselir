function convertTemperature() {
    var inputUnit = document.getElementById("inputUnit").value;
    var inputTemp = parseFloat(document.getElementById("inputTemperature").value);
    var celsius, fahrenheit, kelvin, reamur;

    switch(inputUnit) {
        case 'celsius':
            celsius = inputTemp;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            reamur = celsius * 4/5;
            break;
        case 'fahrenheit':
            fahrenheit = inputTemp;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            reamur = (fahrenheit - 32) * 4/9;
            break;
        case 'kelvin':
            kelvin = inputTemp;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            reamur = celsius * 4/5;
            break;
        case 'reamur':
            reamur = inputTemp;
            celsius = reamur * 5/4;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        default:
            break;
    }

    var result = "Suhu dalam Celsius: " + celsius.toFixed(2) + " °C <br>";
    result += "Suhu dalam Fahrenheit: " + fahrenheit.toFixed(2) + " °F <br>";
    result += "Suhu dalam Kelvin: " + kelvin.toFixed(2) + " K <br>";
    result += "Suhu dalam Reamur: " + reamur.toFixed(2) + " °R";
    
    document.getElementById("result").innerHTML = result;
}