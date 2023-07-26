"use strict";
const { v4: uuidv4 } = require("uuid");
const dynamoose = require("dynamoose");
const peopleSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    required: true,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const PeopleModel = dynamoose.model("People", peopleSchema);
module.exports = { PeopleModel };
