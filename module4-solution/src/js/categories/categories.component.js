(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .component('categories', {
      templateUrl: './src/js/categories/categories.template.html',
        bindings: {
          items: '<'
        }
    });
})();