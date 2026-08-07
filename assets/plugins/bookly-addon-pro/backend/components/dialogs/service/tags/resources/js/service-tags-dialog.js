jQuery(function ($) {
    'use strict';

    let $dialog = $('#bookly-service-tags-modal'),
        $tags = $('#bookly-services-tags', $dialog),
        $template = $('#bookly-tag-template').clone().removeAttr('id').addClass('bookly-js-tag-wrap'),
        $save = $('#bookly-save', $dialog),
        $servicesList = $('#bookly-services-list'),
        $thumb_container,
        frame = wp.media({
            library: {type: 'image'},
            multiple: false
        })
            .on('select', function () {
                let selection = frame.state().get('selection').toJSON(),
                    img_src;
                if (selection.length) {
                    if (selection[0].sizes['thumbnail'] !== undefined) {
                        img_src = selection[0].sizes['thumbnail'].url;
                    } else {
                        img_src = selection[0].url;
                    }
                    $('[name="attachment_id"]', $thumb_container).val(selection[0].id).trigger('change');
                    $('.bookly-thumb-delete', $thumb_container).show();
                    $thumb_container
                        .css({'background-image': 'url(' + img_src + ')', 'background-size': 'cover'})
                        .addClass('bookly-thumb-with-image');
                    $(this).hide();
                }
            });

    // Save tags
    $save.on('click', function (e) {
        e.preventDefault();
        let ladda = Ladda.create(this),
            tags = [];
        ladda.start();
        $('.card', $tags).each(function (position, tag) {
            let $card = $(tag);
            tags.push({
                id: $('[name="id"]', $card).val(),
                tag: $('[name="name"]', $card).val(),
                info: $('[name="info"]', $card).val(),
                attachment_id: $('[name="attachment_id"]', $card).val(),
            });
        });
        $.post(
            ajaxurl,
            booklySerialize.buildRequestData('bookly_pro_update_service_tags', {tags: tags}),
            function (response) {
                if (response.success) {
                    BooklyProL10nServiceEditDialog.tags.tagsList = response.data.tags;
                    $servicesList.DataTable().ajax.reload();
                    $dialog.booklyModal('hide');
                }
                ladda.stop();
            });
    });

    $dialog.off().on('show.bs.modal', function () {
        // Show a tag list
        $tags.html('');
        BooklyProL10nServiceEditDialog.tags.tagsList.forEach(function (tag) {
            appendTag(tag);
        });
    });

    function appendTag(tag) {
        let $tag = $template.clone(),
            attr_id = 'bookly-tag-' + tag.id;
        $('[name="id"]', $tag).attr('value', tag.id);
        $('[name="name"]', $tag).val(tag.tag);
        $('[name="info"]', $tag).text(tag.info);
        $('.card-header [data-toggle="bookly-collapse"]', $tag).attr('href', '#' + attr_id)
        $('.bookly-collapse', $tag).attr('id', attr_id)
        if (tag.attachment !== null) {
            $('[name="attachment_id"]', $tag).attr('value', tag.attachment_id);
            $('.bookly-thumb-delete', $tag).show();
            $('.bookly-thumb', $tag)
                .css({'background-image': 'url(' + tag.attachment + ')', 'background-size': 'cover'})
                .addClass('bookly-thumb-with-image');
        }

        $tag
            .on('click', '.bookly-thumb label', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $thumb_container = $(this).closest('.bookly-thumb');
                frame.open();
                $(document).off('focusin.modal');
            })
            // Delete img
            .on('click', '.bookly-thumb-delete', function () {
                $('.bookly-thumb', $tag).attr('style', '');
                $('[name="attachment_id"]', $tag).val('').trigger('change');
                $('.bookly-thumb', $tag).removeClass('bookly-thumb-with-image');
                $('.bookly-thumb-delete', $tag).hide();
            })

        $tags.append($tag);
    }

    $('#bookly-services-tags-button').prop('disabled', !BooklyProL10nServiceEditDialog.tags.tagsList.length);
});