(function($){
	"use strict";
	
	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_toggle_content.default', function(){
	   
	        $('.ova-toggle-content .button-toggle').each(function(){
		        $(this).off().on('click', function() {
		            $(this).closest( '.ova-toggle-content' ).toggleClass('toggled');
		        });
		    });
	        
	       	if( $('.ova-toggle-content .site-overlay').length > 0 ){
	        	$('.ova-toggle-content .site-overlay').off().on('click', function () {
		        	$(this).closest( '.ova-toggle-content' ).toggleClass('toggled');
		        });
	        }

	        if( $('.ova-toggle-content .close-menu').length > 0 ){
	        	$('.ova-toggle-content .close-menu').off().on('click', function () {
		        	$(this).closest( '.ova-toggle-content' ).toggleClass('toggled');
		        });
	        }

        });
   });

})(jQuery);