var request = require('superagent');
var Q = require('q');

function doRequest(method, url, body) {
  var defer = Q.defer();
  var req = method(url)
  if (body) {
    req.send(body);
  }
  req.end(function(err, response) {
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

exports.post = function(url, body) {
  return doRequest(request.post, url, body);
}