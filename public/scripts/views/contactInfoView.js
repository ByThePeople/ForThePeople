/* jshint browser: true, devel: true, esversion: 6 */
'use strict';

var app = app || {};

(function(module) {
  // an object to hold our functions
  let contactInfoView = {};
  // Handlebars generates the contact info
  let renderContactInfo = Handlebars.compile($('#contact-info-template').text());

  // Contact info to the DOM!
  contactInfoView.index = () => {
    // Removes <li>'s to prepare for reloading them
    $('#contact-info-section').children('ul').empty();
    // Map reps
    let mappedReps = app.reps.all.map(renderContactInfo);
    // Append reps to #contact-info-section
    $('#contact-info-section ul').append(mappedReps);
    // Place governor's email in contact form because we return only governor for now.
    // $('#to').val(app.reps.all[0].emails);

    $('.page-element').hide();
    $('#contact-info-section').fadeIn();
  };
  // gives us app.contactInfoView
  module.contactInfoView = contactInfoView;
})(app);
