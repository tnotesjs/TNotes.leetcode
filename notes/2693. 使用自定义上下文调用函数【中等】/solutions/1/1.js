/**
 * @param {Object} context
 * @param {...any} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueKey = Symbol()
  context[uniqueKey] = this
  const result = context[uniqueKey](...args)
  delete context[uniqueKey]
  return result
}
