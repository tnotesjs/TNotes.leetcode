var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject)
  }
  if (obj !== null && typeof obj === 'object') {
    const res = {}
    for (const key in obj) {
      const val = compactObject(obj[key])
      if (Boolean(val)) res[key] = val
    }
    return res
  }
  return obj
}
