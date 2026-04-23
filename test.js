// test.js — Pruebas automáticas con Jest
const { sumar } = require('./app');

test('2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('10 + 0 debe ser 10', () => {
  expect(sumar(10, 0)).toBe(10);
});

test('números negativos: -1 + -1 debe ser -2', () => {
  expect(sumar(-1, -1)).toBe(-2);
});