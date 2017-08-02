/* jshint browser: true, devel: true, esversion: 6 */

var app = app || {};

(function(module){
 // ======================================================= 
     console.log('in contactInfoController');
 // Instantiate contactInfoController object
  let contactInfoController = {};

  // Hide home and about us sections. Then fadeIn contact info section.
  contactInfoController.getContactInfoSection = () => {
  console.log('in getContactInfoSection');
    $('.page-element').hide();
    $('#contact-info-section').fadeIn();
  };

  // Attach contactInfoController to module
  module.contactInfoController = contactInfoController; 
// ========================================================
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
