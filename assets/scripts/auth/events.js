'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  // store user input from form fields
  const data = getFormFields(event.target)
  // send this input to the form fields to signIn function in api.js
  api.signUp(data)
  // if the call is successful, then run the signUpSuccess function
    .then(ui.signUpSuccess)
    // if unsuccessful, then run the signUpFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // store user input from form fields
  const data = getFormFields(event.target)
  // send this input to the form fields to signIn function in api.js
  api.signIn(data)
  // if the call is successful, then run the signInSuccess function
    .then(ui.signInSuccess)
    // if unsuccessful, then run the signInFailure function
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // store user input from form fields
  const data = getFormFields(event.target)
  // send this input to the form fields to signIn function in api.js
  api.changePassword(data)
  // if the call is successful, then run the signInSuccess function
    .then(ui.changePasswordSuccess)
    // if unsuccessful, then run the signInFailure function
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // send this input from the 'Sign Out' button (click) to signOut function in api.js
  api.signOut()
  // if the call is successful,
    .then(ui.signOutSuccess)
    // if not,
    .catch(ui.signOutFailure)
}

// go through and look for player id and show games played
const onShowDays = function (event) {
  event.preventDefault()
  console.log('In events.js: onShowDays function has been called and ran')
  api.showDays()
    .then(ui.showDaysSuccess)
    .catch(ui.showDaysFailure)
}

const onFindDay = function (event) {
  event.preventDefault()
  console.log('In events.js: onFindDay function has been called and ran')
  const data = getFormFields(event.target)
  console.log('in events.js, this is the data: ', data)
  api.findDay(data)
    .then(ui.findDaySuccess)
    .catch(ui.findDayFailure)
}

// the API wanted the game object in this format
// const gameObject = {
//   "game": {
//     "cell": {
//       "index": playerTileChoice,
//       "value": turn
//     },
//     "over": gameOver
//   }
// }

// this could be a useful template when I want to POST a day
// const onUpdateGame = function (gameObject) {
//   event.preventDefault()
//   // console.log('onUpdateGame called')
//   api.updateGame()
//   // if the call is successful,
//     .then(ui.updateGameSuccess)
//     // if not,
//     .catch(ui.updateGameFailure)
// }

const onNewDay = function (event) {
  // prevent the page from reloading after button gets clicked
  event.preventDefault()
  // clear the game board
  $('#message').text('')
  // get user input
  const data = getFormFields(event.target)
  // call the newGame function in api.js
  api.newDay(data)
  // if the call is successful,
    .then(ui.newDaySuccess)
    // if not,
    .catch(ui.newDayFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewDay,
  onShowDays,
  onFindDay
}
