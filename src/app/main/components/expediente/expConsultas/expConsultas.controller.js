module.exports = function (ngModule){
  ngModule.controller('ExpConsultasCtrl',ExpConsultasCtrl)

  /*@ngInject*/
  function ExpConsultasCtrl ($scope){
    console.log('ExpConsultasCtrl');
     $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();
 
  $scope.inlineOptions = {
    minDate: new Date(),
    showWeeks: true
  };
 
  }
}
