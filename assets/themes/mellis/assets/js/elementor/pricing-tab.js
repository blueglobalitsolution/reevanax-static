(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        
		elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_pricing_tab.default', function(){

			$(".ova-pricing-tab .tab-pricing-switch .switch").each(function(){

				var that 	     = $(this);
                var tab_active   = that.closest('.ova-pricing-tab').find('.tab-pricing-content .tab-pane');
                var label_active = that.closest('.tab-pricing-switch').find('.price-label');
                var active 	     = that.data('active');

                that.on( 'click', function() {
                	that.toggleClass('switch-active');

                	if ( active == 'pricing-tab2' ) {
                		active = 'pricing-tab1';
                	} else {
                		active = 'pricing-tab2';
                	};
                	that.attr('data-active', active);

                	// tab active
                	tab_active.removeClass('active');
                	that.closest('.ova-pricing-tab').find('.tab-pricing-content .'+active).addClass('active');

                    // label active
                	label_active.removeClass('label-active');
                	that.closest('.ova-pricing-tab').find('.tab-pricing-switch .'+active).addClass('label-active');
                });
                
		    });
		    
		});


   });

})(jQuery);
