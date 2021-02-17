const express = require("express");
const apiCallFromRequest = require('../Requests');

const exchangeRouter = express.Router();


exchangeRouter.route(`/rates`)
  .get((req, res) => {
    const { base, currency } = req.query;

    apiCallFromRequest(function(response) {

      // If there is no query parameter
      if (!base && !currency) {
        return res.status(200).json({
          results: {
            "base": response.base,
            "date": response.date,
            "rates": response.rates
          }
        })
      }

      // If there is a query parameter but no value
      if (!base) {
        return res.status(400).json({ message: "Please specify your home currency" })
      }
      if (!currency) {
        return res.status(400).json({ message: "Please specify exchange currency or currencies" })
      }

      // If there is query parameter and a value
      const exchangeRates = currency.toUpperCase().split(',')
      let currencyExchangeRates = {};
      for (const exchangeRate of exchangeRates) {
        //trim white space
        const value = exchangeRate.trim();
        currencyExchangeRates = { ...currencyExchangeRates, [value]: response.rates[value] }
      }
      console.log(currencyExchangeRates);
      res.json({
        results: {
          "base": base,
          "date": response.date,
          "rates": currencyExchangeRates
        }
      })
      res.end();
    });
  });


module.exports = exchangeRouter;