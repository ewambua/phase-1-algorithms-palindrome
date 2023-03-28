function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if(reversedWord === word){
    return true
  }
  else if(reversedWord !== word){
    return false
  }
}

/*
  Add your pseudocode here:
  Invoke functiontion isPalindrome
  reversed word = reversed method
  if word equals reversed word
  return true
  else if  word doesn't = reversed word
  return false
*/

/*
  Add written explanation of your solution here
  The function isPalindrome is invoked and has a parameter of word.
  In the function a variable, reveresed word, is made.
  The variable equals to the above parameter.
  Then the split method turns the variable in to an array.
  The the reverse method reverses the order of the elements
  in the parameter array and the join returns the array as a string.
  Then an if and else if statement checks if the reveresed word variable
  and the word parameter are the same,
  and returns true if they are the same or false if they aren't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
