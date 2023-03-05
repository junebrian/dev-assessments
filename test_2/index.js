"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {

  const test_1 = require("../test_1/index.js");
  //this imports the test_1 function from the relative path of the index.js file and creates a new variable called test_1
  const data = new test_1();
  //this creates a new variable called data and assigns it the return value of the test_1 function.

  results = data.filter((item) => {
    //this loop is to filter the results array and only return the objects where the last_name property is "Simpson"
    item.last_name === "Simpson";
  });
  return results;
};
