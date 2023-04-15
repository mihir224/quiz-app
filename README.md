# quiz - app

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
- Done


