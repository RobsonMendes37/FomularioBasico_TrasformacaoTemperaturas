import React from 'react';

const CelsiusParaFahrenheit = (c) => {
    const Cel = c;
    const Fahr = Cel * 9 / 5 + 32;

    return (
        <div>
            <h3>Temperatura em Celsius: {Cel} ... Temperatura em Fahrenheit: {Fahr}</h3>
        </div>
    );
}

const FahrenheitParaCelsius = (f) => {
    const Fahr = f;
    const Cel = (Fahr - 32) * 5 / 9;

    return (
        <div>
            <h3>Temperatura em Fahrenheit: {Fahr} ... Temperatura em Celsius: {Cel}</h3>
        </div>
    );
}

const Kelvin = (k) => {
    const Kev = k;
    const Cel = (Kev - 273);
    const Fahr = ((k-273.15)*1.8)+32;

    return (
        <div>
            <h3>Temperatura em Kelvin: {Kev} ... Temperatura em Celsius: {Cel} ... Temperatura: {Fahr}</h3>
        </div>
    );
}

export { CelsiusParaFahrenheit, FahrenheitParaCelsius, Kelvin };
