module.exports = function (ngModule){
  ngModule.controller('ConsultasCtrl',ConsultasCtrl)
  /*@ngInject*/
  function ConsultasCtrl (){
    console.log('controller consultas')
    var postConsulta = $('#postCnst');
    var getConsulta = $('#getCnst');

    getConsulta.click(function(){
      $(this).addClass('active');
      if (postConsulta.hasClass("active")) {
        postConsulta.removeClass('active')
      }else {
        console.log('post desactivado');
      }
    })
    postConsulta.click(function(){
      $(this).addClass('active');
      if (getConsulta.hasClass("active")) {
        getConsulta.removeClass('active')
      }else {
        console.log('get desactivado');
      }
    })
  }
}
