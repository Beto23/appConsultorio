module.exports = function(ngModule){
  ngModule.controller('ConsultaFormularioCtrl',ConsultaFormularioCtrl)

  /*@ngInject*/
  function ConsultaFormularioCtrl ($scope){
    /*datapicker*/
    var vm = this;
    vm.datePickerOn = false;
    vm.optionFormulario = {};
    vm.functionSelected = functionSelected;

    vm.dateInDatePicker = moment(vm.paciente.fecha).toDate();



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
