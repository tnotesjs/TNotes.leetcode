var ParkingSystem = function (big, medium, small) {
  this.rem = [0, big, medium, small]
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.rem[carType] > 0) {
    this.rem[carType]--
    return true
  }
  return false
}
