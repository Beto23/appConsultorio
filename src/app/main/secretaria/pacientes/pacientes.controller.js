module.exports = function (ngModule){
  ngModule.controller('PacienteSecreCtrl',PacienteSecreCtrl)

  /*@ngInject*/
  function PacienteSecreCtrl (HelpersFactory){
    HelpersFactory.twoTabs();
  }
}
