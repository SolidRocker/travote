View the web app here: https://solidrocker.github.io/travote/

## Project Overview

There are 3 screens so far:
1. Login page. Just click [Sign up] to go in.
2. Choose country. Doesn't work for now, will always go to Singapore. Need data from diff countries to continue this.
3. Choose places. I have 5 places for now. Click on them for the places' info.

## To Do

### hello


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
