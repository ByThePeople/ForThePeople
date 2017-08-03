/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
var app = app || {};

(function(module){
  const userAddress = {};
  const homeController = {};

  // Hide all sections. Then fadeIn home section.
  homeController.getHomeSection = () => {
    $('.page-element').hide();
    $('#home-section').fadeIn();
    $('#trending-section').fadeIn();
  };

  userAddress.submit = function() {
    $('#btn-submit-address').on('click', function(event){
      event.preventDefault();
      userAddress.address = $('input').val();

      app.reps.requestReps(app.contactInfoView.index);
    })
  }

  userAddress.submit();

  module.homeController = homeController;
  module.userAddress = userAddress;
})(app);
