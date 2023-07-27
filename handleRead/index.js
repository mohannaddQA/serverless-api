"use strict";
const dynamoose = require("dynamoose");
const { PeopleModel } = require("./people.schema");

exports.handler = async (event) => {
  if (event.pathParameters && event.pathParameters.id) {
    let foundPerson = await PeopleModel.get(event.pathParameters.id);
    const response = {
      statusCode: 200,
      body: JSON.stringify(foundPerson),
    };
    return response;
  } else {
    let allPeople = await PeopleModel.scan().exec();
    const response = {
      statusCode: 200,
      body: JSON.stringify(allPeople),
    };
    return response;
  }
};
