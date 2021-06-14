const request = require('request');

const fun = () => {
  request('http://cart-revolution.qa1-sg.cld/cart-revolution/v2/api-docs', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
    console.log(res)
  });
}

module.exports = fun