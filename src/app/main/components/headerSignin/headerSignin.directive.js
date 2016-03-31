module.exports = function(ngModule){
  ngModule.directive('headerSignIn',headerSignIn)

  function headerSignIn (){
    var directive = {
      restrict: 'E',
      template: require('./headerSignin.html'),
      controller: 'HeaderSesionCtrl'
    }
    return directive;
  }
}
