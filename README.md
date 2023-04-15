# Quiziosity

This is functional quiz app that I've been currently working on where the user can take a quiz on a certain topic and see how much they scored. The questions, their options and answers are being stored on MongoDB cloud whereas the questions for a specific category are initialised through a custom component to the redux store so that we can obtain any information about any question within any component. 

Current Progress:
- Initialised Frontend
- Routing configured
- Components setup
- Redux configured and setup with regard to project
- Custom hook defined (useFetchQuestions) to initialize questions in the DB to redux store
- Added functionality to change previous input by the user 
- Mapped user inputs in a results array 
- Configured user result on the basis of their inputs by comparing the results array with answers array
- Initialised Backend
- Added routes, controllers and models for questions and result
- Set-up CRUD operations for both questions and result
- Fetched questions from backend
- Saved result to backend
- Added styling to all components

To run the app locally:

Clone the repo:

### `git clone https://github.com/mihir224/quiz-app`

Create a .env file inside the server folder to store your mongoDB credentials

Then, in the client folder and server folder, run:

### `npm start`

Be sure to make a post request to http://localhost:8000/api/questions/add with your customised questions using any API tools like Postman, etc. to initialise the questions to the DB.


