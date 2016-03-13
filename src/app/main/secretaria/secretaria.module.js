module.exports = function (){
  var secretaria = angular.module('appConsultorio.main.secretaria',[])
  require('./consultas/consultas.controller')(secretaria);
  require('./secretaria.controller')(secretaria);

}
