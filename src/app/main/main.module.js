module.exports = function(){
  var main = angular.module('appConsultorio.main',[
    'appConsultorio.main.components',
    'appConsultorio.main.secretaria',
    'appConsultorio.main.doctor'
  ])
  require('./components/components.module')()
  require('./login/login.module')()
  require('./secretaria/secretaria.module')()
  require('./doctor/doctor.module')()

}
