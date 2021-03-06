/*
    Author: Ogilvy Brasil
    Developers: Paulo Sanches
*/
(function(window) {
	'use strict';

	/*
	   --------------------------------
	   Evetns Capability
	   --------------------------------
	*/

	var _has_touch = ('ontouchstart' in window),
		downEvent = _has_touch ? 'touchstart' : 'mousedown',
		upEvent = _has_touch ? 'touchend' : 'mouseup',
		moveEvent = _has_touch ? 'touchmove' : 'mousemove';

    /*
       requestAnimationFrame cross-browser 
    */
    window.requestAnimationFrame = (function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame || function( callback ){setTimeout(callback, 1000 / 60);};})();	

	/*
	   --------------------------------
	   Object ogvu
	   --------------------------------
	*/
    
    
        
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
				document.addEventListener(downEvent, this.preventDefault, false);
				document.addEventListener(moveEvent, this.preventDefault, false);
				document.addEventListener(upEvent, this.preventDefault, false);
			},
			// Restore Touch events to default action
			unlock: function() {
				document.removeEventListener(downEvent, this.preventDefault, false);
				document.removeEventListener(moveEvent, this.preventDefault, false);
				document.removeEventListener(upEvent, this.preventDefault, false);
			},
			// Prevent default action event
			preventDefault: function(event) {
				event.preventDefault();
			}
		},
		// Write debug log on HTML
		log: function(text) {
			if (this.debug === true) {
				if (!document.getElementById('debug')) 
				{
					var el = document.createElement('div');

					el.setAttribute('id', 'debug');
					el.style.position = 'absolute';
					el.style.top = '0px';

					document.getElementById('ogvStage').appendChild(el);
                   
					el.innerHTML = text;
					
				}
				else document.getElementById('debug').innerHTML = text;
                
			} else {
				if (document.getElementById('debug')) {
					document.getElementById('ogvStage').removeChild('debug');
				}
			};
		},
		// Create and add clicktag element from params
		clicktag: function(url, width, height, left, top) {
			if (!document.getElementById('clicktag')) {
					var el = document.createElement('div');

					el.setAttribute('id', 'clicktag');
					el.style.position = 'absolute';
					el.style.width = width !== undefined ? width + 'px' : (document.getElementById('ogvStage').clientWidth - 40) + 'px';
					el.style.height = height !== undefined ? height + 'px' : (document.getElementById('ogvStage').clientHeight - 40) + 'px';
					el.style.top = top !== undefined ? top + 'px' : 20 + 'px';
					el.style.left = left !== undefined ? left + 'px' : 20 + 'px';

					document.getElementById('ogvStage').appendChild(el);

					el.addEventListener(downEvent, function(){
						window.location = url;
					},false)
				}
		}
	};

	window.ogvu = ogvu;

}(window));

