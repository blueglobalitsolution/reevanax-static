var file_frame;
jQuery(document).on('click', '.ova_metabox_gallery a.gallery-add', function(e) {
   e.preventDefault();
   if (file_frame) file_frame.close();
   file_frame = wp.media.frames.file_frame = wp.media({
      title: jQuery(this).data('uploader-title'),
      button: {
      text: jQuery(this).data('uploader-button-text'),
   },
   multiple: true
 });

file_frame.on('select', function() {
   var listIndex = jQuery('#gallery-metabox-list li').index(jQuery('#gallery-metabox-list li:last')),
   selection = file_frame.state().get('selection');

selection.map(function(attachment, i) {
   attachment = attachment.toJSON(),
   index = listIndex + (i + 1);
jQuery('#gallery-metabox-list').append('<li><input type="hidden" name="ova_met_gallery_id[' + index + ']" value="' + attachment.id + '"><img class="image-preview" src="' + attachment.sizes.thumbnail.url + '"><a class="change-image button button-small" href="#" data-uploader-title="Change" data-uploader-button-text="Change">Change</a><br><small><a class="remove-image" href="#">Remove</a></small></li>');
 });
 });
 fnSortable();
 file_frame.open();

});


jQuery(document).on('click', '.ova_metabox_gallery  a.change-image', function(e) {
  e.preventDefault();
  var that = jQuery(this);
  if (file_frame) file_frame.close();
  file_frame = wp.media.frames.file_frame = wp.media({
     title: jQuery(this).data('uploader-title'),
     button: {
     text: jQuery(this).data('uploader-button-text'),
  },
  multiple: false
  });

  file_frame.on( 'select', function() {
     attachment = file_frame.state().get('selection').first().toJSON();
     that.parent().find('input:hidden').attr('value', attachment.id);
     that.parent().find('img.image-preview').attr('src', attachment.sizes.thumbnail.url);
  });
  file_frame.open();
});

jQuery(document).on('click', '.ova_metabox_gallery a.remove-image', function(e) {
   e.preventDefault();
   jQuery(this).parents('li').animate({ opacity: 0 }, 200, function() {
     jQuery(this).remove();
      resetIndex();
    });
 });

function resetIndex() {
    jQuery('#gallery-metabox-list li').each(function(i) {
       jQuery(this).find('input:hidden').attr('name', 'ova_met_gallery_id[' + i + ']');
    });
}


function fnSortable() {
    jQuery('#gallery-metabox-list').sortable({
       opacity: 0.6,
       stop: function() {
          resetIndex();
       }
    });
}