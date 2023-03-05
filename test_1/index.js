"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  let results = require("./test_data.json");
  //this reads the json file and stores it in the results variable
  results.forEach((item) => {
    //this loops through the results array and assigns the item variable to each object in the array
    item.example = `${item.first_name} ${item.last_name} says ${item.catchphrase}`;
    //this adds a new property "example" to the item object and assigns it a value that is a string that combines the first_name, last_name, and catchphrase properties
  });
  return results;
};
