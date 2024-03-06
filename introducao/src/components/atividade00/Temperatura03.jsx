
const celsiusParaFahrenheit = (c) => {

    const Cel = c;
    const Fahr = Cel * 9 / 5 + 32;
    return(    
            <h3>Temperatura em Celsius: {Cel} ... Temperatura em Fahrenheit: {Fahr}</h3>
        )
}

const fahrenheitParaCelsius = (f) => {

    const Fahr = f;
    const Cel = (Fahr - 32) * 5 / 9;
    return(    
            <h3>Temperatura em Fahrenheit: {Fahr} ... Temperatura em Celsius: {Cel}</h3>
        )

}

const kelvin = () => {


}