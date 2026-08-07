(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/mellis_elementor_gallery.default', function(){
          // Grid Gallery
            $('.ova-gallery').each( function() {
                var that = $(this);
                var grid = that.find('.grid');
                var run  = grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: 0,
                    percentPosition: true,
                    transitionDuration: 0
                });

                run.imagesLoaded().progress( function() {
                    run.masonry();
                });

                // Popup Gallery
                if( $('.gallery-fancybox').length && typeof Fancybox != 'undefined' ){
                    Fancybox.bind('[data-fancybox="gallery"]', {
                        'scrolling': 'no',
                        'speedIn': 600, 
                        'speedOut': 200, 
                        'overlayShow' : false,
                        caption: function (fancybox, carousel, slide) {
                          return (
                            `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
                          );
                        },
                    });
                }
            });
        });
  });

})(jQuery);
