module.exports = function (ngApp){
	ngApp
		.config(config)

	/* @ngInject */
	function config ($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');


		$stateProvider
			.state('app',{
				url: '/',
				template: require('./app/home/home.html'),
				controllerAs:'app',
				controller:'HomeCtrl'
			})
			.state('login',{
				url: '/login',
				template: require('./app/login/login.html'),
				controllerAs:'login',
				controller:'LoginCtrl'
			})
	}
}