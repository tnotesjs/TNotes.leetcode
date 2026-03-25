/**
 * @param {number[][]} servers
 * @param {number[][]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  const n = servers.length,
    m = tasks.length
  // 空闲堆：[weight, index]
  const free = []
  const busy = [] // [释放时间, weight, index]
  const pushF = (v) => {
    free.push(v)
    let i = free.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (free[p][0] > v[0] || (free[p][0] === v[0] && free[p][1] > v[1])) {
        free[i] = free[p]
        i = p
      } else break
    }
    free[i] = v
  }
  const popF = () => {
    const t = free[0]
    const l = free.pop()
    if (free.length) {
      free[0] = l
      let i = 0
      while (true) {
        let m = i,
          a = 2 * i + 1,
          b = 2 * i + 2
        if (
          a < free.length &&
          (free[a][0] < free[m][0] ||
            (free[a][0] === free[m][0] && free[a][1] < free[m][1]))
        )
          m = a
        if (
          b < free.length &&
          (free[b][0] < free[m][0] ||
            (free[b][0] === free[m][0] && free[b][1] < free[m][1]))
        )
          m = b
        if (m === i) break
        ;[free[i], free[m]] = [free[m], free[i]]
        i = m
      }
    }
    return t
  }
  const pushB = (v) => {
    busy.push(v)
    let i = busy.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (
        busy[p][0] > v[0] ||
        (busy[p][0] === v[0] &&
          (busy[p][1] > v[1] || (busy[p][1] === v[1] && busy[p][2] > v[2])))
      ) {
        busy[i] = busy[p]
        i = p
      } else break
    }
    busy[i] = v
  }
  const popB = () => {
    const t = busy[0]
    const l = busy.pop()
    if (busy.length) {
      busy[0] = l
      let i = 0
      while (true) {
        let m = i,
          a = 2 * i + 1,
          b = 2 * i + 2
        if (
          a < busy.length &&
          (busy[a][0] < busy[m][0] ||
            (busy[a][0] === busy[m][0] &&
              (busy[a][1] < busy[m][1] ||
                (busy[a][1] === busy[m][1] && busy[a][2] < busy[m][2]))))
        )
          m = a
        if (
          b < busy.length &&
          (busy[b][0] < busy[m][0] ||
            (busy[b][0] === busy[m][0] &&
              (busy[b][1] < busy[m][1] ||
                (busy[b][1] === busy[m][1] && busy[b][2] < busy[m][2]))))
        )
          m = b
        if (m === i) break
        ;[busy[i], busy[m]] = [busy[m], busy[i]]
        i = m
      }
    }
    return t
  }

  for (let i = 0; i < n; i++) pushF([servers[i][0], i])
  const ans = new Array(m)
  for (let j = 0; j < m; j++) {
    const time = j // 任务 j 在时刻 j 到达
    // 释放已完成的服务器
    while (busy.length && busy[0][0] <= time) {
      const [, w, idx] = popB()
      pushF([w, idx])
    }
    if (free.length) {
      const [w, idx] = popF()
      ans[j] = idx
      pushB([time + tasks[j][1], w, idx])
    } else {
      // 等待最早释放
      const releaseTime = busy[0][0]
      while (busy.length && busy[0][0] <= releaseTime) {
        const [, w, idx] = popB()
        pushF([w, idx])
      }
      const [w, idx] = popF()
      ans[j] = idx
      pushB([releaseTime + tasks[j][1], w, idx])
    }
  }
  return ans
}
