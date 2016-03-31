module.exports = function (ngModule){

  ngModule.directive('expedienteMedico',expedienteMedico)

  function expedienteMedico (){
    var directive = {
      restrict: 'E',
      template: require('./expediente.html')
    }
    return directive;
  }
}
