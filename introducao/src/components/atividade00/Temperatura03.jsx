import React from 'react';

const CelsiusParaFahrenheit = (c) => {
    const Cel = c;
    const Fahr = (Cel * 9 / 5 + 32).toFixed(2);

    return Fahr;
}

const FahrenheitParaCelsius = (f) => {
    const Fahr = f;
    const Cel = ((Fahr - 32) * 5 / 9).toFixed(2);

    return Cel;
}

const Kelvin = (k) => {
    const Cel = (k - 273).toFixed(2);
    const Fahr = ((k - 273.15) * 1.8 + 32).toFixed(2);

    return [Cel, Fahr];
}

export { CelsiusParaFahrenheit, FahrenheitParaCelsius, Kelvin };
