"use strict";
const dynamoose = require("dynamoose");
const { PeopleModel } = require("./people.schema");

exports.handler = async (event) => {
  try {
    let { name, age } = event.queryStringParameters; // Extract id, name, and age from queryStringParameters
    let personInfo = { name, age }; // Create a personInfo object with the extracted data

    let beforeUpdate = await PeopleModel.get(event.pathParameters.id);
    let updatedPerson = await PeopleModel.update(
      event.pathParameters.id,
      personInfo
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        BeforeUpdate: beforeUpdate,
        AfterUpdate: updatedPerson,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to update person" }),
    };
  }
};
