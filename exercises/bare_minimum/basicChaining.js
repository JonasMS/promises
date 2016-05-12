/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pc = require('./promiseConstructor');
var pm = require('./promisification');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  //get contents from file
  console.log('fp: ', readFilePath);
  return pc.pluckFirstLineFromFileAsync(readFilePath) 
    .then(username => pm.getGitHubProfileAsync(username)) //getting profile
    .then((userProfile) => {
      console.log('up: ', userProfile);
      console.log('wfp: ', writeFilePath);
      return Promise.promisify(fs.writeFile)(writeFilePath, JSON.stringify(userProfile), 'utf8');
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
