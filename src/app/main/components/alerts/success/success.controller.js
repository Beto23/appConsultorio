module.exports = function (ngModule) {
  ngModule
    .controller('SuccessCtrl',SuccessCtrl);

    function SuccessCtrl() {
      console.log('SuccessCtrl');
    }
};
