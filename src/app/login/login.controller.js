module.exports = function (ngModule) {
	ngModule.controller('LoginCtrl', LoginCtrl);

	function LoginCtrl (){
		console.log('controller login');
	}
}