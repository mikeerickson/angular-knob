console.log('src/index.js')

var angular = require('angular');
var test    = require('./test.directive.js');
var knob    = require('./angular-jquery-knob.directive.js');

var app = angular.module('app', ['testModule','angularKnobModule']);

console.log('Angular v' + angular.version.full);
