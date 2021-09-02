const config = require('config');
const axios = require('axios');
const cache = require('./cacheService');

const exchangeRateUrl = config.get('exchangeRateUrl');

const getExchangeRate = async (from, to) => {
    let rate = cache.getRate(from, to);

    if (!rate) {        
        const response = await axios.get(`${exchangeRateUrl}/${from}`);
        rate = response.data.rates[to];
        cache.saveRate(from, to, rate);
    }

    return rate
};

module.exports = {
    getExchangeRate
};
