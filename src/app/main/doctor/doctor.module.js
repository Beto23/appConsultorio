module.exports = function (){
  var doctor = angular.module('appConsultorio.main.doctor',[])
  require('./doctor.controller')(doctor);
}
