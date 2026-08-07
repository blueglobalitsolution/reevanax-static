(function($){
	"use strict";

	// Popup Sinlge Gallery
	if( $('.woocommerce-product-gallery__image').length && typeof Fancybox != 'undefined' ){
		Fancybox.bind("[data-fancybox]", {
		  // Your options go here
		});
	} 

	$('.ova-login-register-woo li a').on('click', function(){
		var type = $(this).data('type');
		$('.ova-login-register-woo li').removeClass('active');
		$(this).parent('li').addClass('active');
		if( type === 'login' ){
			$('.woocommerce #customer_login .woocommerce-form.woocommerce-form-login').css('display', 'block');
			$('.woocommerce #customer_login .woocommerce-form.woocommerce-form-register').css('display', 'none');
		} else if( type === 'register' ){
			$('.woocommerce #customer_login .woocommerce-form.woocommerce-form-register').css('display', 'block');
			$('.woocommerce #customer_login .woocommerce-form.woocommerce-form-login').css('display', 'none');
		}
	})
 
})(jQuery);