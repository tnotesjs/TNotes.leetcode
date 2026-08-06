/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function (year, month) {
	// 闰年规则：能被 400 整除，或能被 4 整除但不能被 100 整除
	const isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
	if (month === 2) return isLeap ? 29 : 28
	// 31 天的月份集合
	const thirtyOne = new Set([1, 3, 5, 7, 8, 10, 12])
	return thirtyOne.has(month) ? 31 : 30
}
