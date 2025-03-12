var romanToInt = function (s) {
  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  // 特殊值
  map.set('IV', 4);
  map.set('IX', 9);
  map.set('XL', 40);
  map.set('XC', 90);
  map.set('CD', 400);
  map.set('CM', 900);

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(`${s[i]}${s[i + 1]}`)) {
      // 特殊情况
      result += map.get(`${s[i]}${s[i + 1]}`);
      i++;
    } else {
      // 非特殊情况
      result += map.get(s[i]);
    }
  }
  return result;
};

// test
console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
