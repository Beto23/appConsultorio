module.exports = function (ngModule) {
  ngModule
    .controller('WarningCtrl',WarningCtrl);

    function WarningCtrl(DoctorService) {
      var vm = this;
      vm.functionSelected = functionSelected;
      vm.msjWarning = "";

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
            }else {
              console.log(response.msj);
            }
          }).catch(function(err){
            console.log(err);
          });
      };

    }
};
