# Transaction Account
A web application that enables a customer to authenticate, view their accounts with their corresponding transactions, and create a new pending account.

_Note:_ this is for coding test purposes only... all values are mocked.

## Quick Start

1. `yarn`: Install package dependencies
2. `yarn server`: Spin up the mock server to run the app independently with defined mock data at [port 5000](http://localhost:8080)
3. `yarn start`: Start the application at [port 3000](http://localhost:3000)


## Testing
* `yarn test`: Run unit tests
* `yarn test:coverage`: Run unit tests with a coverage report

### Valid credentials (with any password)
| Username |
|----------|
| marriec  |
| nikolat  |
| alberte  |
| thomase  |

### To test a 'bad request' scenario
* login with a username "badrequest"
* Click an account card that's still in pending status

## Future Enhancements:
* These are known limitations to the current application which can still be improved
- [ ] Increase unit testing coverage
- [ ] Mobile responsiveness
- [ ] PrivateRoute component to handle unauthorized redirects
- [ ] Add a theme for styled-components for to utilise style variable reuse

## Stack
* `redux:` Global app state management. This library is used as per the coding test's requirement but I will otherwise explore other library options.
* `redux-thunk:` Middleware for redux which comes as part of @reduxjs/toolkit
* `styled-components:` CSS in JS styling
* `json-server:` Easy API mock stubbing
* `jest and React testing library:` For unit and component testing
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
