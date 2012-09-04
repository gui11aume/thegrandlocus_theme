$(document).ready(add_bubbles);

function add_bubbles() {
   $('.prep').map(function() {
      if ($(this).attr('data-comments')) {
         $(this).qtip({
            content: {
               text: function(api) { return $(this).attr('data-comments'); }
            },
            position: {
               my: 'left center',
               at: 'right center'
            },
            show: {
               effect: function(offset) {$(this).show(100); }
            },  
            hide: {
               event: 'click mouseleave'
            },  
            style: {
               classes: 'ui-tooltip-bootstrap ui-tooltip-shadow'
            }   
         });
      }
   });
}

