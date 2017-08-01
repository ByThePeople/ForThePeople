/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const userAddress = {};

  userAddress.submit = function() {
    console.log('inside userAddres.submit');
    $('#firstForm').on('click', function(event){
      event.preventDefault();

      console.log(event.target.val);
      var address = $('input').val();
      console.log(`${address} inside on click`);
    })

  }


  userAddress.submit();
  module.userAddress = userAddress;
})(app);
