var angular = require('angular');

angular.module('testModule', [])
  .directive('testDir', TestDirective);

function TestDirective() {
  return {
    restrict: 'AE',
    scope: {
      model: '='
    },
    link: function (scope, elem, attrs) {
      // $(elem).knob({});
    },
    template: 'Hello World from Directive!'
  }
}

module.exports = TestDirective;
