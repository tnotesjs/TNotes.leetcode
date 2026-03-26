/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
  let cancelled = false

  const cancel = () => {
    cancelled = true
  }

  const promise = new Promise((resolve, reject) => {
    const step = (nextFunc) => {
      let result
      try {
        result = nextFunc()
      } catch (e) {
        return reject(e)
      }
      if (result.done) return resolve(result.value)

      Promise.resolve(result.value).then(
        (val) => {
          if (cancelled) {
            step(() => generator.throw('Cancelled'))
          } else {
            step(() => generator.next(val))
          }
        },
        (err) => {
          step(() => generator.throw(err))
        },
      )
    }
    step(() => generator.next())
  })

  return [cancel, promise]
}
