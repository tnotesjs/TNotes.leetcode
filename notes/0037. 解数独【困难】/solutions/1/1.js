/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const FULL_MASK = (1 << 9) - 1
  const rows = new Array(9).fill(0)
  const cols = new Array(9).fill(0)
  const boxes = new Array(9).fill(0)
  const emptyRows = []
  const emptyCols = []

  const getBoxIndex = (row, col) =>
    Math.floor(row / 3) * 3 + Math.floor(col / 3)

  const countBits = (mask) => {
    let count = 0
    while (mask !== 0) {
      mask &= mask - 1
      count++
    }
    return count
  }

  const getDigitChar = (bit) => String(31 - Math.clz32(bit) + 1)

  const swapPositions = (i, j) => {
    ;[emptyRows[i], emptyRows[j]] = [emptyRows[j], emptyRows[i]]
    ;[emptyCols[i], emptyCols[j]] = [emptyCols[j], emptyCols[i]]
  }

  // rows / cols / boxes 用位掩码记录 1~9 的占用情况。
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') {
        emptyRows.push(row)
        emptyCols.push(col)
        continue
      }

      const bit = 1 << (board[row][col].charCodeAt(0) - 49)
      const box = getBoxIndex(row, col)
      rows[row] |= bit
      cols[col] |= bit
      boxes[box] |= bit
    }
  }

  const dfs = (pos) => {
    if (pos === emptyRows.length) return true

    let best = pos
    let minCount = 10

    // 优先处理候选数字最少的空格，尽早剪枝。
    for (let i = pos; i < emptyRows.length; i++) {
      const row = emptyRows[i]
      const col = emptyCols[i]
      const box = getBoxIndex(row, col)
      const available = FULL_MASK & ~(rows[row] | cols[col] | boxes[box])
      const candidateCount = countBits(available)

      if (candidateCount === 0) return false
      if (candidateCount < minCount) {
        minCount = candidateCount
        best = i
        if (candidateCount === 1) break
      }
    }

    swapPositions(pos, best)

    const row = emptyRows[pos]
    const col = emptyCols[pos]
    const box = getBoxIndex(row, col)
    let available = FULL_MASK & ~(rows[row] | cols[col] | boxes[box])

    // 每次取最低位的 1，表示尝试一个可填数字。
    while (available !== 0) {
      const bit = available & -available
      available ^= bit

      board[row][col] = getDigitChar(bit)
      rows[row] |= bit
      cols[col] |= bit
      boxes[box] |= bit

      if (dfs(pos + 1)) return true

      console.log(1)
      rows[row] ^= bit
      cols[col] ^= bit
      boxes[box] ^= bit
      board[row][col] = '.'
    }

    swapPositions(pos, best)
    return false
  }

  dfs(0)
}
