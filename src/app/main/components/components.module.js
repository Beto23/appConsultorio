module.exports = function (){
  var components = angular.module('appConsultorio.main.components',[])
  require('./expediente/expediente.directive')(components);
  require('./headerSignin/headerSignin.directive')(components);

}
