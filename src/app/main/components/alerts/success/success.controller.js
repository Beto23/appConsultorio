module.exports = function (ngModule) {
  ngModule
    .controller('SuccessCtrl',SuccessCtrl);

    function SuccessCtrl() {
      var vm = this;
      vm.ocultar = ocultar;
      function ocultar (){
        console.log('ocultando');
        vm.hide = true;
      }
    }
};
