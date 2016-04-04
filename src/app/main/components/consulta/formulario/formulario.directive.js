module.exports = function (ngModule){
  ngModule.directive('consultaFormulario',consultaFormulario)

  /*@ngInject*/
  function consultaFormulario (){
    return {
      restrict : 'E',
      scope: {
        on: '=',
        consulta: '='
      },
      template: require('./formulario.html'),
      bindToController : true,
      controller: 'ConsultaFormularioCtrl',
      controllerAs: 'vm'

    };
  }
}
