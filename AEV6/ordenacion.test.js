const Ordenacion = require('./ordenacion');

test('Ordena una lista completamente desordenada', () => {
  expect(Ordenacion([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
});

test('Lista ya ordenada no cambia', () => {
  expect(Ordenacion([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
});

test('Ordena una lista con elementos repetidos', () => {
  expect(Ordenacion([4, 2, 4, 1, 3, 2])).toEqual([1, 2, 2, 3, 4, 4]);
});

test('Lista con un solo elemento se mantiene igual', () => {
  expect(Ordenacion([5])).toEqual([5]);
});

test('Lista vacía devuelve lista vacía', () => {
  expect(Ordenacion([])).toEqual([]);
});

test('Ordena una lista con números negativos', () => {
  expect(Ordenacion([-3, -1, -7, -5, -2])).toEqual([-7, -5, -3, -2, -1]);
});

test('Ordena una lista con valores positivos, negativos y ceros', () => {
  expect(Ordenacion([0, -1, 3, -2, 2, -3, 1])).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});
