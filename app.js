// kelvin 
const kelvin = 0;
// celsius
const celsius = kelvin - 273;
// Fahrenheit
let Fahrenheit = celsius * (9 / 5) + 32;
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);