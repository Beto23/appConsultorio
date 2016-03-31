module.exports = function(ngModule){
  ngModule.factory('HelpersFactory',HelpersFactory)

  function HelpersFactory (){
    var Helper = {
      menuSesion: function (){
        var menu_item1 = $('#menu-item1');
        var menu_item2 = $('#menu-item2');
        var menu_item3 = $('#menu-item3');
        var menu_item4 = $('#menu-item4');
        var menu_item5 = $('#menu-item5');

        menu_item1.click(function(event){
          $(this).addClass('active2');
          if (menu_item2.hasClass('active2')) {
            menu_item2.removeClass('active2');
          }else if (menu_item3.hasClass('active2')) {
            menu_item3.removeClass('active2');
          }else if (menu_item4.hasClass('active2')) {
            menu_item4.removeClass('active2');
          }else if (menu_item5.hasClass('active2')) {
            menu_item5.removeClass('active2');
          }
        });
        menu_item2.click(function(event){
          $(this).addClass('active2');
          if (menu_item1.hasClass('active2')) {
            menu_item1.removeClass('active2');
          }else if (menu_item3.hasClass('active2')) {
          menu_item3.removeClass('active2');
          }else if (menu_item4.hasClass('active2')) {
            menu_item4.removeClass('active2');
          }else if (menu_item5.hasClass('active2')) {
            menu_item5.removeClass('active2');
          }
        });
        menu_item3.click(function(event){
          $(this).addClass('active2');
          if (menu_item2.hasClass('active2')) {
            menu_item2.removeClass('active2');
          }else if (menu_item1.hasClass('active2')) {
            menu_item1.removeClass('active2');
          }else if (menu_item4.hasClass('active2')) {
            menu_item4.removeClass('active2');
          }else if (menu_item5.hasClass('active2')) {
            menu_item5.removeClass('active2');
          }
        });
        menu_item4.click(function(event){
          $(this).addClass('active2');
          if (menu_item2.hasClass('active2')) {
            menu_item2.removeClass('active2');
          }else if (menu_item3.hasClass('active2')) {
            menu_item3.removeClass('active2');
          }else if (menu_item1.hasClass('active2')) {
            menu_item1.removeClass('active2');
          }else if (menu_item5.hasClass('active2')) {
            menu_item5.removeClass('active2');
          }
        });
        menu_item5.click(function(event){
          $(this).addClass('active2');
          if (menu_item2.hasClass('active2')) {
            menu_item2.removeClass('active2');
          }else if (menu_item3.hasClass('active2')) {
            menu_item3.removeClass('active2');
          }else if (menu_item4.hasClass('active2')) {
            menu_item4.removeClass('active2');
          }else if (menu_item1.hasClass('active2')) {
            menu_item1.removeClass('active2');
          }
        });

      }
    }
    return Helper;
  }
}
