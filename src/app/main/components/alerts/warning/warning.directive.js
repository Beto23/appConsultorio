module.exports = function (ngModule) {
  ngModule
    .directive('alertWarning',alertWarning);

    function alertWarning() {
      var directive = {
        restrict: 'E',
        template: require('./warning.html'),
        controller: 'WarningCtrl'
      };
      return directive;
    }
};
