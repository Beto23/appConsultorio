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
				template: require('./app/main/login/login.html'),
				controllerAs:'login',
				controller:'LoginCtrl'
			})
			.state('main',{
				url: '/buena-salud',
				abstract: true,
				template: require('./app/main/main.html')
			})
				.state('main.secretaria',{
					url: '/secretaria',
					template: require('./app/main/secretaria/secretaria.html')
				})
				.state('main.doctor',{
					url: '/doctor',
					template: require('./app/main/doctor/doctor.html')
				})
	}
}
