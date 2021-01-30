const express = require("express");
const apiCallFromRequest = require('./Requests')
const apiCallFromNode = require('./NodeJsCall')

const app = express();
const exchangeRouter = express.Router();
const port = process.env.PORT || 4001;

// exchangeRouter.route('/rates')
//   .get((req, res) => {
//     const response = {
//       hello: "Hi it's me"
//     };
//     res.json(response);
//   });

  exchangeRouter.route('/rates')
  .get((req, res) => {
    apiCallFromRequest.callApi(function(response) {
      // console.log("Res: ",response);
      res.json({ response })
      res.end();
    });
  });

app.use('/api', exchangeRouter);

app.get('/', (req, res) => {
  console.log("DDD")
  res.send('Welcome to my nodemon API')
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})