/* global WP_Smush */
/* global ajaxurl */

/**
 * Bulk Smush functionality.
 *
 * @since 2.9.0  Moved from admin.js
 */

import Fetcher from '../utils/fetcher';
// TODO: Clean this file after we handling ignore all failed items.
( function( $ ) {
	'use strict';

	class WP_Smush_Bulk {
		constructor() {
			this.onClickIgnoreAllImages();
		}

		onClickIgnoreAllImages() {
			/**
			 * Ignore file from bulk Smush.
			 *
			 * @since 3.12.0
			 */
			const ignoreAll = document.querySelector( '.wp_smush_ignore_all_failed_items' );
			if ( ignoreAll ) {
				ignoreAll.onclick = ( e ) => {
					e.preventDefault();
					e.target.setAttribute( 'disabled', '' );
					e.target.style.cursor = 'progress';
					const type = e.target.dataset.type || null;
					e.target.classList.remove( 'sui-tooltip' );
					Fetcher.smush.ignoreAll( type ).then( ( res ) => {
						if ( res.success ) {
							window.location.reload();
						} else {
							e.target.style.cursor = 'pointer';
							e.target.removeAttribute( 'disabled' );
							WP_Smush.helpers.showNotice( res );
						}
					} );
				};
			}
		}
	}

	WP_Smush.bulk = new WP_Smush_Bulk();

}( jQuery ) );
