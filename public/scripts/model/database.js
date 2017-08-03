/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const userIssues = {};

//dont forget when this is called pass it an obj
  userIssues.insertIssues = function(userObject) {
    console.log(userObject);

    $.post('/issues', {
      issues: userObject.issues,
      userdate: userObject.userdate
    }).then(console.log('inside insertIssues'))
  }

  module.userIssues = userIssues;
})(app)
