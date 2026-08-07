(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_progress_circle.default', function(){

			$(".ova-progress-circle").appear(function(){
				var circle = $(this);

				var start_angle = circle.data('start_angle');
				var size     	= circle.data('size');
				var value    	= circle.data('value');
				var color    	= circle.data('color');
				var empty_color = circle.data('empty_color');
				var linecap  	= circle.data('linecap');

                var progressBarOptions = {
                	startAngle: start_angle,
                	size: size,
				    value: value,
				    fill: {
				        color: color 
				    },
				    emptyFill: empty_color,
				    lineCap: linecap
				};

				circle.circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
					$(this).find('strong').text(String((stepValue*100).toFixed(0)));
				});

		    });

		});


   });

})(jQuery);
