/* jshint browser: true, devel: true, esversion: 6 */

var app = app || {};

(function(module){

     console.log('in contactInfoController');
 // Instantiate contactInfoController object
  let contactInfoController = {};
  const formAsLetter = {};

  // contactInfoController.init = () => {
  //   $('.page-element').hide();
  //   // $('#contact-info-section').show();
    // app.reps.requestReps(app.contactInfoView.index);
  // }

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

  // Attach contactInfoController to module
  module.contactInfoController = contactInfoController;
  module.formAsLetter = formAsLetter;

})(app)
