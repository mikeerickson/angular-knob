var angular = require('angular');

angular.module('angularKnobModule',[])
  .directive('angularKnob',AngularKnobDirective);

AngularKnobDirective.$inject = [];
function AngularKnobDirective() {
  return {
    restrict: 'AE',
    require: 'ngModel',
    scope: {
      model: '='
    },
    link: function (scope, elem, attrs, ngModel) {
      elem.knob({

        // behavior
        min: attrs.min,
        max: attrs.max,
        step: attrs.step,
        angleOffset: attrs.angleOffset,
        angleArc: attrs.angleArc,
        stopper: attrs.stopper,
        readOnly: attrs.readOnly,
        direction: attrs.direction,

        // user interface
        fgColor: attrs.fgColor,
        bgColor: attrs.bgColor,
        inputColor: attrs.inputColor,
        cursor: attrs.cursor,
        thickness: attrs.thickness,
        lineCap: attrs.lineCap,
        width: attrs.width,
        height: attrs.height,
        displayInput: attrs.displayInput,
        displayPrevious: attrs.displayPrevios,
        font: attrs.font,
        fontWeight: attrs.fontWeight,

        // handle interaction with ngModel (make sure we have whole numbers)
        change: function (value) {
          scope.$apply(function (){
            ngModel.$setViewValue(Math.round(value)); // default show decimals
          });
        }
      });

      // executed when model value is changed outside of directive
      ngModel.$render = function () {
        elem.val(ngModel.$viewValue).trigger('change');
      };
    }
  }
}

module.exports = AngularKnobDirective;
