module.exports = function (ngModule){

  ngModule.controller('SecreDrCtrl', SecreDrCtrl);
  /* @ngInject */
  function SecreDrCtrl (DoctorService){
   var vm = this;
   vm.optionFormulario = {};
   vm.functionSelected = functionSelected;
   vm.especialidades = [];
   vm.doctores = [];

   if(vm.doctor){
     vm.optionFormulario.buttonSubmit = 'Editar';
     vm.optionFormulario.encabezadoTittle = 'Editar Doctor';
   } else {
     vm.optionFormulario.buttonSubmit = 'Agregar';
     vm.optionFormulario.encabezadoTittle = 'Agregar Doctor';
   }

   DoctorService.getEspecialidades()
    .then(function(response){
      vm.especialidades = response;
    })
    .catch(function(){
      console.log(err);
    });

   function functionSelected(){
     if(vm.tipo == 'edit'){
       vm.updateDoctor();
     } else {
       vm.addDoctor();
     }
   }
   //Función para agregar un doctor
   vm.addDoctor = function(){
     console.log("agregando doctor");
     DoctorService.postDoctores(vm.doctor)
      .then(function(response){
         console.log(vm.doctor);
         console.log(response);
         vm.doctores.push(response);

         if(response.estatus == 'ok'){
           console.log('doctor agregado');
         } else {
           console.log(response.msj);
         }
       }).catch(function(err){
         console.log(err);
         console.log('error');

       });
   };

   //Función para editar doctor
   vm.updateDoctor = function(){
     console.log(vm.doctor);
     DoctorService.putDoctor(vm.doctor)
      .then(function(response){
        if (response == "ok") {
          console.log(response.msj);
        }else {
          console.log(response.msj);
        }
      }).catch(function(err){
        console.log(err);
      });
   };

   function editarDoctor(){
     console.log('editarDoctor');
   }


  }
};
