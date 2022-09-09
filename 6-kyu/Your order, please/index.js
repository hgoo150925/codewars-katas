/*
  Title:
    Age Range Compatibility Equation
  
  Description:
    Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
    If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

  Examples:
    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    ""  -->  ""
   
    Kata Link:
    https://www.codewars.com/kata/your-order-please
*/

// Recibo un string
// Cada string que recibo contiene una palabra y un numero
// Ese numero es la posicion que debe tener la palabra en la salida
// Los números pueden ser del 1 al 9. Por lo tanto, 1 será la primera palabra (no 0)
// Debo ordenar el string de acuerdo a los numeros recibidos

// Mi solucion
const order = words => {
  const num = Array.from(Array(10)).map((_, index) => index + 1);

  let wordsArr = words.split(" ");
  let newWords = [];

  for (let index = 0; index < wordsArr.length; index++) {
    for (let j = 0; j < num.length; j++) {
      if (wordsArr[index].includes(num[j])) {
        newWords.push([wordsArr[index], parseInt(num[j])]);
      }
    }
  }

  newWords.sort((a, b) => a[1] - b[1]).map(x => x.splice(1, 1));

  return newWords.join(" ");
};

// Solucion encontrada en codewars
// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }

module.exports = order;
