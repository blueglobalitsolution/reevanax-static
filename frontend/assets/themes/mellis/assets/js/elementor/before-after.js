(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_before_after.default', function(){

			$(".ova_before_after").each(function(){

				var divisor 	= document.getElementById("divisor");
				var handle 		= document.getElementById("handle");
				var slider 		= document.getElementById("slider");

				$("#slider").on("input change", (e) => {
					handle.style.left = slider.value+"%";
					divisor.style.width = slider.value+"%";
				});

		    });

		});

   });

})(jQuery);