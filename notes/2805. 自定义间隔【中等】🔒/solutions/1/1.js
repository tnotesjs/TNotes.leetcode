const timers = new Map()

/**
 * @param {Function} fn
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */
function customInterval(fn, delay, period) {
  const id = (customInterval._id = (customInterval._id || 0) + 1)
  let count = 0
  function run() {
    if (!timers.has(id)) return
    fn()
    count++
    timers.set(id, setTimeout(run, delay + period * count))
  }
  timers.set(id, setTimeout(run, delay))
  return id
}

/**
 * @param {number} id
 * @return {void}
 */
function customClearInterval(id) {
  clearTimeout(timers.get(id))
  timers.delete(id)
}
