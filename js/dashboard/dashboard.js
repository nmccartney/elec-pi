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
      'voice',
      'chart.js'
    ]);

  angular
    .module('dashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: './templates/dashboard.html',
        // template:"dashboard",
        controller: 'DashboardCtrl as dashboard'
      });


    // ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
  }

})();
