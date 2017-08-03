/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const userIssues = {};

  userIssues.all = [];

  userIssues.insertIssues = function(userObject) {
    $.post('/issues', {issues: userObject.issues})
  }

  module.getIssues = function(callback) {
    $.get('/issues')
    .then(result => userIssues.all = result)
    .then(callback)
  }

  module.userIssues = userIssues;
})(app)
