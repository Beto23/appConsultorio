module.exports = function (){
  var service = angular.module('appConsultorio.service', [])
  require('./GravatarUrlBuilder')(service)
}
