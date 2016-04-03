module.exports = function(ngModule){
  ngModule.controller('ConsultaFormularioCtrl',ConsultaFormularioCtrl)

  /*@ngInject*/
  function ConsultaFormularioCtrl ($scope){
    /*datapicker*/
    var vm = this;
    vm.datePickerOn = false;
    vm.optionFormulario = {};
    vm.functionSelected = functionSelected;




    if(vm.consulta){
      vm.dateInDatePicker = moment(vm.consulta.fecha_consulta).toDate();
      vm.optionFormulario.buttonSubmit = 'Editar'
      vm.optionFormulario.encabezadoTittle = 'Editar Consulta'
    } else {
      vm.optionFormulario.buttonSubmit = 'Agregar'
      vm.optionFormulario.encabezadoTittle = 'Agregar Consulta'
    }


    function functionSelected(){
      if(vm.consulta){
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
