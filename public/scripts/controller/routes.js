/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

page('/aboutus', app.aboutController.getAboutSection);

page('/', app.homeController.getHomeSection);

page();
