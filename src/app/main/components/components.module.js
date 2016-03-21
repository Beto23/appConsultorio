module.exports = function (){
  var components = angular.module('appConsultorio.main.components',[])
  require('./headerSignin/headerSignin.directive')(components);
  require('./consulta/consulta')(components);
  require('./expediente/expediente')(components);
}
