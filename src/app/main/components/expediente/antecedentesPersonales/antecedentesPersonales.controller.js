module.exports = function (ngModule){
  ngModule.controller('AntPersoCtrl',AntPersoCtrl)

  /*@ngInject*/
  function AntPersoCtrl (){
    console.log('antecedentes-personales');

    var menu_antecedentes1 = $('#menu_antecedentes1');
    var menu_antecedentes2 = $('#menu_antecedentes2');
    var menu_antecedentes3 = $('#menu_antecedentes3');

    menu_antecedentes1.click(function(){
       $(this).addClass('menu-active')
       if (menu_antecedentes2.hasClass('menu-active')) {
           menu_antecedentes2.removeClass('menu-active')
       }else if (menu_antecedentes3.hasClass('menu-active')) {
         menu_antecedentes3.removeClass('menu-active')
       }
     })

    menu_antecedentes2.click(function(){
       $(this).addClass('menu-active')
       if (menu_antecedentes1.hasClass('menu-active')) {
           menu_antecedentes1.removeClass('menu-active')
       }else if (menu_antecedentes3.hasClass('menu-active')) {
         menu_antecedentes3.removeClass('menu-active')
       }
     })
    menu_antecedentes3.click(function(){
       $(this).addClass('menu-active')
       if (menu_antecedentes1.hasClass('menu-active')) {
           menu_antecedentes1.removeClass('menu-active')
       }else if (menu_antecedentes2.hasClass('menu-active')) {
         menu_antecedentes2.removeClass('menu-active')
       }
     })
  }
}
