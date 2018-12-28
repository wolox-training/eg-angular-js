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
      this.onKeyPress = ($event) => {
        if ($event.which === 13)
          this.onSearch();
      }

      this.inputValueChanged = () => {
        this.ngModel = this.inputValue;
        this.onChange();
      }

      this.selectValueChanged = () => {
        this.ngModel = this.selectValue;
        this.onChange();
      }
    }
  });
