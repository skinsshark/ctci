/**
 *  Write a method to replace all spaces in a string with '%20'.
 */

function urlify(str_in) {
  const str = Array.from(str_in.trim()); //rm trailing spaces and convert to array
  let new_str = '';

  str.map(char => {
    if (char === ' ') { //if char is a space, replace it
      new_str += '%20';
    } else {
      new_str += char;
    }
  });

  return new_str;
}

console.log(urlify('    sunday desert     '));
