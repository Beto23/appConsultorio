module.exports = function(ngModule){
	ngModule.directive('homeWelcome',homeWelcome);

	function homeWelcome (){
		return {
			restrict: 'E',
			template: require('./welcome.html')
		}
	}
}