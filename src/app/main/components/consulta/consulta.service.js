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
        .get(URL.API + 'getConsultas.json')
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
