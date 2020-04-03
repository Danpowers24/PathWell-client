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
const onShowGames = function (event) {
  event.preventDefault()
  // console.log('Show games button has been clicked')
  api.showGame()
    .then(ui.showGamesSuccess)
    // .catch(ui.showGamesFailure)
}

let gameOver

// the API wanted the game object in this format
const gameObject = {
  "game": {
    "cell": {
      "index": playerTileChoice,
      "value": turn
    },
    "over": gameOver
  }
}

const onUpdateGame = function (gameObject) {
  event.preventDefault()
  // console.log('onUpdateGame called')
  api.updateGame()
  // if the call is successful,
    .then(ui.updateGameSuccess)
    // if not,
    .catch(ui.updateGameFailure)
}

const gameIsAlreadyOverMessage = function () {
  // console.log('Game over, press "New Game" button to start a new game!')
  $('#message').text(`Game over. Press "New Game" to start a new game.`)
}

let gameState = ['', '', '', '', '', '', '', '', '']
// check for wins, each winstate of 3-in-a-row translates to 8 different combinations of a certain 3 indices
const checkWin = function () {
  let gameOver = store.game.over
  if (gameState[0] !== '' && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
    $('#message').text('Player ' + gameState[0] + ' WINS')
    store.game.over = true
  } else if (gameState[3] !== '' && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
    $('#message').text(`Player ${gameState[3]} WINS`)
    store.game.over = true
  } else if (gameState[6] !== '' && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
    $('#message').text(`Player ${gameState[6]} WINS`)
    store.game.over = true
  } else if (gameState[0] !== '' && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    store.game.over = true
  } else if (gameState[1] !== '' && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
    $('#message').text(`Player ${gameState[1]} WINS`)
    store.game.over = true
  } else if (gameState[2] !== '' && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    store.game.over = true
  } else if (gameState[0] !== '' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
    $('#message').text(`Player ${gameState[0]} WINS`)
    store.game.over = true
  } else if (gameState[2] !== '' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
    $('#message').text(`Player ${gameState[2]} WINS`)
    store.game.over = true
    // else if every tile is not empty, and none of the win states are true, then it is a tie
  } else if (gameState[0] !== '' && gameState[1] !== '' && gameState[2] !== '' && gameState[3] !== '' && gameState[4] !== '' && gameState[5] !== '' && gameState[6] !== '' && gameState[7] !== '' && gameState[8] !== '') {
    // show message to the user that it is a tie
    $('#message').text('Game ends in a tie')
    store.game.over = true
  } else {
    // console.log('no winner yet, keep playing')
  }
}

const switchPlayerTurn = function (currentTurn) {
  if (currentTurn === 'x') {
    return 'o'
  } else if (currentTurn === 'o') {
    return 'x'
  }
}

let turn = 'x'
const playerTileChoice = null

const onMove = function (event) {
  // clear the user message
  $('#message').text('')
  // store the player's selected tile ID in playerTileChoice
  const playerTileChoice = event.target.id
  // assign boxContent the value of the clicked tile
  const boxContent = $(event.target).text()
  // if the game is over
  if (store.game.over === true) {
    gameIsAlreadyOverMessage()
  // If the space is already taken
  } else if (boxContent === 'x' || boxContent === 'o') {
    // give the user a warning that the space is already taken
    // make a function similar to spaceIsAlreadyTaken
    $('#message').text('Error, space already taken, try again')
  // if there is a free space...
  } else {
    // make the box the value of the turn
    $(event.target).text(turn)
    // fill the empty array with an x or o at the index that corresponds to the playerTileChoice
    store.game.cells[playerTileChoice] = turn
    // make gamestate array mirror store.game.cells
    gameState = store.game.cells
    // reassigning gameOver current winstate
    gameOver = store.game.over
    // check if this move created a winner
    checkWin()
    // make an API call to update the game board array, whose turn it is, and if the game has ended
    api.updateGame({
      'game': {
        'cell': {
          'index': playerTileChoice,
          'value': turn
        },
        'over': store.game.over
      }
    })
    // switch the player's turn
    turn = switchPlayerTurn(turn)
    return playerTileChoice
  }
}

const onNewDay = function (event) {
  // prevent the page from reloading after button gets clicked
  event.preventDefault()
  // clear the game board
  $('.box').text('')
  // clear the gameState array when the function is called (newGame button clicked)
  gameState = ['', '', '', '', '', '', '', '', '']
  // set the gameOver variable to false, indicating the game is not over
  gameOver = false
  // make sure 'Player X' always starts the game
  turn = 'x'
  // make sure the game board appears
  $('.game-board-container').removeClass('hidden')
  // clear the message
  $('#message').text('')
  // call the newGame function in api.js
  api.newDay()
  // if the call is successful,
    .then(ui.newGameSuccess)
    // if not,
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMove,
  onNewDay,
  gameState,
  playerTileChoice,
  onUpdateGame,
  onShowGames
}
