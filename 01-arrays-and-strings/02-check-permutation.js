/**
 *  Given two strings, write a method to decide if one is a permutation of the
 *  other.
 */

function check_permutation(str_a, str_b) {
  if (str_a.length !== str_b.length) return false;
  else {
    const letters = new Map(); //letters in str_a

    for (let a = 0; a < str_a.length; a++) {
      if (letters.has(str_a[a])) {
        letters.set(str_a[a], letters.get(str_a[a]) + 1);
      } else {
        letters.set(str_a[a], 1);
      }
    }

    for (let b = 0; b < str_b.length; b++) { //subtract letters in str_b
      if (!letters.has(str_b[b]) || letters.get(str_b[b]) === 0) {
        return false;
      } else {
        letters.set(str_b[b], letters.get(str_b[b]) - 1);
      }
    }
    return true;
  }
}

console.log(check_permutation('cat', 'act'), true);
console.log(check_permutation('pineapple', 'apple'), false);
