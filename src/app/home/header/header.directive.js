module.exports = function (ngModule){
	ngModule.directive('homeHeader',homeHeader);

	function homeHeader (){
		return {
			restrict: 'E',
			template: require('./header.html')
		}
	}
}