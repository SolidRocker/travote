[WORK IN PROGRESS]

View the web app here: https://solidrocker.github.io/travote/

## Project Overview

There are 3 screens so far:
1. Login page. Just click [Sign up] to go in.
2. Choose country. Doesn't work for now, will always go to Singapore. Need data from diff countries to continue this.
3. Choose places. I have 5 places for now. Click on them for the places' info.

## To Do

### Shi Kang

#### Given a country, add an API to populate the list of places there.
- Right now it is reading from a local file, we should be fetching it from server.
- Refer to attractionsMap/attractionsMapAction.js

#### Available countries should be read from the server.
- Refer to countriesMap/countriesMapAction.js
    
#### Voting
- In the info screen, users should be able to see the votes when they click on a place.
- Right now it's just some fake numbers.
- When user clicks on either upvote/downvote, the API should be fired.
- Refer to attractionsInfo/attractionsInfo.js, function [registerVote].

#### Login System
- Auth for users to sign up and login

### Yan Kit

#### Design screens
 - Just the attractions screen for now

#### Google Maps is scrollable
- The map should only take up the screen space, but the scrollbar appears (and shows white space).
- Need to remove the white space part, so that map renders on visible screen only (no scrollbar).

#### Back Button from Info page to Country Page
- Going back shows only a white screen, because it does not fire anything when it goes back to the previous screen.
- Need to research on how to force it to reload.

### Kam

- The CSS is in a mess because it involved a lot of copy/paste. Will clean it up.
- Zoom the map to a different place depending on country.
- Add filter to info results (food, attractions, hotels, etc)
- Phone view

### KIV List?

- Recommended Page: Users can see who has very similar places upvoted, or what the user likes based on upvote similarity
- Profile page for users to bookmark/save places of interest
- Detect if a place is open NOW or not. (Might not need since its a trip planner?)


