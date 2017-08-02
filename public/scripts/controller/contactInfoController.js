/* jshint browser: true, devel: true, esversion: 6 */

var app = app || {};

(function(module){

  const formAsLetter = {};

  // From app.js, when submit email button, store form data
  app.emailForm.getFormData();

  function printSection(divName) {
    var printContents = $(divName).html();
    var w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
  }

  formAsLetter.submit = () => {
    $('#print').on('click', (event) => {
      event.preventDefault();
      app.letterView.index();
      printSection('#print-letter-section');
    })
  }
  formAsLetter.submit();

  module.formAsLetter = formAsLetter;

})(app)
