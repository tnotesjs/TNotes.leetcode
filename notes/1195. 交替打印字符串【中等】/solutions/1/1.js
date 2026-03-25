// 并发问题 - JavaScript 单线程环境下的模拟实现
class FizzBuzz {
  constructor(n) {
    this.n = n
    this.current = 1
  }

  async fizz(printFizz) {
    while (this.current <= this.n) {
      if (
        this.current <= this.n &&
        this.current % 3 === 0 &&
        this.current % 5 !== 0
      ) {
        printFizz()
        this.current++
      }
      await new Promise((r) => setTimeout(r, 0))
    }
  }

  async buzz(printBuzz) {
    while (this.current <= this.n) {
      if (
        this.current <= this.n &&
        this.current % 5 === 0 &&
        this.current % 3 !== 0
      ) {
        printBuzz()
        this.current++
      }
      await new Promise((r) => setTimeout(r, 0))
    }
  }

  async fizzbuzz(printFizzBuzz) {
    while (this.current <= this.n) {
      if (this.current <= this.n && this.current % 15 === 0) {
        printFizzBuzz()
        this.current++
      }
      await new Promise((r) => setTimeout(r, 0))
    }
  }

  async number(printNumber) {
    while (this.current <= this.n) {
      if (
        this.current <= this.n &&
        this.current % 3 !== 0 &&
        this.current % 5 !== 0
      ) {
        printNumber(this.current)
        this.current++
      }
      await new Promise((r) => setTimeout(r, 0))
    }
  }
}
