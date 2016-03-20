module.exports = function(ngModule){
  require('./consulta.service')(ngModule);
  require('./listado/listado.controller.js')(ngModule);
  require('./formulario/formulario.controller.js')(ngModule);
  require('./formulario/formulario.directive.js')(ngModule);
}
