(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_testimonial.default', function(){

			$(".ova-testimonial .slider-version_1").each(function(){
		        var slk = $(this) ;
		        var slk_ops = slk.data('options') ? slk.data('options') : {};

		        var isRTL = $('body').hasClass('rtl');
		        if ( isRTL ) {
        			slk.parent().attr('dir','rtl');
        		}
		        
		        slk.slick({
		            dots: slk_ops.dots,
		            autoplay : slk_ops.autoplay,
		            autoplaySpeed : slk_ops.autoplay_speed, 
		            speed: slk_ops.smartSpeed,
				    centerPadding: 0,
				    slidesToShow: slk_ops.items,
				    infinite: slk_ops.loop,
				    arrows: slk_ops.arrows,
		            variableWidth: false,
				    centerMode: true,
				    asNavFor: slk_ops.navfor,
				    rtl: isRTL,
				    responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        variableWidth: false,
				        dots: true,
				      }
				    },
				    {
				      breakpoint: 0,
				      settings: {
				        arrows: false,
				        dots: true,
				      }
				    }

				  ]
				});

		      	/* Fixed WCAG */
				slk.find(".slick-prev").attr("title", "Previous");
				slk.find(".slick-next").attr("title", "Next");
				slk.find(".slick-dots button").attr("title", "Dots");

		    });

		    // slide syncing
		    $(".ova-testimonial .slide-for").each(function(){

		        var slk2 = $(this);

		        var isRTL = $('body').hasClass('rtl');
		        
		        // slider syncing
			    slk2.slick({ 
				    slidesToShow: 5,
				    slidesToScroll: 1,
				    arrows: false,
				    dots: false,
				    variableWidth: true,
				    centerPadding: 0,
                    focusOnSelect: true,
                    centerMode: true,
                    rtl: isRTL,
				    asNavFor: '.slide-testimonials'
				});

		    });
            
            // slider 2
		    $(".ova-testimonial .slider-version_2").each(function(){

		        var slk 	= $(this) ;
		        var slk_ops = slk.data('options') ? slk.data('options') : {};

		        var isRTL = $('body').hasClass('rtl');
		        if ( isRTL ) {
        			slk.parent().attr('dir','rtl');
        		}
		        
		        slk.slick({
		            dots: slk_ops.dots,
		            autoplay : slk_ops.autoplay,
		            autoplaySpeed : slk_ops.autoplay_speed, 
		            speed: slk_ops.smartSpeed,
				    centerPadding: slk_ops.padding,
				    slidesToShow: slk_ops.items,
				    infinite: slk_ops.loop,
				    arrows: slk_ops.arrows,
		            variableWidth: false,
				    centerMode: true,
				    rtl: isRTL,
				    responsive: [
				    {
				      breakpoint: 1025,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        variableWidth: false,
				        slidesToShow: 2,
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        arrows: false,
				        centerMode: true,
				        variableWidth: false,
				        slidesToShow: 1,
				        dots: true,
				      }
				    },
				    {
				      breakpoint: 0,
				      settings: {
				        arrows: false,
				        slidesToShow: 1,
				        dots: true,
				      }
				    }

				  ]
				});

		      	/* Fixed WCAG */
				slk.find(".slick-prev").attr("title", "Previous");
				slk.find(".slick-next").attr("title", "Next");
				slk.find(".slick-dots button").attr("title", "Dots");

		    });
		});


   });

})(jQuery);