'use strict'

let apiUrl
const apiUrls = {
  // I will update this once my site is deployed on both ends
  production: 'https://tic-tac-toe-wdi-production.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
