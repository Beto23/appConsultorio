module.exports = function(ngModule){
  ngModule.factory('HelpersFactory',HelpersFactory)

  function HelpersFactory (){
    var Helper = {
      twoTabs: function (){
        console.log('factory 4');
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
      },
      forTabs: function (){
        console.log('444');
        var tab1 = $('#tab1');
        var tab2 = $('#tab2');
        var tab3 = $('#tab3');
        var tab4 = $('#tab4');

        tab1.click(function(){
          $(this).addClass('active');
          if (tab2.hasClass('active')) {
            tab2.removeClass('active')
          }else if (tab3.hasClass('active')) {
            tab3.removeClass('active')
          }else if (tab4.hasClass('active')) {
            tab4.removeClass('active')
          }
        });

        tab2.click(function(){
          $(this).addClass('active');
          if (tab1.hasClass('active')) {
            tab1.removeClass('active')
          }else if (tab3.hasClass('active')) {
            tab3.removeClass('active')
          }else if (tab4.hasClass('active')) {
            tab4.removeClass('active')
          }
        });

        tab3.click(function(){
          $(this).addClass('active');
          if (tab2.hasClass('active')) {
            tab2.removeClass('active')
          }else if (tab1.hasClass('active')) {
            tab1.removeClass('active')
          }else if (tab4.hasClass('active')) {
            tab4.removeClass('active')
          }
        });

        tab4.click(function(){
          $(this).addClass('active');
          if (tab2.hasClass('active')) {
            tab2.removeClass('active')
          }else if (tab3.hasClass('active')) {
            tab3.removeClass('active')
          }else if (tab1.hasClass('active')) {
            tab1.removeClass('active')
          }
        });
      }
    }
    return Helper;
  }
}
