module.exports = function (ngModule){
  ngModule.controller('AntPersoCtrl',AntPersoCtrl)

  /*@ngInject*/
  function AntPersoCtrl (){
    console.log('antecedentes-personales');
  }
}
