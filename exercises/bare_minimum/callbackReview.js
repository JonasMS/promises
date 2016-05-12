/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) {
      callback(err);
    } else { callback(err, contents.match(/.*/g)[0]); }  //why is contents converted to an array?
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  console.log('url: ', url);
  request(url, (err, res, body) => {
    if (err) {
      callback(err);
    } else { callback(err, res.statusCode); }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
