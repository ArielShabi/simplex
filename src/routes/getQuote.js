const { getExchangeRate } = require("../services/exchangeRateService");

const getQuote = ('/quote', async (req, res) => {
  const from = req.query['from_currency_code'];
  const to = req.query['to_currency_code'];
  const fromAmount = req.query['amount'];

  let rate;

  try {
    rate = await getExchangeRate(from, to);
  }
  catch {
    return res.status(500).send('Something went wrong!')    
  }


  const amount = fromAmount * rate;

  const result = {
    'exchange_rate': rate,
    'currency_code': to,
    amount
  }

  res.send(result)
});

module.exports = getQuote;
