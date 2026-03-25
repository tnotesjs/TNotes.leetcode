// JavaScript 无原生线程支持，使用 Promise 模拟
class H2O {
  constructor() {
    this.hCount = 0
    this.oCount = 0
    this.resolve = null
    this.promise = new Promise((r) => (this.resolve = r))
  }

  async hydrogen(releaseHydrogen) {
    while (this.hCount >= 2) await this.promise
    this.hCount++
    releaseHydrogen()
    if (this.hCount === 2 && this.oCount === 1) {
      this.hCount = 0
      this.oCount = 0
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }

  async oxygen(releaseOxygen) {
    while (this.oCount >= 1) await this.promise
    this.oCount++
    releaseOxygen()
    if (this.hCount === 2 && this.oCount === 1) {
      this.hCount = 0
      this.oCount = 0
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }
}
