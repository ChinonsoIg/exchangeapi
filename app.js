const express = require("express");

const exchangeRouter = require('./routes/exchangeRoutes');

const app = express();
const port = process.env.PORT || 4001;


app.use('/api', exchangeRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to my Node API. Add '/api/rates' to the link to fetch all rates.  
  Eg: https://exchangerateapi-chinonsoig.herokuapp.com/api/rates`)
});


app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
