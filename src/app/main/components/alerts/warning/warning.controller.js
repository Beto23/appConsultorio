module.exports = function (ngModule) {
  ngModule
    .controller('WarningCtrl',WarningCtrl);

    function WarningCtrl() {
      console.log('WarningCtrl');
    }
};
