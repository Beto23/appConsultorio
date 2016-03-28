module.exports = function(ngModule){
  ngModule.controller('PacientesListadoCtrl', PacientesListadoCtrl)

  /*@ ngInject */
  function PacientesListadoCtrl (arrPacientes){
    var vm = this;
    vm.pacientes = arrPacientes;
  }
}
