"use strict";
const dynamoose = require("dynamoose");
const PeopleModel = require("./people.schema");
exports.handler = async (event) => {
  try {
    let updatedPerson = PeopleModel.update(
      { id: `${event.pathParameters.id}` },
      JSON.parse(event.body)
    );

    return {
      statusCode: 200,
      body: JSON.stringify(updatedPerson),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to update person" }),
    };
  }
};
