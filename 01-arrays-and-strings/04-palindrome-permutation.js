/**
 *  Given a string, write a function to check if it is a permutation of a
 *  palindrome. A palindrome is a word or phrase that is the same forwards and
 *  backwards. A permutation is a rearrangement of letters. The palindrome does
 *  not need to be limited to just dictionary words.
 */

function has_palindrome(str_in) {
  const str = str_in.toLowerCase().replace(' ', '');; //spaces may be ignored

  const letters = new Set(); //unique items only in Sets

  for (let i = 0; i < str.length; i++) {
    if (!letters.delete(str[i])) {
      letters.add(str[i]);
    } else {
      letters.delete(str[i]);
    }
  }
  //palindromes have pairs of letters or pairs of letters + 1 extra character
  return letters.size === 1 ? true : false;
}

console.log(has_palindrome('Tact Coa'), true);
console.log(has_palindrome('asdf'), false);
