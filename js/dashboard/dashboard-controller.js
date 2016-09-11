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
    vm.ctrlName = 'Dashboard';

    vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  	vm.data = [300, 500, 100];

  	vm.chartlabels = ["January", "February", "March", "April", "May", "June", "July"];
	  vm.series = ['Series A', 'Series B'];
	  vm.chartdata = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
	  vm.onClick = function (points, evt) {
	    console.log(points, evt);
	  };
	  vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  vm.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	  };

    VoiceCommands.init().then(()=>{
    	// VoiceCommands.currentTime();
    	VoiceCommands.wakeUp()
    });
  }

})();
