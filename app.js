let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * oneEuroIs["USD"] * oneEuroIs ["JPY"]; 
    return valueInYen;
}


const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInPound;
}


const sum = (a,b) => {
    return a + b;
}


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound, sum};