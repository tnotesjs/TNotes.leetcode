/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  if (queryIP.includes('.')) {
    const parts = queryIP.split('.')
    if (parts.length !== 4) return 'Neither'
    for (const p of parts) {
      if (!p || p.length > 3 || (p.length > 1 && p[0] === '0')) return 'Neither'
      const num = Number(p)
      if (isNaN(num) || num < 0 || num > 255 || String(num) !== p)
        return 'Neither'
    }
    return 'IPv4'
  }
  if (queryIP.includes(':')) {
    const parts = queryIP.split(':')
    if (parts.length !== 8) return 'Neither'
    for (const p of parts) {
      if (!p || p.length > 4) return 'Neither'
      if (!/^[0-9a-fA-F]+$/.test(p)) return 'Neither'
    }
    return 'IPv6'
  }
  return 'Neither'
}
