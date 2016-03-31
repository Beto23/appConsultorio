module.exports = function (ngModule){

  ngModule.controller('CortoCtrl', CortoCtrl)

  /* @ngInject */

  function CortoCtrl (){
    console.log('CortoCtrl');
    var vm = this;
    vm.datePickerOn = false;
  }
}
