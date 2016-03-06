module.exports = function(){
	var home = angular.module('appConsultorio.home',[]);
	require('./home.controller')(home);
}