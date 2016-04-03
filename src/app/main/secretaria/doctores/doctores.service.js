module.exports = function (ngModule){
  ngModule.factory("DoctorService", DoctorService)

  /*@ngInject*/
  function DoctorService ($q,$http,URL){
    var services = {
      getDoctores : getDoctores,
      getEspecialidades : getEspecialidades,
      postDoctores : postDoctores
    }
    return services;

    /******** get doctores *******/
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
    /***********************/

    /******** get doctores *******/
    function getEspecialidades(){
      var deferred = $q.defer();
      var especialidad = angular.fromJson(especialidad);
      $http
        .get(URL.API + 'getEspecialidades')
        .success(function(res) {
          console.log(res );
          deferred.resolve(res);
        })
        .catch(function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
    /***********************/

    function postDoctores(doctor){
      var deferred = $q.defer();

      var doctor = angular.fromJson(doctor);

      $http
				.post(URL.API + 'postDoctores', doctor)
				.success(function(res) {
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
    }

  }
}
