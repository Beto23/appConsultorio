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
					template: require('./app/main/secretaria/secretaria.html'),
					controller: 'SecretariaCtrl'
				})
					.state('main.secretaria.consultas',{
						url: '/consultas',
						abstract : true,
						template: require('./app/main/secretaria/consultas/consultas.html'),
						controller:'ConsultasCtrl'
					})
						.state('main.secretaria.consultas.postConsulta',{
							url: '/post_consulta',
							template: require('./app/main/secretaria/consultas/postConsultas/postConsultas.html')
						})
						.state('main.secretaria.consultas.getConsultas',{
							url: '/get_consultas',
							template: require('./app/main/secretaria/consultas/getConsultas/getConsultas.html')
						})
					.state('main.secretaria.doctores',{
						url: '/doctores',
						template: require('./app/main/secretaria/doctores/doctores.html')
					})
					.state('main.secretaria.pacientes',{
						url: '/pacientes',
						abstract: true,
						template: require('./app/main/secretaria/pacientes/pacientes.html')
					})
						.state('main.secretaria.pacientes.getPacientes',{
							url: '/get_pacientes',
							template: require('./app/main/secretaria/pacientes/getPacientes/getPacientes.html')
						})
						.state('main.secretaria.pacientes.postPacientes',{
							url: '/post_pacientes',
							template: require('./app/main/secretaria/pacientes/postPacientes/postPacientes.html')
						})
					.state('main.secretaria.expedientes',{
						url: '/expediente',
						template: require('./app/main/secretaria/expedientes/expedientes.html')
					})
				.state('main.doctor',{
					url: '/doctor',
					template: require('./app/main/doctor/doctor.html')
				})
	}
}
