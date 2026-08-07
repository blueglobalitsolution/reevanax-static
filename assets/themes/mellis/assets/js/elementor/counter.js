(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_counter.default', function(){

			$(".ova-counter").appear(function(){
				var count    = $(this).attr('data-count');
				var odometer = $(this).closest('.ova-counter').find('.odometer');

		        setTimeout(function(){
				    odometer.html(count);
				}, 500);
				
		    });
		    
		});


   });

})(jQuery);
