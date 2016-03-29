var angular = require('angular');
require ('angular-ui-router');
require('angular-clock');
window.$ = window.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.js')
var app = angular.module('appConsultorio', [
  'ui.router',
  'ui.bootstrap',
  'Helpers',
  'ds.clock',
  'appConsultorio.service',
  'appConsultorio.home',
  'appConsultorio.login',
  'appConsultorio.main'
]);
require('../node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js')
require('./services/services.module')();
require('./app/home/home.module')();
require('./helpers/helpers.module')();
require('./app/main/main.module')();
require('./app.config')(app);
require('./app.constants')(app);
