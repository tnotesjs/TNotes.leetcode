/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if ([null, undefined].includes(obj) || !(classFunction instanceof Function))
    return false;
  // else if (['object', 'function', 'array'].includes(typeof obj)) return obj instanceof classFunction
  else return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
