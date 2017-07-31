# Technical Requirements

One HTML page: index.HTML

3 Views:
* home (/)
* aboutus (/aboutus)
* reps (/reps)

Home view includes a form with a textbox input to entering voter's address and a submit button. Includes hamburger nav that pops up link to '/aboutus' view. Turns into static nav bar when screen size larger than 640.

AboutUs view shows nav also and our team's members names, bios, and photos.

Reps view shows nav, the two US Senators and their contact info retrieved. User can choose to immediately contact senators with an issue using the provided form. Form includes the following fields with a submit button:
* To (populated by checking senator(s) you want to contact)
* From (populated by user)
* Subject (populated by user)
* Body (populated by user)
Submit button sends to senators' email addresses.

Model includes 2 databases:
* Google Civic API (https://developers.google.com/civic-information/) which gets us an object of the elected representatives.
* Postgres database that stores a table of those representatives for persistence and delivery to form
