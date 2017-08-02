/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  homeView.homeViewInit = () => {
       console.log('in homeViewInit');
    $('.page-element').hide();
    $('#home-section').fadeIn();
  };

  homeView.homeViewInit();

  // Attach homeView object to module. Module is the same as app.
  module.homeView = homeView;
})(app);
