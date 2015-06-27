(function ($) {

  /**
   * Stuff to run on resize.
   */
  $(window).resize(function() {
    var width = $(window).width();
    // Place functions to run here.
  });

  /**
   * Stuff to run on page load and ajax events.
   */
  Drupal.behaviors.bootstrapStarter = {
    attach: function (context, settings) {
      svgToPng();
      // Place functions to run here.
    }
  };

}(jQuery));

