jQuery(function($) {
    $('.bookly-js-board').on('click', '[data-trigger]', function() {
        switch ($(this).data('trigger')) {
            case 'temporary-hide':
                var $dialog = $(this).closest('.bookly-modal-backdrop');
                $.get(BooklyL10nGlobal.ajax_url_backend, {action: 'bookly_pro_hide_grace_notice', csrf_token: BooklyL10nGlobal.csrf_token})
                    .done(function() {
                        $dialog.remove();
                    });
                break;
            case 'request_code':
                BooklyLicenseDialog.showDialog(() => window.location.reload());
                break;
        }
    });

    // Deactivate add-on Bookly Pro from *_grace_ended
    $('.bookly-js-deactivate-pro').on('click', function() {
        var $button = $(this);
        $.post(ajaxurl, {action: 'bookly_pro_deactivate', csrf_token: BooklyL10nGlobal.csrf_token}, function(response) {
            if (response.success) {
                if ($button.data('redirect')) {
                    window.location.href = response.data.target;
                } else {
                    $button.closest('.is-dismissible').remove();
                }
            }
        });
    });

    $('#bookly-tbs .is-dismissible').on('click', '[data-trigger=temporary-hide]', function() {
        $.get(BooklyL10nGlobal.ajax_url_backend, {action: 'bookly_pro_hide_grace_notice', csrf_token: BooklyL10nGlobal.csrf_token});
        $(this).closest('.is-dismissible').remove();
    });
});
