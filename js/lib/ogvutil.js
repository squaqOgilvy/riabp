/*
    Author: Ogilvy Brasil   
    Developers: Paulo Sanches    
*/
(function(window) {
	'use strict';

	var ogvu = {
		// Use for display debug information on screen    	
		debug: true,
		// Create a new setTimeout with callback function and duration time params
		timer: function(callback, duration) {
			return setTimeout(callback, duration);
		},
		// Touch Events Handler
		touch: {
			// Clear Touch events default action
			lock: function() {
				document.addEventListener('touchstart', this.preventDefault, false);
				document.addEventListener('touchmove', this.preventDefault, false);
				document.addEventListener('touchend', this.preventDefault, false);
			},
			// Restore Touch events to default action
			unlock: function() {
				document.removeEventListener('touchstart', this.preventDefault, false);
				document.removeEventListener('touchmove', this.preventDefault, false);
				document.removeEventListener('touchend', this.preventDefault, false);
			},
			// Prevent default action event
			preventDefault: function(event) {
				event.preventDefault();
			}
		},
		log: function(text){
			if(this.debug === true){
				if(!document.getElementById('debug')) {
					var el = document.createElement('div');
					
					el.setAttribute('id','debug');
					el.style.position = 'absolute';
					el.style.top = '0px'; 

					document.getElementById('ogvStage').appendChild(el);

					el.innerHTML = text;
				}
			}else{
				if(document.getElementById('debug')) {
					document.getElementById('ogvStage').removeChild('debug');
				}
			};
		}
	};

	window.ogvu = ogvu;

}(window));