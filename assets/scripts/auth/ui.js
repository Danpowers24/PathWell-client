'use strict'

const store = require(('../store.js'))

$(function () {
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-day').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#show-days').addClass('hidden')
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

const showDaysSuccess = function (store) {
  $('#history-message').val('')
  // Clear the table before starting new one
  $('#tbody > tr').remove()
  // test that this fucntion has been run
  console.log('in ui.js: showDaysSuccess has been called and ran')
  console.log('data is ', store.days)
  // figure out how to display every day object (entry)
  $('#history-message').text('you have made ' + store.days.length + ' entries.')
  const tbody = document.getElementById('tbody')
  for (let i = 0; i < store.days.length + 1; i++) {
    let tr = '<tr>'
    if (i === 0) {
      tr += '<td>Date</td>' + '<td>Pain Level</td>' + '<td>Notes</td></tr>'
      tbody.innerHTML += tr
    }
    if (i > 0) {
      tr += '<td>' + store.days[i].date + '</td>' + '<td>' + store.days[i].pain_level + '</td>' + '<td>' + store.days[i].notes + '</td></tr>'
      tbody.innerHTML += tr
    }
  }
}

const showDaysFailure = function (error) {
  $('#message').text('Something went wrong when trying to see your history')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('showDaysFailure data is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

// remember what I am getting - an array
// .length
// when I am making the api call, always double check the documentation
// (READ) how many games won by a user.
// I want to start with showing how many games a user has played.
// in the showgame function, make an ajax request, index, give it the user id
// return store.games.length

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
  showDaysSuccess
  // updateGameSuccess,
  // updateGameFailure
}
