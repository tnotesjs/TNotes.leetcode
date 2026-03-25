// 并发问题 - JavaScript 单线程环境下的模拟实现
class DiningPhilosophers {
  constructor() {
    this.forks = [false, false, false, false, false]
  }

  async wantsToEat(
    philosopher,
    pickLeftFork,
    pickRightFork,
    eat,
    putLeftFork,
    putRightFork,
  ) {
    const left = philosopher
    const right = (philosopher + 1) % 5
    // 避免死锁：编号最小的哲学家先拿右叉
    const first = Math.min(left, right)
    const second = Math.max(left, right)
    while (this.forks[first] || this.forks[second]) {
      await new Promise((r) => setTimeout(r, 0))
    }
    this.forks[first] = true
    this.forks[second] = true
    if (first === left) {
      pickLeftFork()
      pickRightFork()
    } else {
      pickRightFork()
      pickLeftFork()
    }
    eat()
    putLeftFork()
    putRightFork()
    this.forks[first] = false
    this.forks[second] = false
  }
}
