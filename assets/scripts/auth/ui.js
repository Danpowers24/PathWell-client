'use strict'

const store = require(('../store.js'))

$(function () {
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-day').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#show-games').addClass('hidden')
})

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signUpSuccess data is: ', data)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signUpFailure = function (error) {
  $('#message').text('Something went wrong when signing up, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signUpFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#message').text('You are now signed in. Welcome!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#new-day').removeClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  $('#show-games').removeClass('hidden')
}

// store.game = data.game

const signInFailure = function (error) {
  $('#message').text('Invalid credentials, please try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signInFailure error is: ', error)
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

const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('changePasswordFailure error is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('You have successfully signed out. Thanks for playing!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess data is: ', data)
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.game-board-container').addClass('hidden')
  $('#new-day').addClass('hidden')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signOutFailure = function (error) {
  $('#message').text('You are not signed out yet! Something went wrong.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('signOutFailure data is: ', error)
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}


const newDaySuccess = function (data) {
  $('#message').text('Thanks for your entry! You are on your way to feeling better.')
  console.log('newDaySuccess was called and ran')
  // console.log(api.newDay.data)
  // console.log('newDaySuccess says that there have been ', store.game.id, ' total new games started. ')
}

const newDayFailure = function (error) {
  console.log('newDayFailure was called and ran, this is the error: ', error)
}

const showGamesSuccess = function (store) {
  // $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('showGamesSuccess: This is the id and email of the user currently logged in nothing ')
  // console.log(store.games)
  $('#message').text('You have started ' + store.games.length + ' total games.')
}

const showGamesFailure = function (error) {
  $('#message').text('Something went wrong when trying to see how many games you have played')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('showGamesFailure data is: ', error)
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
  showGamesFailure,
  showGamesSuccess
  // updateGameSuccess,
  // updateGameFailure
}
