module.exports = function(ngModule){
  ngModule.controller('PacienteFormularioCtrl',PacienteFormularioCtrl)

  /*@ngInject*/
  function PacienteFormularioCtrl ($scope, getGravatarUrlBuilder){
    var vm = this;

    /*gravatar with email*/
    $scope.getGravatarUrl = function(email) {
      console.log(email);
      return getGravatarUrlBuilder.builderGravatarUrl(email);
    }
    /********************/

    vm.optionFormulario = {};
    vm.functionSelected = functionSelected;


    if(vm.paciente){
      vm.optionFormulario.buttonSubmit = 'Editar'
      vm.optionFormulario.encabezadoTittle = 'Editar Paciente'
    } else {
      vm.optionFormulario.buttonSubmit = 'Agregar'
      vm.optionFormulario.encabezadoTittle = 'Agregar Paciente'
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
