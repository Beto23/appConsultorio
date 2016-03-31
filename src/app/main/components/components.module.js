module.exports = function (){
  var components = angular.module('appConsultorio.main.components',[])
  require('./headerSignin/headerSignin.directive')(components);
  require('./headerSignin/headerSignin.controller')(components);
  require('./consulta/consulta')(components);
  require('./expediente/expediente')(components);
  require('./clock/clock')(components);
  require('./pacientes/pacientes')(components);
}
