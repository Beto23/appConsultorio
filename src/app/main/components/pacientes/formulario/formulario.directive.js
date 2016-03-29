module.exports = function (ngModule){
  ngModule.directive('pacienteFormulario',pacienteFormulario)

  /*@ngInject*/
  function pacienteFormulario (){
    return {
      restrict : 'E',
      scope: {
        open: '=',
        paciente: '='
      },
      template: require('./formulario.html'),
      bindToController : true,
      controller: 'PacienteFormularioCtrl',
      controllerAs: 'vm'

    };
  }
}
