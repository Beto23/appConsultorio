module.exports = function(ngModule){
  ngModule.directive('expConsultas',expConsultas)

  function expConsultas (){
    var directive = {
      restrict: 'E',
      template: require('./expConsultas.html')
    }
    return directive;
  }
}
