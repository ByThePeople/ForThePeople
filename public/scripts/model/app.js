/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
var app = app || {};

(function(module) {
  let reps = {};

  reps.all = [];

  reps.requestReps = function (callback) {
    $.ajax({
      url: `https://www.googleapis.com/civicinfo/v2/representatives?address=${app.userAddress.address}&includeOffices=true&levels=administrativeArea1&roles=headOfGovernment&fields=officials(address%2Cemails%2Cname%2Cphones%2CphotoUrl%2Curls)&key=AIzaSyBLrEwAa_izFBzfVNMZF7xgcAXk0V2484Q`,
      method: 'GET'
    })
    .then(function(data) {
      // Only one object in the array (governor), but we can expand to other reps later
      reps.all = data.officials;
      console.log(reps.all);
    })
    .then(callback);
  }


  module.reps = reps;
})(app);
