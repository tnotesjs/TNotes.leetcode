/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0,
    cows = 0
  const count = new Array(10).fill(0)
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++
    } else {
      if (count[secret[i]]++ < 0) cows++
      if (count[guess[i]]-- > 0) cows++
    }
  }
  return `${bulls}A${cows}B`
}
