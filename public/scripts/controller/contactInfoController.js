/* jshint browser: true, devel: true, esversion: 6 */

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
      let userObject = {
        issues: $('#subject').val(),
        username: $('#from').val(),
        body: $('#mail-body').val(),
        userdate: new Date().toISOString()
      };
      // this next bit takes the issues and puts them in the database
      app.userIssues.insertIssues(userObject);
      // and this bit sends them to the print function
      module.letterFormContent = userObject;
      app.letterView.index();
      printSection('#print-letter-section');
    })
  }
  formAsLetter.submit();

  module.formAsLetter = formAsLetter;

})(app)
