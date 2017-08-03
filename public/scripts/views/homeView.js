/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module) {

  const homeView = {};

  let renderTrendingIssues = Handlebars.compile($('#trending-issues-template').text());

  // trending issues to the DOM!
  homeView.index = () => {
    // Remove <li>'s to prepare for reloading them
    $('#trending-section').children('ul').empty();
    // Map issues
    let mappedIssues = app.userIssues.all.map(renderTrendingIssues);
    // Append issues to #trending-section
    $('#trending-section ul').append(mappedIssues);
  };

  homeView.index();
  // Attach homeView object to module. Module is the same as app.
  module.homeView = homeView;
})(app);
