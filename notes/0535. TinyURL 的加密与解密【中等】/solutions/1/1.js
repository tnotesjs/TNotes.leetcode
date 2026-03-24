const map = new Map()
let id = 0

/**
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  id++
  const shortUrl = 'http://tinyurl.com/' + id
  map.set(shortUrl, longUrl)
  return shortUrl
}

/**
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return map.get(shortUrl)
}
