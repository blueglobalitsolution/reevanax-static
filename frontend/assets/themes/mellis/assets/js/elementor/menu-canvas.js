(function($){
	"use strict";

	function initMenuCanvas() {
		// Initialize dropdown buttons if not already added
		$('.menu-canvas').each(function() {
			var $canvas = $(this);

			$canvas.find('.menu-item-has-children > a, .page_item_has_children > a').each(function() {
				var $a = $(this);
				if ($a.next('.dropdown-toggle').length === 0) {
					var $dropdown = $('<button type="button" class="dropdown-toggle" aria-label="Toggle Submenu"></button>');
					$dropdown.insertAfter($a);
				}
			});
		});
	}

	// Delegated click & touch handlers so they ALWAYS work
	$(document).on('click', '.menu-canvas .menu-toggle', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $canvas = $(this).closest('.menu-canvas');
		$canvas.toggleClass('toggled');
		$('body').toggleClass('canvas-menu-open', $canvas.hasClass('toggled'));
	});

	$(document).on('click', '.menu-canvas .site-overlay, .menu-canvas .close-menu', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $canvas = $(this).closest('.menu-canvas');
		$canvas.removeClass('toggled');
		$('body').removeClass('canvas-menu-open');
	});

	$(document).on('click', '.menu-canvas .dropdown-toggle', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this);
		$btn.toggleClass('toggled-on');
		$btn.siblings('ul.sub-menu').stop().toggleClass('show');
	});

	// Close drawer if user clicks on an actual nav link (not with children or hash)
	$(document).on('click', '.menu-canvas .primary-navigation a', function(e) {
		var href = $(this).attr('href');
		if (href && href !== '#' && !href.startsWith('javascript:')) {
			$('.menu-canvas').removeClass('toggled');
			$('body').removeClass('canvas-menu-open');
		}
	});

	// Initialize on DOM ready
	$(function() {
		initMenuCanvas();
	});

	// Also re-init if Elementor triggers its hook
	$(window).on('elementor/frontend/init', function () {
		if (window.elementorFrontend && window.elementorFrontend.hooks) {
			elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_menu_canvas.default', function(){
				initMenuCanvas();
			});
		}
	});

})(jQuery);