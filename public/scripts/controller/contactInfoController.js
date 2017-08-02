/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

//IIFE
(function(module) {

  // Instantiate contactInfoController object
  let contactInfoController = {};

  // Hide home and about us sections. Then fadeIn contact info section.
  contactInfoController.getcontactInfoSection = () => {
    $('.page-element').hide();
    $('#contact-info-section').fadeIn();

    // A contactInfoView object is the callback so the view can render after data loads
    app.reps.requestReps(app.contactInfoView.index);
  };

  // Attach contactInfoController to module
  module.contactInfoController = contactInfoController;
})(app);
