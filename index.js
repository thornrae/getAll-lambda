'use strict';

const homiesModel = require('./schema.js');

exports.handler = async (event) => {

  console.log(event);

  try {
    const allTheHomies = await homiesModel.scan().exec();

    const data = JSON.stringify(allTheHomies);

    return {
      statusCode: 200,
      body: data
    }


  } catch (e){
    return {
      statusCode: 500, 
      body: e.message
    }
    
  }


};