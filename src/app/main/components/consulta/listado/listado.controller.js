module.exports = function(ngModule){
  ngModule.controller('ConsultaListadoCtrl',ConsultaListadoCtrl)

  /*@ngInject*/
  function ConsultaListadoCtrl (arrConsultas){
    var vm = this;
    vm.pacientes = arrConsultas;
  }
}
