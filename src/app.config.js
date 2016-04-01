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
			/* urls secretaria */
				.state('main.secretaria',{
					url: '/secretaria',
					template: require('./app/main/secretaria/secretaria.html'),
					controller: 'SecretariaCtrl'
				})
					.state('main.secretaria.consultas',{
						url: '/consultas',
						template: require('./app/main/components/consulta/listado/listado.html'),
						controller:'ConsultaListadoCtrl',
						controllerAs:'vm',
						resolve: {
							arrConsultas: function(ConsultaService){
								return ConsultaService.getConsultas();
							}
						}
					})
					.state('main.secretaria.pacientes',{
						url: '/pacientes',
						template: require('./app/main/components/pacientes/listado/listado.html'),
						controller: 'PacientesListadoCtrl',
						controllerAs: 'vm',
						resolve: {
							arrPacientes: function(PacienteService){
								return PacienteService.getPacientes();
							}
						}
					})
				.state('main.secretaria.doctores',{
					url: '/doctores',
					template: require('./app/main/secretaria/doctores/listado/doctores.html'),
					controller : 'SecreDoctorCtrl',
					controllerAs : 'vm',
					resolve: {
						arrDoctores: function(DoctorService){
							return DoctorService.getDoctores();
						}
					}
				})
			/**************************/
			/* urls doctor */
			.state('main.doctor',{
				url: '/doctor',
				template: require('./app/main/doctor/doctor.html'),
				controller: 'DoctorCtrl'
			})
			.state('main.doctor.consultas',{
				url: '/consultas',
				template: require('./app/main/components/consulta/listado/listado.html'),
				controller:'ConsultaListadoCtrl',
				controllerAs:'vm',
				resolve: {
					arrConsultas: function(ConsultaService){
						return ConsultaService.getConsultas();
					}
				}
			})
			.state('main.doctor.pacientes',{
				url: '/pacientes',
				template: require('./app/main/components/pacientes/listado/listado.html'),
				controller: 'PacientesListadoCtrl',
				controllerAs: 'vm',
				resolve: {
					arrPacientes: function(PacienteService){
						return PacienteService.getPacientes();
					}
				}
			})

	}
}
