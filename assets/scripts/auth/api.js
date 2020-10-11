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
  console.log('In api.js data is ', data)
  return $.ajax({
    url: config.apiUrl + '/entries/' + data.day.date,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// this will be show all entries/history
const showDays = function (data) {
  // return $.ajax({
  //   url: config.apiUrl + '/days',
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Token token=' + store.user.token
  //   },
  //   data
  // })
  console.log('in api.js: showDays function has been called, data is ', data)
}

const findDay = function (userInput) {
  console.log(userInput)
  return $.ajax({
    url: config.apiUrl + '/entries/' + userInput.day.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: userInput
  })
}

const deleteDay = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/days/' + data.day.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateDay = function (data) {
  // those two lines
  // console.log('in api.js: updateDay function has been called, this is the data that it is getting passed: ', data)
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
  newDay,
  showDays,
  findDay,
  updateDay,
  deleteDay
}
