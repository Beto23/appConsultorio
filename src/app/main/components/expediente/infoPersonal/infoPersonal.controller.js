module.exports = function (ngModule){

  ngModule
    .controller('InfoPersoCtrl', InfoPersoCtrl)

    /* @ngInject */
    function InfoPersoCtrl (){

      console.log('InfoPersoCtrl');

    }
}
