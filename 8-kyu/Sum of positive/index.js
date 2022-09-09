/*
  Title:
    Sum of positive
  
  Description:
    You get an array of numbers, return the sum of all of the positives ones

  Example: [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0
   
  Kata Link: https://www.codewars.com/kata/sum-of-positive
   
*/

// Recibo un array de numeros
// Debo retornar la suma de todos los numeros positivos
const positiveSum = arr => {
  // 1. Filtrar el array por los numeros positivos
  // 2. Sumar los numeros positivos del array
  return arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
};

module.exports = positiveSum;
