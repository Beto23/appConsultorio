module.exports = function (ngModule){

  ngModule.controller('HeaderSesionCtrl', HeaderSesionCtrl)
  /* @ngInject */
  function HeaderSesionCtrl ($scope){
    /*Funcionalidad boton desplegable*/
    var btn_menu = $('#menu-consulta');

    btn_menu.click(function(event){
      console.log('SecretariaCtrl')
      $('.container-opciones-menu').toggleClass('container-opciones-menu-mobile')
      $('.container-opciones-container').toggleClass('col-xs-12')
    })

  }
}
