var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.js')

var app = angular.module('appConsultorio', [
  'ui.router',
  'appConsultorio.home',
  'appConsultorio.login',
  'appConsultorio.main'
]);
require('./app/home/home.module')();
require('./app/main/main.module')();
require('./app.config')(app);
