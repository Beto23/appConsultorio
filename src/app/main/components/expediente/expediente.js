module.exports = function(ngModule){
  require('./infoPersonal/infoPersonal.directive')(ngModule);
  require('./infoPersonal/infoPersonal.controller')(ngModule);
  require('./expConsultas/expConsultas.directive')(ngModule);
  require('./antecedentesPersonales/antecedentesPersonales.directive')(ngModule);
  require('./antecedentesPersonales/antecedentesPersonales.controller')(ngModule);
  require('./expConsultas/expConsultas.controller')(ngModule);
  require('./expediente.directive')(ngModule);

}
