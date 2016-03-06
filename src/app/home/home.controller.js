module.exports = function(ngModule){
	ngModule.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl (){
		console.log('Controller home');
	}

}