'use strict'

const store = require('../store.js')
const showDaysTemplate = require('../templates/show-history.handlebars')

$(function () {
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-day').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#show-days').addClass('hidden')
  $('#find-day').addClass('hidden')
})

const signUpSuccess = function (data) {
  $('#message').text('You have successfully signed up!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

// do I need to pass error here?
const signUpFailure = function (error) {
  $('#message').text('Something went wrong when signing up, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#message').text('You are now signed in. Welcome!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#new-day').removeClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#show-days').removeClass('hidden')
  $('#find-day').removeClass('hidden')
}

// do I need to pass error here?
const signInFailure = function (error) {
  $('#message').text('Hm, we had trouble finding that email/password combo. Please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('changePasswordSuccess data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

// do I need to pass error here?
const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('You have successfully signed out. Have a great day!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess data is: ', data)
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#history-message').addClass('hidden')
  $('#show-days').addClass('hidden')
  $('#tbody').addClass('hidden')
  $('#new-day').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutFailure = function (error) {
  $('#message').text('You are not signed out yet! Something went wrong.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure data is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const newDaySuccess = function (data) {
  $('#message').text('Thanks for your entry! You are on your way to feeling better.')
  console.log('newDaySuccess was called and ran')
  $('form input[type="text"]').val('')
  $('form input[type="integer"]').val('')
  // console.log(api.newDay.data)
  // if the table is on the page, then update it and the history message with the new entry
}

const newDayFailure = function (error) {
  console.log('newDayFailure was called and ran, this is the error: ', error)
}

// const hideDaySuccess = function () {
//   $('.content').addClass('hidden')
// }

const showDaysSuccess = function (data) {
  $('#history-message').val('')
  // Clear the table before starting new one
  $('#tbody > tr').remove()
  // test that this fucntion has been run
  console.log('in ui.js: showDaysSuccess has been called and ran')
  // console.log('data is ', store.days)
  // figure out how to display every day object (entry)
  // $('#history-message').text('you have made ' + store.days.length + ' entries.')
  // this should get refactored out and put in events.js
  // const tbody = document.getElementById('tbody')
  // for (let i = 0; i < store.days.length + 1; i++) {
  //   let tr = '<tr>'
  //   if (i === 0) {
  //     tr += '<td>ID</td>' + '<td>Date</td>' + '<td>Pain Level</td>' + '<td>Notes</td></tr>'
  //     tbody.innerHTML += tr
  //   }
  //   if (i > 0) {
  //     tr += '<td>' + store.days[i].id + '</td>' + '<td>' + store.days[i].date + '</td>' + '<td>' + store.days[i].pain_level + '</td>' + '<td>' + store.days[i].notes + '</td></tr>'
  //     tbody.innerHTML += tr
  // }
  // }
  const showDaysHtml = showDaysTemplate({ days: data.days })
  // console.log(showDaysHtml)
  $('.content').html(showDaysHtml)
}

// need edit and delete functions. They should be happening in events.js

// update
const updateDaySuccess = function () {
// add showDaysSuccess so that it refreshes in real time
}

const showDaysFailure = function (error) {
  $('#message').text('Something went wrong when trying to see your history')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('showDaysFailure data is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

// pass something in to this?
const findDaySuccess = function (returnData) {
  console.log('findDaySuccess has been called ')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  console.log('in findDaySuccess, returnData is: ')
  console.log('On ' + returnData.day.date + ', you had a pain level of ' + returnData.day.pain_level + ' and you wrote the following note: ' + returnData.day.notes)
  $('#find-message').text('On ' + returnData.day.date + ', you had a pain level of ' + returnData.day.pain_level + ' and you wrote the following note: ' + returnData.day.notes)
}

const findDayFailure = function () {
  console.log('findDayFailure has been called')
  $('#message').text('Something went wrong when trying to find that entry.')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newDaySuccess,
  newDayFailure,
  showDaysFailure,
  showDaysSuccess,
  findDaySuccess,
  findDayFailure
  // hideDaySuccess
}
