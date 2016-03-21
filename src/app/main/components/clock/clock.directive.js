module.exports = function (ngModule){
  ngModule.directive('reloj',reloj)

  function reloj (){
    var directive = {
      restrict: 'E',
      template: require('./clock.html')
    }
    return directive
  }
}
