/**
 *  Assume you have a method `isSubstring` which checks if one word is a
 *  substring of another. Given two strings, s1 and s2, write code to check if
 *  s2 is a rotation of s1 using only one call to `isSubstring`.
 */

function is_rotated(s1, s2) {
  if (s1.length === s2.length && s1.length > 0) {
    const str_2_2 = s2.concat(s2); //tack two s2's together
    return isSubstring(str_2_2, s1); //one call to `isSubstring`
  }
  return false;
}

function isSubstring(str, sub) {
  return str.includes(sub);
}

console.log(is_rotated('waterbottle', 'erbottlewat'), true);
console.log(is_rotated('kangaroo', 'alligator'), false);
