module.exports = function (ngModule){
  ngModule.controller('AntPersoCtrl',AntPersoCtrl)

  /*@ngInject*/
  function AntPersoCtrl (HelpersFactory){
    console.log('antecedentes-personales');
    HelpersFactory.menu_antecedentes()
  }
}
