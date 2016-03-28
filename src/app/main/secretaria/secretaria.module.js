module.exports = function (){
  var secretaria = angular.module('appConsultorio.main.secretaria',[])
  require('./secretaria.controller')(secretaria);
  require('./pacientes/pacientes')(secretaria);


}
