module.exports = function (ngModule){
  ngModule.controller('ConsultasCtrl',ConsultasCtrl)
  /*@ngInject*/
  function ConsultasCtrl (HelpersFactory){
    console.log('controller consultas')
    HelpersFactory.twoTabs();
  }
}
