var exports = module.exports = {};

var smsSendArray = [];

exports.add = function(sms, callback) {
  var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(function() {
      smsSendArray.push(sms);
      callback();
    }, rand);
}

exports.getAllSend = function(sms) {
  return smsSendArray;
}