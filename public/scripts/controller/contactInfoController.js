/* jshint browser: true, devel: true, esversion: 6 */

var app = app || {};

(function(module){

  // Instantiate contactInfoController object
  const contactInfoController = {};
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
      event.preventDefault();
      printSection('#email-input');
    })
  }
  formAsLetter.submit();

  // Attach contactInfoController to module
  module.contactInfoController = contactInfoController;
  module.formAsLetter = formAsLetter;

})(app)
