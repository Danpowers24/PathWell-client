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
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showDays()
    .then(ui.showDaysSuccess)
    .catch(ui.showDaysFailure)
}

const onFindDay = function (event) {
  event.preventDefault()
  // console.log('In events.js: onFindDay function has been called and ran')
  const userInput = getFormFields(event.target)
  console.log('in events.js, this is the data: ', userInput)
  api.findDay(userInput)
    .then(ui.findDaySuccess)
    .catch(ui.findDayFailure)
}

// updateDay function ...
const onUpdateDay = function (event) {
  event.preventDefault()
  // const data = store.day
  const data = getFormFields(event.target)
  // console.log(data)
  api.updateDay(data)
    .then(function () {
      onShowDays(event)
    },
    ui.updateDaySuccess)
    .catch(ui.updateDayFailure)
}

// const onHideDays = function (event) {
//   event.preventDefault()
//   $('.content').addClass('hidden')
// }

// delete, take the id and then just delete it
const onDeleteDay = function (event) {
  event.preventDefault()
  // get user input
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteDay(data)
  // if the call is successful,
    .then(ui.deleteDaySuccess)
    // if not,
    .catch(ui.deleteDayFailure)
}

const onNewDay = function (event) {
  // prevent the page from reloading after button gets clicked
  event.preventDefault()
  // get user input
  const data = getFormFields(event.target)
  // call the newDay function in api.js
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
  onFindDay,
  onUpdateDay,
  onDeleteDay
  // onHideDays
}
