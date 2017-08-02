/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
   console.log('in contactInfoController');
var app = app || {};

//IIFE
(function(module) {

  // Instantiate contactInfoController object
  let contactInfoController = {};

  // Hide home and about us sections. Then fadeIn contact info section.
  contactInfoController.getContactInfoSection = () => {
  console.log('in getContactInfoSection');
    $('.page-element').hide();
    $('#contact-info-section').fadeIn();
  };

  // Attach contactInfoController to module
  module.contactInfoController = contactInfoController;
})(app);
