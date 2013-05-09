/*
	Author: Ogilvy Brasil	
	Developers: Paulo Sanches, Everton Melo
	Version: 0.1
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
		}
	};

	window.ogvs = ogvs;

}(window));