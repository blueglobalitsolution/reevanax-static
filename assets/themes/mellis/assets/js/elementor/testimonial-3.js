(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_testimonial_3.default', function(){

			$(".ova-testimonial-3 .slide-testimonials-3").each(function(){

		        var owlsl 		= $(this);
		        var owlsl_ops 	= owlsl.data('options') ? owlsl.data('options') : {};
		        var navCon 		= '#ova-testimonial-slider3-control';

		        var isRTL = $('body').hasClass('rtl');

		        var responsive_value = {
		            0:{
		              	items:1,
		              	dots: true,
		            },
		            767:{
		              	items:1
		            },
		            1024:{
		              	items:owlsl_ops.items
		            }
		        };
		        
		        owlsl.owlCarousel({
		          	autoWidth: owlsl_ops.autoWidth,
		          	margin: owlsl_ops.margin,
		          	items: owlsl_ops.items,
		          	loop: owlsl_ops.loop,
		          	autoplay: owlsl_ops.autoplay,
		          	autoplayTimeout: owlsl_ops.autoplayTimeout,
		          	center: false,
		          	nav: true,
		          	navContainer: navCon,
		          	dots: owlsl_ops.dots,
		          	thumbs: owlsl_ops.thumbs,
		          	autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		          	slideBy: owlsl_ops.slideBy,
		          	smartSpeed: owlsl_ops.smartSpeed,
		          	rtl: isRTL,
		          	navText:[
		          		'<i class="ovaicon-back-2"></i>',
		          		'<i class="ovaicon-next-4"></i>'
		          	],
		          	responsive: responsive_value,
		        });

		      	/* Fixed WCAG */
				owlsl.find(".owl-nav button.owl-prev").attr("title", "Previous");
				owlsl.find(".owl-nav button.owl-next").attr("title", "Next");
				owlsl.find(".owl-dots button").attr("title", "Dots");

		    });

		});

   });

})(jQuery);