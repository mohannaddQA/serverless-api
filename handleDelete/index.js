"use strict";
const dynamoose = require("dynamoose");
const { PeopleModel } = require("./people.schema");

exports.handler = async (event) => {
  if (event.pathParameters && event.pathParameters.id) {
    const deletedPersonData = await PeopleModel.get(event.pathParameters.id);
    let deletedPerson = await PeopleModel.delete(event.pathParameters.id);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Item deleted",
        deletedItem: deletedPersonData,
      }),
    };
    return response;
  } else {
    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to delete person" }),
    };
    return response;
  }
};
