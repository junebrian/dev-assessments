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
  let results = require("./test_data.json");
  //this reads the json file and stores it in the results variable
  results.forEach((item) => {
    //this loops through the results array and assigns the item variable to each object in the array
    item.example = `${item.first_name} ${item.last_name} says ${item.catchphrase}`;
    //this adds a new property "example" to the item object and assigns it a value that is a string that combines the first_name, last_name, and catchphrase properties
  });
  results = results.filter((item) => {
    //this loop is to filter the results array and only return the objects where the last_name property is "Simpson"
    return item.last_name === "Simpson";
  });
};
