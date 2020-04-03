'use strict'

let apiUrl
const apiUrls = {
  // I will update this once my site is deployed on both ends
  production: '<replace-with-herokuURL>',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
