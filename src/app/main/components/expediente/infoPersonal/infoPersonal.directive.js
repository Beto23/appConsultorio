module.exports = function(ngModule){
  ngModule.directive('infoPersonal',infoPersonal)

  function infoPersonal (){
    var directive = {
      restrict: 'E',
      template: require('./infoPersonal.html')
    }
    return directive;
  }
}
