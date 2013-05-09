/*
	Author: Ogilvy Brasil	
	Developers: Paulo Sanches, Everton Melo
*/
(function(window) {
	'use strict';

	var ogvs = function(context) {
		return new ogvs.fn.init(context);
	};

	ogvs.fn = ogvs.prototype = {
		init: function(context) {
			var elem = 0,
				selector = context.charAt(0);

			switch (selector) {
				case '#':
					elem = document.getElementById(context.split('#')[1]);
					break;
				case '.':
					elem = document.getElementsByClassName(context.split('.')[1])[0];
					break;
				default:
					elem = document.getElementsByTagName(context)[0];
					break;
			};

			if (elem === null) return;

			ogvs.fn.methods.call(elem);
			return elem;
		},
		methods: function() {
			// Hide the element with delay 
			this.hide = function(delay) {
				if (delay === undefined) {
					delay = 0;
				};

				setTimeout(function() {
					this.style.display = 'none';
				}.bind(this), delay * 1000);
			};
			// Show the element with delay 
			this.show = function(delay) {
				if (delay === undefined) {
					delay = 0;
				};

				setTimeout(function() {
					this.style.display = 'block';
				}.bind(this), delay * 1000);
			};
			// Create and add dom element with id and delay
			this.addChild = function(id, style, delay) {
				if (delay === undefined) {
					delay = 0;
				};

				var elem = document.createElement('div');
				this.appendChild(elem);

				if (id !== undefined) {
					elem.setAttribute('id', id);
				};

				if (style !== undefined) {
					ogvs('#' + id).css(style);
				};
			};
			// Remove dom element with delay
			this.removeChild = function(id, delay) {
				if (delay === undefined) {
					delay = 0;
				};

				setTimeout(function() {
					this.removeChild(ogvs(id));
				}.bind(this), delay * 1000);
			}
		}
	};

	window.ogvs = ogvs;

}(window));