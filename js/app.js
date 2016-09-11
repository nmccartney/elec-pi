(function () {
  'use strict';

  console.log('app..')

  /* @ngdoc object
   * @name polyTest
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('elecPi', [
      'ui.router',
      'ui.bootstrap',
      'dashboard'
    ]);

  angular
    .module('elecPi')
    .config(config);

  function config($urlRouterProvider) {
    console.log('configging..')
    $urlRouterProvider.otherwise('/');
  }

})();