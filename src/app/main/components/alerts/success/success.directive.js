module.exports = function (ngModule) {
  ngModule
    .directive('alertSucces',alertSucces);

    function alertSucces() {
      var directive = {
        restrict: 'E',
        template: require('./success.html'),
        controller: 'SuccessCtrl'
      };
      return directive;
    }
};
