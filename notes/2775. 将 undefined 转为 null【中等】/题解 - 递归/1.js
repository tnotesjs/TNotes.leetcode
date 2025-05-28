/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var undefinedToNull = function (obj) {
  if (Array.isArray(obj)) {
    // 如果 obj 是数组，则创建一个新的数组
    return obj.map((item) => undefinedToNull(item));
  } else if (obj !== null && typeof obj === 'object') {
    // 如果 obj 是对象，则创建一个新的对象
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 递归处理每个属性
        newObj[key] = undefinedToNull(obj[key]);
      }
    }
    return newObj;
  } else {
    // 如果是 undefined，则返回 null，否则返回原始值
    return obj === undefined ? null : obj;
  }
};

/**
 * undefinedToNull({"a": undefined, "b": 3}) // {"a": null, "b": 3}
 * undefinedToNull([undefined, undefined]) // [null, null]
 */
