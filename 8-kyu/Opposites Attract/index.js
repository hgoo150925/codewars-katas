/*
  Title:
    Age Range Compatibility Equation
  
  Description:
    Timmy & Sarah think they are in love, but around where they live, 
    they will only know once they pick a flower each. 
    
    If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
    Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
   
    Kata Link:
    https://www.codewars.com/kata/opposites-attract
*/

const isEven = num => num % 2 === 0;

const lovefunc = (flower1, flower2) => {
  return (
    (isEven(flower1) && !isEven(flower2)) ||
    (!isEven(flower1) && isEven(flower2))
  );
};

module.exports = lovefunc;
