(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name projects.factory:Projects
   *
   * @description
   *
   */
  angular
    .module('voice')
    .factory('VoiceConfig', VoiceConfig);

  function VoiceConfig($q) {
    var CONFIG = {
	    // app name
	    appName: 'Jack', // we like Ironman

	    // voice language
	    voiceRecognitionLanguage: 'en-US',
	    voiceSpeakingLanguage: 'US English Male',
	    
	    // uptime
	    upTime: [
	    	'Yes I\'m alive since {0}', 
	    	'I\'m not breathing, but alive since {0}'
    	],

	    // greetings sentences
	    greeting: [
		    	'hi there, how can I help?', 
		    	'yes sir, need any help?', 
		    	'I\'m here, my I assist you?'
	    	],

	    // when asked about the IP address
	    ipAddress: 'OK I found {0} IPs, take note.',
	    dot: 'dot',
	    
	    addingToShoppingList : [
	    	'Got it, adding {0} to your shopping list.',
	    	'Oh no, out of {0}, adding to your shopping list',
	    	'Ok just added {0} to your shopping list'
    	],

	    
	}

    return CONFIG;
  }

})();
