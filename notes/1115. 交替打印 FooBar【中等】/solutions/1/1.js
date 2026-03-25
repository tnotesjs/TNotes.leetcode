// JavaScript 无原生线程支持，使用 Promise 模拟
class FooBar {
  constructor(n) {
    this.n = n
    this.fooTurn = true
    this.resolve = null
    this.promise = new Promise((r) => (this.resolve = r))
  }

  async foo(printFoo) {
    for (let i = 0; i < this.n; i++) {
      while (!this.fooTurn) await this.promise
      printFoo()
      this.fooTurn = false
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }

  async bar(printBar) {
    for (let i = 0; i < this.n; i++) {
      while (this.fooTurn) await this.promise
      printBar()
      this.fooTurn = true
      const old = this.resolve
      this.promise = new Promise((r) => (this.resolve = r))
      old()
    }
  }
}
