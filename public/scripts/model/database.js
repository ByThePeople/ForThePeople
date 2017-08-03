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

  module.getIssues = function(callback) {
    $.get('/issues')
    .then(result => userIssues.all = result)
    //.then(_ => module.userIssues = userIssues)
    .then(callback)
  }

console.log(userIssues.all);
  module.userIssues = userIssues;
})(app)
