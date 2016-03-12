module.exports = function (ngModule){
  ngModule.directive('expediente',expediente)

  /*@ngInject*/
  function expediente (){
    return {
      restrict : 'E',
      scope: {
        idUsuario: '@'
      },
      template: require('./expediente.html')
    };
  }
}
