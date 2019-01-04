'use strict';

angular.
  module('wInput', []).
  component('wInput', {
    templateUrl: 'common/w-input/w-input.template.html',
    bindings: {
      onSearch: '&',
      onChange: '&',
      placeholder: '@',
      items: '=',
      ngModel: '=?'
    },
    controller: function BooksListController() {
      var ctrl = this;
      ctrl.onKeyPress = function ($event) {
        if ($event.which === 13)
          ctrl.onSearch();
      }

      ctrl.inputValueChanged = function () {
        ctrl.ngModel = ctrl.inputValue;
        ctrl.onChange();
      }

      ctrl.selectValueChanged = function () {
        ctrl.ngModel = ctrl.selectValue;
        ctrl.onChange();
      }
    }
  });
