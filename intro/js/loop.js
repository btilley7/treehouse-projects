const middle = ['lettce','cheese','patty'];
const burger = ['top bun', ...middle, 'bottom bun'];


const brass = ['tuba', 'trumpet', 'french horn'];
const woodwind = ['flute', 'obie', 'basoon'];

const orch = [...brass, ...woodwind];

brass.push('flugel');
orch.unshift('guitar');

console.log(orch)
console.log(brass)