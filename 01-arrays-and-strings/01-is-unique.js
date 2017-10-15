/**
 *  Implement an algorithm to determine if a string has all unique characters.
 *  What if you cannot use additional data structures?
 */

function is_unique(str) {
  const letters = new Set(); //set can only contain unique items

  for (let i = 0; i < str.length; i++) {
    if (letters.delete(str[i])) { //if the item exists in the set already
      return false;
    } else {
      letters.add(str[i]);
    }
  }
  return true;
}

function is_unique_no_ds(str) { //w/o extra data structure
  for (let i = 0; i < str.length; i++) { //would use two pointers
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(is_unique('cat'), is_unique_no_ds('cat'), true);
console.log(is_unique('etcetera'), is_unique_no_ds('etcetera'), false);
console.log(is_unique('an igloo'), is_unique_no_ds('an igloo'), false);
