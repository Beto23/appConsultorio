module.exports = function (ngModule){
  ngModule.factory("DoctorService", DoctorService)

  /*@ngInject*/
  function DoctorService ($q,$http,URL){
    var services = {
      getDoctores : getDoctores
    }
    return services;

    function getDoctores(){
      var deferred = $q.defer();

      var doctor = angular.fromJson(doctor);

      $http
        .get(URL.API + 'getEspecialidadByDoctores')
        .success(function(res) {
          deferred.resolve(res);
        })
        .catch(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
  }
}
