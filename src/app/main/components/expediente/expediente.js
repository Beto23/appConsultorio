module.exports = function(ngModule){
  require('./infoPersonal/infoPersonal.directive')(ngModule);
  require('./expConsultas/expConsultas.directive')(ngModule);
  require('./antecedentesPersonales/antecedentesPersonales.directive')(ngModule);
  require('./antecedentesPersonales/antecedentesPersonales.controller')(ngModule);
}
