"use strict";
const dynamoose = require("dynamoose");
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
});
const PeopleModel = dynamoose.model("People", peopleSchema);
module.exports = { PeopleModel };
