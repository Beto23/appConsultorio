module.exports = function (ngModule){

  ngModule.controller('SecreDoctorCtrl',SecreDoctorCtrl)
  /* @ngInject */
  function SecreDoctorCtrl (arrDoctores){
    var vm = this;
    vm.doctores = arrDoctores;
  }
}
