module.exports = function(ngModule){
  ngModule.controller('ExpedienteCtrl',ExpedienteCtrl)

  /*@ngInject*/
  function ExpedienteCtrl (HelpersFactory){
    console.log('expediente');
    HelpersFactory.forTabs();
  }
}
