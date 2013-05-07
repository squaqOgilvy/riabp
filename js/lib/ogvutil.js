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
		}
	};

	window.ogvu = ogvu;

}(window));