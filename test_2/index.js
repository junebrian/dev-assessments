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
  let results= [];
  //this creates an empty array to store the results
  let data = require("./test_data.json");
  //this reads the json file and stores it in the data variable
  for (var i=0;i<data.length;i++) {
    //this loops through the results array and assigns the item variable to each object in the array
    var item = data[i];
    //grabs the object at the current index
    if (item.last_name == "Simpson") {
    item.example = `${item.first_name} ${item.last_name} says ${item.catchphrase}`;
    //checks if the lastname property is equal to "Simpson" and if it is, it adds a new property "example" to the item object and assigns it a value that is a string that combines the first_name, last_name, and catchphrase properties
    results.push(item);
    //this pushes the item object into the results array
}};
return results;
};
