type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const ans: number[] = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const res: boolean = fn(item, i)
    if (res) ans.push(item)
  }
  return ans
}