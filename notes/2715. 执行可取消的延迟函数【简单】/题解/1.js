var cancellable = function (fn, args, t) {
  const timer = setTimeout(_ => fn(...args), t)
  return _ => clearInterval(timer)
}