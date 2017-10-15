/**
 *  There are three types of edits that can be performed on strings: insert a
 *  character, remove a character, or replace a character. Given two strings,
 *  write a function to check if they are one edit (or zero edits) away.
 */

function is_one_away(str_a, str_b) {
  if (Math.abs(str_a.length - str_b.length) > 1) { //at most diff of 1 in length
    return false;
  }

  const a = str_a.length < str_b.length ? str_b : str_a; //set long string
  const b = str_a.length < str_b.length ? str_a : str_b; //set short string

  let diff = false; //if difference in chars
  let index_a = 0, index_b = 0;

  while (index_a < a.length && index_b < b.length) { //run through the strings
    if (a[index_a] !== b[index_b]) { //diff in chars
      if (diff) { //if there was already a difference in chars
        return false;
      }
      diff = true;

      if (a.length === b.length) {
        index_b++; //move both pointers for same length
      }
    } else {
      index_b++; //move pointer for shorter string
    }
    index_a++; //only move pointer for longer string
  }
  return true;
}

console.log(is_one_away('pale', 'ple'), true);
console.log(is_one_away('pales', 'pale'), true);
console.log(is_one_away('pale', 'bale'), true);
console.log(is_one_away('pale', 'bake'), false);
