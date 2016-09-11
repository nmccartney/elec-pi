(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('dashboard')
    .controller('DashboardCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';
  }

})();
