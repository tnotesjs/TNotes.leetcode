/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 !== 0) {
    return false; // 如果长度是奇数，直接返回 false，因为有效的括号必须成对出现
  }
  const stack = [];
  for (let i = 0; i < len; i++) {
    const str = s[i];
    if (str === '(') {
      stack.push(')'); // 遇到左括号 (，将对应的右括号 ) 压入栈
    } else if (str === '[') {
      stack.push(']'); // 遇到左括号 [，将对应的右括号 ] 压入栈
    } else if (str === '{') {
      stack.push('}'); // 遇到左括号 {，将对应的右括号 } 压入栈
    } else {
      if (str !== stack.pop()) return false; // 遇到右括号，检查是否与栈顶元素匹配
    }
  }
  return stack.length === 0; // 最后检查栈是否为空，为空则所有括号都匹配
};

// 测试
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true