var angular = require('angular');
require ('angular-ui-router');
window.$ = window.jQuery = require('jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.js')

var app = angular.module('appConsultorio', ['ui.router', 'appConsultorio.home']);
require('./app/home/home.module')();
require('./app.config')(app);
