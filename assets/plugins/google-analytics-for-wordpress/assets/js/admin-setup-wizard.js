/**
 * MonsterInsights Admin Setup Wizard Handler
 *
 * Delegated click handler for any element with the
 * monsterinsights-setup-wizard-link class.
 *
 * The onboarding URL (with its short-lived onboarding_key) is pre-generated
 * server-side at page render and localized as window.monsterinsights.wizard_url,
 * so a click navigates instantly with no admin-ajax round-trip.
 *
 * Because the key has a 30-minute TTL, a left-open tab could carry a stale URL.
 * We handle that the way session keepalive does: a non-blocking background
 * refresh when the tab regains visibility/focus after being idle, plus a
 * just-in-time refetch if a click happens once the URL is past its TTL. The
 * legacy admin-ajax action is only used as a fallback, never on the happy path.
 */

(function () {
	'use strict';

	// Refresh the pre-generated URL before its onboarding_key (30 min TTL) expires.
	var STALE_MS = 28 * 60 * 1000;
	// Only re-fetch on visibility/focus once the current URL is getting old.
	var REFRESH_AFTER_MS = 20 * 60 * 1000;

	var isLaunching = false;
	var isRefreshing = false;
	// Approximate render time of the currently-held URL.
	var lastRefresh = Date.now();

	function config() {
		return window.monsterinsights || {};
	}

	function currentWizardUrl() {
		var url = config().wizard_url;
		return url && url !== '#' ? url : null;
	}

	function isFresh() {
		return Date.now() - lastRefresh < STALE_MS;
	}

	/**
	 * Fetch a fresh onboarding URL via the legacy admin-ajax action.
	 *
	 * @param {function(string):void} [onDone] Called with the fresh URL on success.
	 */
	function fetchWizardUrl(onDone) {
		var cfg = config();
		if (!cfg.ajax || !cfg.nonce) {
			if (typeof onDone === 'function') {
				onDone(null);
			}
			return;
		}

		var formData = new FormData();
		formData.append('action', 'monsterinsights_generate_setup_wizard_url');
		formData.append('nonce', cfg.nonce);

		fetch(cfg.ajax, {
			method: 'POST',
			body: formData,
			credentials: 'same-origin',
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				if (response && response.success && response.data && response.data.wizard_url) {
					var url = response.data.wizard_url;
					if (window.monsterinsights && typeof window.monsterinsights === 'object') {
						window.monsterinsights.wizard_url = url;
					}
					lastRefresh = Date.now();
					syncRenderedLinks(url);
					if (typeof onDone === 'function') {
						onDone(url);
					}
					return;
				}
				if (typeof onDone === 'function') {
					onDone(null);
				}
			})
			.catch(function () {
				if (typeof onDone === 'function') {
					onDone(null);
				}
			});
	}

	/**
	 * Keep any anchors that render a real href (e.g. the dashboard widget button)
	 * pointing at the fresh URL so the browser status-bar preview matches.
	 *
	 * @param {string} url The fresh onboarding URL.
	 */
	function syncRenderedLinks(url) {
		var links = document.querySelectorAll('a.monsterinsights-setup-wizard-link[href]');
		for (var i = 0; i < links.length; i++) {
			var href = links[i].getAttribute('href');
			if (href && href !== '#') {
				links[i].setAttribute('href', url);
			}
		}
	}

	// Background (non-blocking) refresh so a returning user's next click stays instant.
	function maybeRefreshInBackground() {
		if (isRefreshing || document.visibilityState !== 'visible') {
			return;
		}
		if (Date.now() - lastRefresh < REFRESH_AFTER_MS) {
			return;
		}
		isRefreshing = true;
		fetchWizardUrl(function () {
			isRefreshing = false;
		});
	}

	function launchSetupWizard(link) {
		if (isLaunching) {
			return;
		}

		// Happy path: use the pre-generated URL (kept fresh) for instant navigation.
		if (isFresh()) {
			var url = currentWizardUrl();
			if (!url && link) {
				var href = link.getAttribute('href');
				if (href && href !== '#') {
					url = href;
				}
			}
			if (url) {
				isLaunching = true;
				window.location.href = url;
				return;
			}
		}

		// Fallback: URL is missing or past its TTL — fetch a fresh one, then navigate.
		isLaunching = true;
		fetchWizardUrl(function (url) {
			if (url) {
				window.location.href = url;
				return;
			}
			isLaunching = false;
		});
	}

	document.addEventListener('click', function (event) {
		var link = event.target.closest('.monsterinsights-setup-wizard-link');
		if (!link) {
			return;
		}
		event.preventDefault();
		launchSetupWizard(link);
	});

	document.addEventListener('visibilitychange', maybeRefreshInBackground);
	window.addEventListener('focus', maybeRefreshInBackground);
})();
