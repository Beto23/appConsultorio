module.exports = function (){
  var secretaria = angular.module('appConsultorio.main.secretaria',[])
  require('./secretaria.controller')(secretaria);
  require('./doctores/doctores.service')(secretaria);
  require('./doctores/listado/doctores.controller')(secretaria);


}
