type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

function invertObject(obj: Obj): Record<string, JSONValue> {
  const ans = {}
  const keysAndVals = Object.entries(obj)
  for (let i = 0; i < keysAndVals.length; i++) {
    const [k, v] = keysAndVals[i] as [string, string]
    if (v in ans) {
      // ans[v] = Array.isArray(ans[v]) ? [...ans[v], k] : [ans[v], k]
      if (Array.isArray(ans[v])) ans[v].push(k)
      else ans[v] = [ans[v], k]
    } else {
      ans[v] = k
    }
  }
  return ans
};