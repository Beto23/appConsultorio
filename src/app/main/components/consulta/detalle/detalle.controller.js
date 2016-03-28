module.exports = function(ngModule){

  ngModule.
    controller('DetalleCtrl',DetalleCtrl)

    function DetalleCtrl() {
      console.log('DetalleCtrl');
    }
}
