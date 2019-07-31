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

#### Centralise country page
- Right now in the 'Choose Countries' page, the map is rendered on the right.
- Need to investigate and move it back to the center.

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

- Detect if a place is open NOW or not. (Might not need since its a trip planner?)
- Profile page for users to bookmark/save places of interest

## Code Structure

The source files are separated by function.
 - Components: The building blocks of the project. Each component is a feature. It can be small (avatar image, custom button) to large (google-maps package).
 - Pages: A page is made up of many components, such as a header, sidebar, and a map.
 - Redux: The main redux files for redux to work.
 - Utils: Global functions can go here (right now its only the global css).
 - Data - The needed external file data.
 
 ## Adding A Action/Reducer
 
 When you trigger an action, that action can manipulate the redux variables.
 You can then use the redux variables later on.
 
 1. Create a type in redux/types.js. This will identify the action you want to call.
 2. Create (Copy/paste) a function in your component's Action.js. Remember to import the type as well!
 3. Use dispatch to send the newly created/manipulated variables to the Reducer.
 4. In the component's Reducer.js, add a new case to receive the action. Remember to import the type as well!
 5. payload is the standard name, but you can also call it anything you want.
 
 If you make a new file, you will need to:
 1. Make a new Action.js in your component.
 2. Make a new Reducer.js in your component.
 3. Import the reducer into redux/index.js. (You can rename it to whatever you want here (eg attractionsMapReducer), since your reducer.jx only exports one thing).
