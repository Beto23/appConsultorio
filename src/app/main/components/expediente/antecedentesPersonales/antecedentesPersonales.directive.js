module.exports = function(ngModule){
  ngModule.directive('antecedentesPersonales',antecedentesPersonales)

  function antecedentesPersonales (){
    var directive = {
      restrict: 'E',
      template: require('./antecedentesPersonales.html'),
      controller: 'AntPersoCtrl'
    }
    return directive;
  }
}
