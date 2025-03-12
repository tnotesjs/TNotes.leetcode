type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const ans = [...arr1] // 防止修改 arr1

  // 初始化 map
  const map = new Map() // 存储 id -> index 的映射
  for (let i = 0; i < ans.length; i++) map.set(ans[i].id, i)

  // 查 arr2
  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i]
    if (!map.has(item.id)) { // id 不存在
      ans.push(item)
      map.set(item.id, ans.length - 1)
    } else { // id 存在
      const existedItem = ans[map.get(item.id)]
      ans[map.get(item.id)] = { ...existedItem, ...item }
    }
  }

  return ans.sort((a, b) => a.id - b.id) // 按照 id 升序排序
};