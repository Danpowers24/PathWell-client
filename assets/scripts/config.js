'use strict'

let apiUrl
const apiUrls = {
  // I will update this once my site is deployed on both ends
  production: 'https://apple-sundae-62931.herokuapp.com',
  development: 'http://localhost:4000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
