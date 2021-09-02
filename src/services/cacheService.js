const config = require('config');
const timeToKeep = config.get('timeToKeepInCache');

const cache = {};

const getKey = (from, to) => `${from}-${to}`;

const getRate = (from, to) => {
    const key = getKey(from, to);    

    if (cache[key]?.expDate >= Date.now()) {
        console.log('In cache ' + cache[key].rate)
        return cache[key].rate;
    }

    return null;
};

const saveRate = (from, to, rate) => {
    const key = getKey(from, to);
    const expDate = Date.now() + timeToKeep;
    cache[key] = {
        rate,
        expDate
    }
};

module.exports = {
    getRate,
    saveRate
}
