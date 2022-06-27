# Introduction
This project was created using Express server for backend and Create React App (create-react-app) library for frontend. 

## Run
To run this project in your device, simply clone the project using either https or ssh. Then run `npm install` to download the backend dependencies in your root folder (node_modules will be created and install backend requirements). Inside the client folder, first run `npm install` (for the react-app dependencies) then run `npm run build` so that it creates a build folder which can be referenced through the backend server. Once done, run `npm start` - this will run the project in https://localhost:8080. 

# Process
## Server Side
1. The start process will fetch the server.js from root and will execute the production build that is generated inside the client folder.
2. Routes.js maps the generic endpoint to corresponding controller function
3. Controller.js fetches the name of the organization and the specific endpoint (optional) from the request body and fetches the endpoint using axios. The response is then send to the calling request function. 
4. middleware.js is for setting some headers on the response object 

## Client Side
1. The start process will run index.js in the root of the folder structure
2. It will then load the App component from App.js, it is the base of our application
3. App.js in return call two main components of our application - the navbar and the page display
    i. Navbar has all the navigation details. React-router-dom library is used to route through different pages in the application
    ii. The display section dependes on the routes chosen and will render different components as per the selected Links
4. The different display components are: Homepage, Repositories, Events, Members, Hooks and Issues
    i. Homepage: Pulls and displays organizational information from the provided base url api endpoint
    ii. Repositories: Fetches the endpoint for `${baseUrl}\repos` from the initial response and pulls and displays information related to all the git repositories for this organization, if exists
    iii. Events: Fetches the endpoint for `${baseUrl}\events` from the initial response and pulls and displays information related to all the git events for this organization, if exists
    iv. Members: Fetches the endpoint for `${baseUrl}\members` from the initial response and pulls and displays information related to all the git members for this origanization, if exists
    v. Hooks: Fetches the endpoint for `${baseUrl}\hooks` from the initial response and pulls and displays information related to all the git hooks for this organization, if exists
    vi. Issues: Fetches the endpoint for `${baseUrl}\issues` from the initial response and pulls and displays information related to all the git issues for this organization, if exists
5. The API calls are handled in a separate folder called ApiHandler where there's a script - useApiData - that exports custom hooks created for extracting the API info through http requests. This is done for separating the application from the API, so that if in future we want to change/update the API it should affect the basic app functionality and the changes can only be made on this folder/files.
6. For error and exception handling, there is a try-catch block that catches and logs if there are any error/unexpected responses. The application will display response if status is 200, redirect to 404 page if the page is not found and load ApiError component for any other error response from the server. We will be expecting a 500 incase our server encounters problem fetching from the original api. The Api Error page will have some details related to response statusText as well as the statusCode which can help us to identify the issue if something went wrong. The error will also be logging on the terminal where the project is running.
7. Sass is used for styling and are compiled as css. I have used react-bootstrap library for simplicity and responsive design. 
