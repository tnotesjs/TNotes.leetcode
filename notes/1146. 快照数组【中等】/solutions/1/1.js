class SnapshotArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    this.snapId = 0
    this.data = Array.from({ length }, () => [[0, 0]])
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  set(index, val) {
    const arr = this.data[index]
    if (arr[arr.length - 1][0] === this.snapId) {
      arr[arr.length - 1][1] = val
    } else {
      arr.push([this.snapId, val])
    }
  }

  /**
   * @return {number}
   */
  snap() {
    return this.snapId++
  }

  /**
   * @param {number} index
   * @param {number} snap_id
   * @return {number}
   */
  get(index, snap_id) {
    const arr = this.data[index]
    let lo = 0,
      hi = arr.length - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (arr[mid][0] <= snap_id) lo = mid
      else hi = mid - 1
    }
    return arr[lo][1]
  }
}
