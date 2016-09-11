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

  function HomeCtrl(VoiceCommands) {
    var vm = this;
    vm.ctrlName = 'DashboardCtrl';

    VoiceCommands.init().then(()=>{
    	// VoiceCommands.currentTime();
    	VoiceCommands.wakeUp()
    });
  }

})();
