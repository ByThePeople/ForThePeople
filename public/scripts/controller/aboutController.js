/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

//IIFE
(function(module) {

  // Instantiate aboutController object
  const aboutController = {};

  // Hide all sections. Then fadeIn about section.
  aboutController.getAboutSection = () => {
    $('.page-element').hide();
    $('#about-section').fadeIn();
  };

  // Attach aboutController to module
  module.aboutController = aboutController;
})(app);
