const removeFromArray = function (array, ...list) {
  // We got 2 arrays : array, and list including all the optional arguments
  // Go through all elements of the initial array
  for (let i = 0; i < array.length; i++) {
    // Then through each of the optional arguments
    for (let j = 0; j < list.length; j++) {
      console.log(array[i], list[j]); // Verify if it's checking everything
      if (array[i] == list[j]) {
        let index = array.indexOf(list[i]); // find the index of argument
        // don't splice if it's not valid
        if (index !== -1) {
          array.splice(index, 1);
        }
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
