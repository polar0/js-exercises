const reverseString = function (string) {
  // let length = string.length;
  let split = string.split('');
  let reverse = split.reverse();
  let join = reverse.join('');
  return join;
};

// Do not edit below this line
module.exports = reverseString;
