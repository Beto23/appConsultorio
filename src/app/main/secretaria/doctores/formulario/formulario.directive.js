module.exports = function (ngModule){

  ngModule.directive('secretariaDoctorFormulario', secretariaDoctorFormulario)

  function secretariaDoctorFormulario (){
    var directive ={
      restrict : 'E',
      scope:{
        open: '=',
        doctor: '='
      },
      template: require('./formulario.html'),
      bindToController : true,
      controller: 'SecreDrCtrl',
      controllerAs : 'vm'
    }
    return directive;
  }
}
