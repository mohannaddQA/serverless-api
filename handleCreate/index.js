"use strict";
const dynamoose = require("dynamoose");
const { PeopleModel } = require("./people.schema");
exports.handler = async (event) => {
  if (!event.queryStringParameters) {
    const response = {
      statusCode: 500,
      body: "please enter the persons information",
    };
  } else {
    let { id, name, age } = event.queryStringParameters;
    let personInfo = { id, name, age };

    try {
      const newPerson = await PeopleModel.create(personInfo);
      const response = {
        statusCode: 200,
        body: JSON.stringify(newPerson),
      };
      return response;
    } catch (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify(error),
      };
      return response;
    }
  }
};
