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
        editarConsulta();
      } else {
        agregarConsulta();
      }
    }

    function editarConsulta(){
      console.log('editarConsulta');
    }

    function agregarConsulta(){
      console.log('agregarConsulta');
    }
  }
}
