/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const userIssues = {};

//dont forget when this is called pass it an obj
  userIssues.insertIssues = function(userObject) {
    $.post('/issues', {issues: userObject.issues})
  }

  module.userIssues = userIssues;
})(app)
