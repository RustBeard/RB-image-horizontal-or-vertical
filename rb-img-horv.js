/*!
 * RB image: horizontal or vertical
 * ver. 1.0
 * Responsively adds classes to images, based on their dimensions and dimensions of the parent container.
 * 
 * Copyright (c) 2016 Marek Kędzierski
 * License: MIT
 * 
 * Based on jQuery plugin boilerplate by @ajpiano and @addyosmani
 */

/*
 * 
 * Usage:
	$('.img-class').RBimgHorV();
 * 
 * 
 */

;(function ($, window, document, undefined) {

	// Default options
	var RBimgHorV = 'RBimgHorV',
		defaults = {
			hClass: 'img-h',
			vClass: 'img-v'
		};

	// Constructor
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = RBimgHorV;

		this.init();
	}

	Plugin.prototype = {

		init: function () {
			RBimages = $(this.element);

			var that = this;
			$(window).load(function(){
				that.checkSize();
			});
			$(window).resize(function(){
				that.checkSize();
			});
			RBimages.load(function() {
				that.checkSize();
			});
		},

		checkSize: function () {
			var that = this;
			RBimages.each(function() {
				$(this).removeClass(that.options.hClass + ' ' + that.options.vClass);

				var imgWidth = $(this).width();
				var imgHeight = $(this).height();
				var imgParentWidth = $(this).parent().outerWidth();
				var imgParentHeight = $(this).parent().outerHeight();
				var prop = ((imgWidth/imgHeight)/(imgParentWidth/imgParentHeight))

				if(prop >= 1) {
					$(this).addClass(that.options.hClass);
				} else {
					$(this).addClass(that.options.vClass);
				}
			});
		}
	};

	// Plugin wrapper around the constructor preventing against multiple instantiations
	$.fn[RBimgHorV] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + RBimgHorV)) {
				$.data(this, 'plugin_' + RBimgHorV,
				new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);