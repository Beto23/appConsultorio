module.exports = function (){
	var login = angular.module('appConsultorio.login',[])
	require('./login.controller')(login);
}