module.exports = function(ngModule){
  ngModule.factory('HelpersFactory',HelpersFactory)

  function HelpersFactory (){
    var Helper = {
      twoTabs: function (){
        console.log('factory');
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
    return Helper;
  }
}
