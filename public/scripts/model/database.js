/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const userIssues = {};

  userIssues.all = [];

//dont forget when this is called pass it an obj
  userIssues.insertIssues = function(userObject) {
    $.post('/issues', {issues: userObject.issues})
  }

  userIssues.getIssues = function() {
    $.get('/issues')
    .then(result => userIssues.all.push(result))
  }

  userIssues.getIssues();
console.log(userIssues.all);
  module.userIssues = userIssues;
})(app)
