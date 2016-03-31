module.exports = function (ngModule){
  ngModule.controller('DoctorCtrl', DoctorCtrl)
  /*@ngInject*/
  function DoctorCtrl (HelpersFactory){

    /*Funcionalidad de menu*/
    HelpersFactory.menuSesion();

  }
}
