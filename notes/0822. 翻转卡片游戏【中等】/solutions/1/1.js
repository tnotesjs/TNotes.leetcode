/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const bad = new Set()
  for (let i = 0; i < fronts.length; i++)
    if (fronts[i] === backs[i]) bad.add(fronts[i])
  let res = Infinity
  for (const x of fronts) if (!bad.has(x)) res = Math.min(res, x)
  for (const x of backs) if (!bad.has(x)) res = Math.min(res, x)
  return res === Infinity ? 0 : res
}
