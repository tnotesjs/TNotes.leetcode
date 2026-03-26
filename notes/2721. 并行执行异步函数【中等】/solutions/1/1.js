var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length)
    let count = 0
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((val) => {
          results[i] = val
          count++
          if (count === functions.length) resolve(results)
        })
        .catch(reject)
    }
  })
}
