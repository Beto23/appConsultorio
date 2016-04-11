module.exports = function (ngModule) {
  ngModule
    .directive('alertWarning',alertWarning);

    function alertWarning() {
      var directive = {
        restrict: 'E',
        scope:{
          delete: "=",
          user: "=",
          warning: "="
        },
        bindToController : true,
        template: require('./warning.html'),
        controller: 'WarningCtrl',
        controllerAs : 'vm'
      };
      return directive;
    }
};
