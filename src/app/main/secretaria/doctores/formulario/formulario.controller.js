module.exports = function (ngModule){

  ngModule.controller('SecreDrCtrl', SecreDrCtrl)
  /* @ngInject */
  function SecreDrCtrl (DoctorService){
   var vm = this;
   vm.optionFormulario = {};
   vm.functionSelected = functionSelected;


   if(vm.doctor){
     vm.optionFormulario.buttonSubmit = 'Editar'
     vm.optionFormulario.encabezadoTittle = 'Editar Doctor'
   } else {
     vm.optionFormulario.buttonSubmit = 'Agregar'
     vm.optionFormulario.encabezadoTittle = 'Agregar Doctor'
   }


   function functionSelected(){
     if(vm.optionFormulario.buttonSubmit == "Editar"){
       editarDoctor();
     } else {
       vm.addDoctor();
     }
   }

   vm.addDoctor = function(){
     console.log("agregando doctor");
     DoctorService.postDoctores(vm.doctor)
      .then(function(response){
         console.log(vm.doctor);
         console.log(response);
         vm.doctores.push(response)
         //helper.popupClose();
         //$state.reload()
         if(response.estatus == 'ok'){
           console.log('doctor agregado');
           //$state.reload()
         } else {
           console.log(response.msj);
         }
       }).catch(function(err){
         console.log(err)
         console.log('error');

       });
   }

   function editarDoctor(){
     console.log('editarDoctor');
   }

   function agregarDoctor(){
     console.log('agregarDoctor');
     vm.addDoctor = function(){
 			console.log("agregando doctor");
 			DoctorService.getDoctores(vm.doctor)
        .then(function(response){
   				vm.doctores.push(response)
   				//helper.popupClose();
   				//$state.reload()
   				if(response.estatus == 'ok'){
   					console.log('doctor agregado');
   					//$state.reload()
   				} else {
   					console.log(response.msj);
   				}
   			}).catch(function(err){
   				console.log(err)
   			});
 		}
   }

  }
}
