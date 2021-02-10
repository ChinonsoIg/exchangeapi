const express = require("express");
const apiCallFromRequest = require('./Requests')

const app = express();
const exchangeRouter = express.Router();
const port = process.env.PORT || 4001;

exchangeRouter.route(`/rates`)
  .get((req, res) => {
    const { base, currency } = req.query;
    
    apiCallFromRequest.callApi(function(response) {

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

app.use('/api', exchangeRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to my nodemon API. Visit this link '/api/rates'`)
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
