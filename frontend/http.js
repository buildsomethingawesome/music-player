var request = require('superagent');
var Q = require('q');

function doRequest(method, url) {
  var defer = Q.defer();
  method(url).end(function(err, response) {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(response.body);
    }
  });
  return defer.promise;
}

exports.get = function(url) {
  return doRequest(request.get, url);
}

exports.post = function(url) {
  return doRequest(request.post, url);
}