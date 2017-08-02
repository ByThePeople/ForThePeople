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
  console.log('after mappedReps');
    // Append reps
    $('#contact-info-section ul').append(mappedReps);
  };
  // gives us app.contactInfoView
  module.contactInfoView = contactInfoView;
})(app);
