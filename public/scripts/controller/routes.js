/* jshint browser: true, devel: true, esversion: 6 */

'use strict';
var app = app || {}; // not sure this line is necessary

// TODO: Home route should be added, but homeController.index needs to be written
//page('/', app.homeController.index);
// TODO: About Us route should be added, but aboutController.index needs to be written
// About us route
//page('/aboutus', app.aboutController.index);

page('/contactinfo', app.contactInfoController.index);

// Call page()
page();
