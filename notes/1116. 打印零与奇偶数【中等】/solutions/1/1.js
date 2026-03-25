// JavaScript 无原生线程支持，使用 Promise 模拟
class ZeroEvenOdd {
  constructor(n) {
    this.n = n
    this.state = 0 // 0: print zero, 1: print odd, 2: print even
    this.resolve = null
    this.promise = new Promise((r) => (this.resolve = r))
  }

  async zero(printNumber) {
    for (let i = 1; i <= this.n; i++) {
      while (this.state !== 0) await this.promise
      printNumber(0)
      this.state = i % 2 === 1 ? 1 : 2
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }

  async odd(printNumber) {
    for (let i = 1; i <= this.n; i += 2) {
      while (this.state !== 1) await this.promise
      printNumber(i)
      this.state = 0
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }

  async even(printNumber) {
    for (let i = 2; i <= this.n; i += 2) {
      while (this.state !== 2) await this.promise
      printNumber(i)
      this.state = 0
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }
}
