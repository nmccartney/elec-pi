(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('dashboard', [
      'ui.router',
      'voice'
    ]);

  angular
    .module('dashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        // templateUrl: 'home/home.tpl.html',
        template:"dashboard",
        controller: 'DashboardCtrl as dashboard'
      });
  }

})();
