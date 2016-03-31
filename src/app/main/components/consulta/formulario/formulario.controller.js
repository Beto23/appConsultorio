module.exports = function(ngModule){
  ngModule.controller('ConsultaFormularioCtrl',ConsultaFormularioCtrl)

  /*@ngInject*/
  function ConsultaFormularioCtrl ($scope){
    /*datapicker*/
    var vm = this;
    vm.datePickerOn = false;
    vm.optionFormulario = {};
    vm.functionSelected = functionSelected;




    if(vm.paciente){
      vm.dateInDatePicker = moment(vm.paciente.fecha).toDate();
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
