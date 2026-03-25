var UndergroundSystem = function () {
  this.checkInMap = new Map() // id -> [station, time]
  this.routeMap = new Map() // 'start->end' -> [totalTime, count]
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInMap.set(id, [stationName, t])
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const [startStation, startTime] = this.checkInMap.get(id)
  this.checkInMap.delete(id)
  const key = startStation + '->' + stationName
  const route = this.routeMap.get(key) || [0, 0]
  route[0] += t - startTime
  route[1]++
  this.routeMap.set(key, route)
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation,
) {
  const [total, count] = this.routeMap.get(startStation + '->' + endStation)
  return total / count
}
