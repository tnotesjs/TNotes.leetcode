/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  if (s.includes('@')) {
    s = s.toLowerCase()
    const [name, domain] = s.split('@')
    return name[0] + '*****' + name[name.length - 1] + '@' + domain
  }
  const digits = s.replace(/\D/g, '')
  const local = '***-***-' + digits.slice(-4)
  if (digits.length === 10) return local
  return '+' + '*'.repeat(digits.length - 10) + '-' + local
}
