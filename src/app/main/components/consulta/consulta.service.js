module.exports = function (ngModule){
  ngModule.factory("ConsultaService", ConsultaService)

  /*@ngInject*/
  function ConsultaService ($q,$http,URL){
    var services = {
      getConsultas : getConsultas

    }
    return services;

    function getConsultas(){
      var deferred = $q.defer();

      var administrador = angular.fromJson(administrador);

      $http
        .get(URL.API + 'getAllConsultas')
        .success(function(res) {
          //console.log(res);
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
