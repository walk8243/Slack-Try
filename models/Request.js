const request = require('request');

class Request {
  constructor() {}

  get(url, data) {
    return new Promise((resolve, reject) => {
      request.get({
        url: url,
        json: data,
        headers: {
          'Content-Type': 'application/json',
        }
      }, (error, response, body) => {
        if(error) {
          return reject(error);
        }
        resolve({
          statusCode: response['statusCode'],
          body: body,
        });
      });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      request.post({
        url: url,
        json: data,
        headers: {
          'Content-Type': 'application/json',
        }
      }, (error, response, body) => {
        if(error) {
          return reject(error);
        }
        resolve({
          statusCode: response['statusCode'],
          body: body,
        });
      });
    });
  }
}

module.exports = Request;
