test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dollar should be 153.48 ", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen }= require('./app.js')
        // hago mi comparacion (la prueba)
    expect(fromDollarToYen(100)).toBe(15348); //1 euro son 127,9 yen, entonces 9 yen deberian ser = (100 / 127.9) * 0.08
});

test("One yen should be 0.006254886630179828 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound} = require('./app.js')
        // hago mi comparacion (la prueba)
    expect(fromYenToPound(100)).toBe(0.6254886630179828 ); //1 euro son 127,9 yen, entonces 9 yen deberian ser = (100 / 127.9) * 0.08
});





test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

