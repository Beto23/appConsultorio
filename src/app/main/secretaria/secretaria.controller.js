module.exports = function (ngModule){
  ngModule.controller('SecretariaCtrl', SecretariaCtrl)
  /*@ngInject*/
  function SecretariaCtrl (HelpersFactory){

    /*Funcionalidad de menu*/
    HelpersFactory.menuSesion();


  }
}
