const request = require('request');
 
const URL = 'https://api.exchangeratesapi.io/latest';

const callExternalApiUsingRequest = (callback) => {
    request(URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    //  console.log("body: ", body.rates)
    return callback(body.rates);
    });
}

module.exports.callApi = callExternalApiUsingRequest;