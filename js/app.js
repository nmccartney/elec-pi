(function () {
  'use strict';

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
    $urlRouterProvider.otherwise('/');
  }

})();

$ = require('jquery')

$(document).ready(function(){
  console.log('add btns');
  $('#btn-panel-1').on('click',function(){
    $('#panel-3').addClass('left')
    $('#panel-3').removeClass('middle')
  })
  $('#btn-panel-2').on('click',function(){
    $('#panel-3').removeClass('left')
    $('#panel-3').addClass('middle')
  })
  $('#btn-panel-3').on('click',function(){
    $('#panel-3').removeClass('left')
    $('#panel-3').removeClass('middle')
  })
})