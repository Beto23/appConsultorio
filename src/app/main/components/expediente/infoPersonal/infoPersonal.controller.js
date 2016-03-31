module.exports = function (ngModule){

  ngModule
    .controller('InfoPersoCtrl', InfoPersoCtrl)

    /* @ngInject */
    function InfoPersoCtrl ($scope, getGravatarUrlBuilder){

      console.log('InfoPersoCtrl');
      var vm = this;
      vm.paciente = {};

    /*gravatar with email*/
    $scope.getGravatarUrl = function(email) {
      console.log(email);
      return getGravatarUrlBuilder.builderGravatarUrl(email);
    }
    /********************/

    }
}
