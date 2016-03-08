module.exports = function(){
	var home = angular.module('appConsultorio.home',[]);
	require('./home.controller')(home);
	require('./header/header.directive')(home);
	require('./welcome/welcome.directive')(home);
	require('./footer/footer.directive')(home);
}
