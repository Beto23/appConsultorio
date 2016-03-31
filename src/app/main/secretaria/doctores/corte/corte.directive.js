module.exports = function (ngModule){

  ngModule.directive('corteDeCaja', corteDeCaja)

  /* @ngInject */

  function corteDeCaja (){
    console.log('caja');
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
