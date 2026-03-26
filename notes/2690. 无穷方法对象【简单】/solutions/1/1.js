/**
 * @return {Object}
 */
var createInfiniteObject = function () {
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (typeof prop === 'string') return () => prop
      },
    },
  )
}
