module.exports = function (ngModule){

  ngModule.directive('expedienteMedico',expedienteMedico)

  function expedienteMedico (){
    var directive = {
      restrict: 'E',
      scope: {
        open2: '='
      },
      template: require('./expediente.html')
    }
    return directive;
  }
}
