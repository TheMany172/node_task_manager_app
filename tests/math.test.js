const {
        calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add 
    } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(100, .1)
    expect(total).toBe(110)
})

test('should calculate with defauly tip of 20%', () => {
    const total = calculateTip(100)
    expect(total).toBe(120)
})


test('Should convert 32 F to 0 C', () => {
    const result = fahrenheitToCelsius(32)
    expect(result).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const result = celsiusToFahrenheit(0)
    expect(result).toBe(32)
})


// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add 2 numbers async/await', async () => {
    const sum = await add(10,22)
    expect(sum).toBe(32)
})