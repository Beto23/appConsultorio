module.exports = function(ngModule){

  ngModule.
    directive('detalleConsulta',detalleConsulta)

    function detalleConsulta (){
      return {
        restrict : 'E',
        scope: {
          open: '=',
          paciente: '='
        },
        template: require('./detalle.html'),
        bindToController : true,
        controller: 'DetalleCtrl',
        controllerAs: 'vm'

      };
    }
}
