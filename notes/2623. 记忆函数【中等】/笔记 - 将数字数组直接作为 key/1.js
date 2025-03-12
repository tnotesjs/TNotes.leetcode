const arr = [1, 2]
const cache = {}
cache[arr] = 3

console.log(arr in cache)                   // true

console.log(JSON.stringify(arr))            // [1,2]

console.log(cache[arr])                     // 3
console.log(cache['[1,2]'])                 // undefined
console.log(cache[JSON.stringify(arr)])     // undefined

console.log(cache)                          // { '1,2': 3 }

console.log(arr.join(','))                  // 1,2
console.log(cache['1,2'])                   // 3
console.log(cache[arr.join(',')])           // 3
