// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move', 
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : false
  }
});

$(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
  var off_canvas_wrap = $(this);
});

$(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
  var off_canvas_wrap = $(this);
});