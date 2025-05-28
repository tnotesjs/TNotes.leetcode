type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function createObject(keysArr: JSONValue[], valuesArr: JSONValue[]): Record<string, JSONValue> {
    const obj: Record<string, JSONValue> = {}
  for (let i = 0; i < keysArr.length; i++) {
    const key = keysArr[i] as string
    if (!(key in obj)) obj[key] = valuesArr[i]
  }
  return obj
};