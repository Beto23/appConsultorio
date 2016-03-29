module.exports = function (ngModule){
  require('./pacientes.service')(ngModule);
  require('./formulario/formulario.controller')(ngModule);
  require('./formulario/formulario.directive')(ngModule);
  require('./listado/listado.controller')(ngModule)
}
