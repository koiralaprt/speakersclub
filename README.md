Use node16


data.json file contains the information for this small application.

For word of the day, you can edit the day->word and meaning keys 

For hosts for the current day, edit the hosts property with updating the role and name.

questionTimeInMinutes -> set the timer for the table topic total time in minutes

hintShowInMinutes -> time it takes to show the hint after the start button is clicked in minutes

questions contains title and hints, title being the question as string, hints being array of strings for the hints.



Please adjust the UI to your resolution or update the css as required :D 

PS. all the buttons for topic selection is disabled when you click one. if timer ends/force quit button is clicked, then only other options are available.

For the day, localstorage saves the data of used questions. if testing locally to see your changes without the hassle, just hit localStorage.clear() on the console and reload again to see the changes.

New screens can be added in pages/ directory, and also update the map ie `pagemap` property. as well as any changes thats required

