type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue

function partial(fn: Fn, args: JSONValue[]): Fn {

  return function (...restArgs) {
    // 参数处理
    const arr = [...args]
    for (let i = 0; i < restArgs.length; i++) {
      const targetIndex = arr.indexOf('_')
      targetIndex === -1 ? arr.push(restArgs[i]) : arr[targetIndex] = restArgs[i]
    }

    return fn(...arr)
  }
};