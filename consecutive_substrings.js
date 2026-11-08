function consecutiveSubstrings(string) {
    //Empty array to store the empty substring
    const substrings = [];

    //loop through each starting position
    for (let start = 0; start < string.length; start++) {
        //loop through each ending point
        for (let end = start + 1; end <= string.length; end++) {
            //extract the substring and add it to the array
            const substring = string.slice(start, end)
            substrings.push(substring)
        }
    }

    //return generated substrings
    return substrings
}

if (require.main === module) {
  // add your own tests in here
  //test 1
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  //test 2
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("")

  //test 3
  console.log("Expecting: []")
  console.log("=>", consecutiveSubstrings(''))

  console.log("")

  //test 4
  console.log("Expecting: ['a', 'ab', 'aa', 'b', 'ba', 'a']")
  console.log("=>", consecutiveSubstrings('aba'))
}

module.exports = consecutiveSubstrings;


