You can get the exchange rates of different currencies, by providing your home currency.
By default, the home currency is EUR. This can be changed by providing a query parameter named base. 
You can as well get exchange rate for specific currencies by providing query parameter named currency. The currency query parameter can accept multiple values, separated with commas.
The site is hosted on heroku, URL: https://exchangerateapi-chinonsoig.herokuapp.com

The default endpoint is:
```
/api/rates
```

So, to make a **GET** request, add the endpoint to the hosted URL like so: 
```
https://exchangerateapi-chinonsoig.herokuapp.com/api/rates
```
You'll get the exchange rate of all the currencies, with EUR as the base.


To add query parameters:
```
/api/rates?**base**=CAD&**currency**=GBP,HKD,ISK,PHP
```
This will produce get data like so:
```
"results": {
  "base": "CAD",
  "date": "2021-02-16",
  "rates": {
    "GBP": 0.87333,
    "HKD": 9.4139,
    "ISK": 155.6,
    "PHP": 58.606
  }
}
```