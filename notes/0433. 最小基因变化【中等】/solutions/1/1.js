/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank)
  if (!bankSet.has(endGene)) return -1
  const queue = [[startGene, 0]]
  const visited = new Set([startGene])
  while (queue.length) {
    const [gene, step] = queue.shift()
    for (let i = 0; i < 8; i++) {
      for (const ch of 'ACGT') {
        const next = gene.slice(0, i) + ch + gene.slice(i + 1)
        if (next === endGene) return step + 1
        if (bankSet.has(next) && !visited.has(next)) {
          visited.add(next)
          queue.push([next, step + 1])
        }
      }
    }
  }
  return -1
}
