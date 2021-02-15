const request = require('request');
 
const URL = `https://api.exchangeratesapi.io/latest`;

const callExternalApiUsingRequest = (callback) => {
	request(URL, { json: true }, (err, res, body) => {

		if (err) {
			return callback(err);
		}

		return callback({
			base: body.base,
			date: body.date,
			rates: body.rates
		});
	});
}

module.exports = callExternalApiUsingRequest;