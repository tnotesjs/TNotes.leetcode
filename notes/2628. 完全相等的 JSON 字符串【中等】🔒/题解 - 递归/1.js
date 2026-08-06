/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    // 如果两者都是原始类型，直接使用 === 比较。
    if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) return o1 === o2;

    // 如果一个是数组而另一个不是，直接返回 false。
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;

    const keys1 = Object.keys(o1).sort();
    const keys2 = Object.keys(o2).sort();

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }

    return true;
};