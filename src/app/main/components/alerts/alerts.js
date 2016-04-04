module.exports = function(ngModule) {
  require('./success/success.controller')(ngModule);
  require('./success/success.directive')(ngModule);
};
