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
			};
			// Addd eventlistener on Dom Element with delay
			this.on = function(event, callback, delay) {
				if (delay === undefined) {
					delay = 0;
				};

				setTimeout(function() {
					this.addEventListener(event, callback, false);
				}.bind(this), delay * 1000);
			};
			// Remove o eventlistener of Dom Element with delay
			this.off = function(event, callback, delay) {
				if (delay === undefined) {
					delay = 0;
				};

				setTimeout(function() {
					this.removeEventListener(event, callback, false);
				}.bind(this), delay * 1000);
			}

			//return string style value 
			this.cssValue = function(property)
			{
				return window.getComputedStyle(this, null).getPropertyCSSValue(property).cssText
			};

			//return div width
			this.getWidth = function(){return parseInt(this.cssValue('width'));};
			//return div height
			this.getHeight = function(){return parseInt(this.cssValue('height'));};
			//return div margin-left
			this.left = function(){return parseInt(this.cssValue('margin-left'));};
			//return div margin-right
			this.right = function(){return parseInt(this.cssValue('margin-right'));}
			
			//set div transformations with cross-browser
			//@params x, y, rotate = 0, scale = 1
			this.transform = function(x, y, rotate, scale)
			{
               if(!rotate) rotate = 0; if(!scale) scale = 1;
               this.style.webkitTransform = "translate("+x+"px, "+y+"px) rotate("+rotate+"deg) scale("+scale+")";
               this.style.MozTransform = "translate("+x+"px, "+y+"px) rotate("+rotate+"deg) scale("+scale+")";
               this.style.msTransform = "translate("+x+"px, "+y+"px) rotate("+rotate+"deg) scale("+scale+")";
               this.style.OTransform = "translate("+x+"px, "+y+"px) rotate("+rotate+"deg) scale("+scale+")";
               this.style.transform = "translate("+x+"px, "+y+"px) rotate("+rotate+"deg) scale("+scale+")";
            }
            
           
		}
	};

	window.ogvs = ogvs;

}(window));