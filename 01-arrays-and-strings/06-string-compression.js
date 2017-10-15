/**
 *  Implement a method to perform basic string compression using the counts of
 *  repeated characters. For example, the string `aabcccccaaa` would become
 *  `a2b1c5a3`. If the "compressed" string would not become smaller than the
 *  original string, your method should return the original string. You can
 *  assume the string has only uppercase and lowercase letters (a-z).
 */

function string_compression(str) {
  let compressed_str = str[0]; //put first letter into new string
  let sum = 1; //letter count starts at one because of first letter

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) { //if current letter already existed right before, add to sum
      sum++;
    } else { //add previous sum and new letter, reset sum
      compressed_str += `${sum}${str[i]}`;
      sum = 1;
    }
  }
  compressed_str += sum; //add the last letter sum

  return compressed_str.length > str.length ? str : compressed_str; //if original string is shorter, return it instead
}

console.log(string_compression('aabcccccaaa'), 'a2b1c5a3');
console.log(string_compression('a'), 'a');
