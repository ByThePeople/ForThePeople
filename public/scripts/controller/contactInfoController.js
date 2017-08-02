/* jshint browser: true, devel: true, esversion: 6 */

var app = app || {};

(function(module){

  // Instantiate contactInfoController object
  const contactInfoController = {};
  const formAsLetter = {};

// Hide home and about us sections. Then fadeIn contact info section.
// contactInfoController.getContactInfoSection = () => {
// };



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
