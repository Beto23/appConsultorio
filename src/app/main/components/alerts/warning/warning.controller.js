module.exports = function (ngModule) {
  ngModule
    .controller('WarningCtrl',WarningCtrl);

    /* @ngInject  */
    function WarningCtrl(DoctorService, $scope, $compile, $state){
      var vm = this;
      vm.functionSelected = functionSelected;
      vm.msjWarning = "";
      var body = angular.element(document).find('body');

      if (vm.delete == "doc") {
        vm.msjWarning = "¿Estas seguro que quieres eliminar el doctor? una vez borrado no se podrá recuperar";
      }

      function functionSelected (){
        if (vm.delete == "doc") {
          console.log('eliminar doctor');
          vm.deleteDoctor();
        }
      }

      vm.deleteDoctor = function (){
        console.log(vm.user);
        DoctorService.deleteDoctor(vm.user)
          .then(function(response){
            console.log(response);
            if (response.estatus == "ok") {
                console.log('doctor eliminado');
                vm.warning = false;
                $state.reload();
                body.append($compile("<alert-succes alertSucc='"+ vm.alertSucc  +"' vm.alertSucc='"+ true  +"'  ng-if='"+ vm.alertSucc  +"'  correcto='"+ response.msj +"'></alert-succes>")($scope));
            }else {
              console.log(response.msj);
            }
          }).catch(function(err){
            console.log(err);
          });
      };

    }
};
