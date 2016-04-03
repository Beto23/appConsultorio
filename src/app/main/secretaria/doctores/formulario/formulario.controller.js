module.exports = function (ngModule){

  ngModule.controller('SecreDrCtrl', SecreDrCtrl)
  /* @ngInject */
  function SecreDrCtrl (){
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
     if(vm.doctor){
       editarDoctor();
     } else {
       agregarDoctor();
     }
   }

   function editarDoctor(){
     console.log('editarDoctor');
   }

   function agregarDoctor(){
     console.log('agregarDoctor');
   }
  }
}
