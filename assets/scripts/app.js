'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.box').on('click', authEvents.onMove)
  $('#new-day').on('submit', authEvents.onNewDay)
  $('#update-game').on('click', authEvents.onUpdateGame)
  $('#show-days').on('submit', authEvents.onShowDays)
  // $('.content').on('submit', '#hide-days', authEvents.onHideDays)
  // $('.content').on('submit', '.show-all', authEvents.onShowDays)
  $('#find-day').on('submit', authEvents.onFindDay)
  $('#delete-day').on('submit', authEvents.onDeleteDay)
  $('.content').on('submit', '.update-day', authEvents.onUpdateDay)
})
