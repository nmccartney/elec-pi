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
    .factory('VoiceCommands', VoiceCommands);

  function VoiceCommands($q,VoiceConfig) {
    var VoiceCommandBase = {};

    VoiceCommandBase.lastLaunchDate = new Date();

    VoiceCommandBase.init = function(){
    	var deferred = $q.defer();
    	console.log(VoiceCommandBase.voiceCommands)
      if (annyang) {
	        annyang.addCommands(VoiceCommandBase.voiceCommands);
	        annyang.setLanguage(VoiceConfig.voiceRecognitionLanguage);
	        annyang.debug(true); // output on console.log
	        annyang.start();

	        console.log('Voice recognition ready');
	    }

	    VoiceCommandBase.setUpRespVoice().then(()=>{
	    	deferred.resolve();
	    })

	    return deferred.promise;
    }

    VoiceCommandBase.captions = []
    

    /**
    **
    **/
    VoiceCommandBase.areYouAlive = function(){
		    say(randomSentence(VoiceConfig.upTime).format(lastLaunchDate.getHours() + ' ' + lastLaunchDate.getMinutes()));
		}

		VoiceCommandBase.wakeUp = function () {
		    say(randomSentence(VoiceConfig.greeting));
		}


		VoiceCommandBase.currentTime = function(){
		    var dateTime = new Date();
		    say('{0} {1}'.format(dateTime.getHours(), dateTime.getMinutes()));
		}

		VoiceCommandBase.lastSentence = null;

		VoiceCommandBase.repeatLastSentence = function(){
		    say(VoiceCommandBase.lastSentence);
		}

		function say(msg, callback) {
		    console.log('Pause annyang');
		    console.log('Saying: ' + msg);

		    VoiceCommandBase.lastSentence=msg;

		    annyang.abort();

		    VoiceCommandBase.captions.push({"message":msg,"time":new Date()});

		    responsiveVoice.speak(msg, VoiceConfig.voiceSpeakingLanguage, {
		        onend: function () {
		            console.log('Resume annyang');
		            annyang.start();
		        }
		    });
		}

		function randomSentence(arr) {
		    if (Array.isArray(arr)) return arr[Math.floor(Math.random() * arr.length)];
		    return arr;
		}

		// source: http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
		if (!String.prototype.format) {
		    String.prototype.format = function () {
		        var args = arguments;
		        return this.replace(/{(\d+)}/g, function (match, number) {
		            return typeof args[number] != 'undefined' ? args[number] : match;
		        });
		    };
		}

    VoiceCommandBase.setUpRespVoice = function(){
    	var deferred = $q.defer();
    	responsiveVoice.OnVoiceReady = function() {
			  deferred.resolve();
			};
			return deferred.promise;
    }

    VoiceCommandBase.voiceCommands = {
        // are you alive?
        'are you alive': VoiceCommandBase.areYouAlive,
        
        // wake-up calls
        '(hi) (good) (morning) (afternoon) (night) (evening) Jack': VoiceCommandBase.wakeUp, // can say any combination, but the appName is mandatory 
        
        // just say the current hour
        'what time is it (please)': VoiceCommandBase.currentTime,
        
        // repeat last
        'repeat (please)' : VoiceCommandBase.repeatLastSentence
    }
    

    return VoiceCommandBase;
  }

})();
