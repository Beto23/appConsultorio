module.exports = function (ngModule){

  ngModule.directive('corteDeCaja', corteDeCaja)

  /* @ngInject */

  function corteDeCaja (){
    var directive = {
      restrict: 'E',
      scope:{
        on: '='
      },
      template: require('./corte.html'),
      bindToController : true,
      controller: 'CortoCtrl',
      controllerAs: 'vm'
    }
    return directive;
  }
}
