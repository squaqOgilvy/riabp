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
        }
	};

	window.ogvu = ogvu;

}(window));