'use strict'

const config = require('../config.js')
const store = require('../store.js')
// wait why do I require events here?
const events = require('./events.js')

const signUp = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  // make an AJAX call and return the object that the api sends back
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// I want this to populate the screen with form fields to fill out date, pain_level, and
const newDay = function (data) {
  console.log('In api.js: newDay function has been called and ran')
  return $.ajax({
    url: config.apiUrl + '/days',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// I should export a lot of this stuff to store.js and then import it here
const updateGame = function (data) {
  // AJAX call
  return $.ajax({
    // I need to update the url with the correct url
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// this will be show all entries/history
const showDays = function (data) {
  console.log('in api.js: showDays function has been called')
  return $.ajax({
    url: config.apiUrl + '/days',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const findDay = function (data) {
  console.log('in api.js: findDay function has been called, this is the data that it is getting passed: ', data)
  return $.ajax({
    url: config.apiUrl + '/days/' + data.day.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateDay = function (data) {
  // those two lines
  console.log('in api.js: updateDay function has been called, this is the data that it is getting passed: ', data)
  return $.ajax({
    url: config.apiUrl + '/days/' + data.day.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  updateGame,
  newDay,
  showDays,
  findDay,
  updateDay
}
