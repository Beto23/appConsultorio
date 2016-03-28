module.exports = function(ngModule){
  ngModule.controller('PacienteFormularioCtrl',PacienteFormularioCtrl)

  /*@ngInject*/
  function PacienteFormularioCtrl (){
    console.log('paciente fomr');
  }
}
