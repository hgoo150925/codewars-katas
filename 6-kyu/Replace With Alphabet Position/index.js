/*
Title: Replace With Alphabet Position

Description:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

Kata Link: https://www.codewars.com/kata/replace-with-alphabet-position
*/

const alphabetPosition = text => {
  // Recibo un string
  // Debo reemplazar cada letra del string por su posicion en el alfabeto
  // Recibo un string de letras y retorno un string de numeros
  const words = text.toLowerCase().replace(/[^a-z]/g, '');
  // charCodeAt ->  obtener el código de carácter ASCII de cada carácter y le restamos 96 para tener la posicion en el alfabeto
  return [...words].map(v => v.charCodeAt() - 96).join(' ');
};

module.exports = alphabetPosition;
