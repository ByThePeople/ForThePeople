/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
var app = app || {};

(function(module){
  const userAddress = {};

  userAddress.submit = function() {
    $('#btn-submit-address').on('click', function(event){
      event.preventDefault();
      userAddress.address = $('input').val();
      app.reps.requestReps(app.contactInfoView.index);
    })
  }

  userAddress.submit();
  module.userAddress = userAddress;
})(app);
