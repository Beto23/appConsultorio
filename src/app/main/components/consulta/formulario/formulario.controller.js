module.exports = function(ngModule){
  ngModule.controller('ConsultaFormularioCtrl',ConsultaFormularioCtrl)

  /*@ngInject*/
  function ConsultaFormularioCtrl (){
    var vm = this;
    vm.optionFormulario = {};
    vm.functionSelected = functionSelected;


    if(vm.paciente){
      vm.optionFormulario.buttonSubmit = 'Editar'
      vm.optionFormulario.encabezadoTittle = 'Editar Consulta'
    } else {
      vm.optionFormulario.buttonSubmit = 'Agregar'
      vm.optionFormulario.encabezadoTittle = 'Agregar Consulta'
    }


    function functionSelected(){
      if(vm.paciente){
        editarPaciente();
      } else {
        agregarPaciente();
      }
    }

    function editarPaciente(){
      console.log('editarPaciente');
    }

    function agregarPaciente(){
      console.log('agregarPaciente');
    }
  }
}
