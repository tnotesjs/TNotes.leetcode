type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const len = arr.length
  if (len === 0) return []
  if (size >= len) return [[...arr]]
  const ansLen = Math.ceil(len / size)
  const ans = new Array(ansLen)
  for (let i = 0; i < ansLen; i++) {
    ans[i] = arr.slice(i * size, i * size + size)
  }
  return ans
};