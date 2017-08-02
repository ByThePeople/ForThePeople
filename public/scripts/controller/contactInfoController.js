/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

var app = app || {};

(function(module){

  const formAsLetter = {};

  function printSection(divName) {
    var printContents = $(divName).html();
    var w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
  }

  formAsLetter.submit = () => {
    $('#print').on('click', (event) => {
  console.log('just after click registered')
      event.preventDefault();
      printSection('#email-input');
    })
  }
  formAsLetter.submit();

  module.formAsLetter = formAsLetter;

})(app)
