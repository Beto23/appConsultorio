module.exports = function (){
  var secretaria = angular.module('appConsultorio.main.secretaria',[])
  require('./secretaria.controller')(secretaria);
  require('./doctores/doctores.service')(secretaria);
  require('./doctores/listado/doctores.controller')(secretaria);
  require('./doctores/formulario/formulario.controller')(secretaria);
  require('./doctores/formulario/formulario.directive')(secretaria);
  require('./doctores/corte/corte.directive')(secretaria);
  require('./doctores/corte/corte.controller')(secretaria);





}
