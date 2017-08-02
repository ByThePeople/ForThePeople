'use strict';

var app = app || {};

(function(module){
  const letterView = {};
  let renderLetterHeader = Handlebars.compile($('#print-header-template').text());
  let renderLetterBody = Handlebars.compile($('#print-body-template').text());

  letterView.index = () => {
    $('#print-letter-section div').empty();
    $('#print-letter-section').hide();

    let mappedHeader = app.reps.all.map(renderLetterHeader);
    // let mappedRepsBody = userInfoObject
    $('#print-header-div').append(mappedHeader);
  }

  module.letterView = letterView;
})(app)
