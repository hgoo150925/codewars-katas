/*
  Title:
    Alan Partridge II - Facturación de Apple
  
  Description:
    Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
   
  Kata Link: https://www.codewars.com/kata/alan-partridge-ii-apple-turnover
   
*/

function apple(x) {
  if (!x || x.length < 0) return x;

  const squared = Math.pow(x, 2);

  if ((typeof x === "number" || typeof x == "string") && squared > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";
  }
}

module.exports = apple;
