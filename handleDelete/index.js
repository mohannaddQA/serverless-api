"use strict";
const dynamoose = require("dynamoose");
const PeopleModel = require("./people.schema");
exports.handler = async (event) => {
  try {
    let deletedPerson = await PeopleModel.delete(event.pathParamters.id);
    const response = {
      statusCode: 200,
      body: JSON.stringify(deletedPerson),
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to delete person" }),
    };
  }
};
