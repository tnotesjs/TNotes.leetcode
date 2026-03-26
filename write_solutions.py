#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'notes')
files = {}

# ============================================================
# 2424. 最长上传前缀 - Design: uploaded set + pointer
# ============================================================
files['2424. 最长上传前缀【中等】/solutions/1/1.js'] = """/**
 * @param {number} n
 */
var LUPrefix = function (n) {
  this.uploaded = new Uint8Array(n + 2)
  this.longest = 0
}

/**
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
  this.uploaded[video] = 1
  while (this.uploaded[this.longest + 1]) {
    this.longest++
  }
}

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
  return this.longest
}
"""

files['2424. 最长上传前缀【中等】/solutions/1/1.c'] = """typedef struct {
    int *uploaded;
    int longest;
    int n;
} LUPrefix;

LUPrefix* lUPrefixCreate(int n) {
    LUPrefix *obj = (LUPrefix *)malloc(sizeof(LUPrefix));
    obj->uploaded = (int *)calloc(n + 2, sizeof(int));
    obj->longest = 0;
    obj->n = n;
    return obj;
}

void lUPrefixUpload(LUPrefix* obj, int video) {
    obj->uploaded[video] = 1;
    while (obj->uploaded[obj->longest + 1]) {
        obj->longest++;
    }
}

int lUPrefixLongest(LUPrefix* obj) {
    return obj->longest;
}

void lUPrefixFree(LUPrefix* obj) {
    free(obj->uploaded);
    free(obj);
}
"""

files['2424. 最长上传前缀【中等】/solutions/1/1.py'] = """class LUPrefix:
    def __init__(self, n: int):
        self.uploaded = set()
        self.longest = 0

    def upload(self, video: int) -> None:
        self.uploaded.add(video)
        while self.longest + 1 in self.uploaded:
            self.longest += 1

    def longest(self) -> int:
        return self.longest
"""

# ============================================================
# 2425. 所有数对的异或和
# ============================================================
files['2425. 所有数对的异或和【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let res = 0
  if (nums2.length % 2 === 1) {
    for (const x of nums1) res ^= x
  }
  if (nums1.length % 2 === 1) {
    for (const x of nums2) res ^= x
  }
  return res
}
"""

files['2425. 所有数对的异或和【中等】/solutions/1/1.c'] = """int xorAllNums(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int res = 0;
    if (nums2Size % 2 == 1) {
        for (int i = 0; i < nums1Size; i++) res ^= nums1[i];
    }
    if (nums1Size % 2 == 1) {
        for (int i = 0; i < nums2Size; i++) res ^= nums2[i];
    }
    return res;
}
"""

files['2425. 所有数对的异或和【中等】/solutions/1/1.py'] = """class Solution:
    def xorAllNums(self, nums1: list[int], nums2: list[int]) -> int:
        res = 0
        if len(nums2) % 2 == 1:
            for x in nums1:
                res ^= x
        if len(nums1) % 2 == 1:
            for x in nums2:
                res ^= x
        return res
"""

# ============================================================
# 2428. 沙漏的最大总和
# ============================================================
files['2428. 沙漏的最大总和【中等】/solutions/1/1.js'] = """/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid.length, n = grid[0].length
  let ans = -Infinity
  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      const sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
        + grid[i + 1][j + 1]
        + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2]
      ans = Math.max(ans, sum)
    }
  }
  return ans
}
"""

files['2428. 沙漏的最大总和【中等】/solutions/1/1.c'] = """int maxSum(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    int ans = -2147483647;
    for (int i = 0; i < m - 2; i++) {
        for (int j = 0; j < n - 2; j++) {
            int sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
                + grid[i + 1][j + 1]
                + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            if (sum > ans) ans = sum;
        }
    }
    return ans;
}
"""

files['2428. 沙漏的最大总和【中等】/solutions/1/1.py'] = """class Solution:
    def maxSum(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ans = float('-inf')
        for i in range(m - 2):
            for j in range(n - 2):
                s = (grid[i][j] + grid[i][j+1] + grid[i][j+2]
                     + grid[i+1][j+1]
                     + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2])
                ans = max(ans, s)
        return ans
"""

# ============================================================
# 2429. 最小异或
# ============================================================
files['2429. 最小异或【中等】/solutions/1/1.js'] = """/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let target = 0
  for (let x = num2; x; x &= x - 1) target++
  let res = 0
  // 从高位到低位，优先设置 num1 中已有的 1
  for (let i = 29; i >= 0 && target > 0; i--) {
    if (num1 & (1 << i)) {
      res |= (1 << i)
      target--
    }
  }
  // 如果还有剩余 1，从低位开始补
  for (let i = 0; i <= 29 && target > 0; i++) {
    if (!(res & (1 << i))) {
      res |= (1 << i)
      target--
    }
  }
  return res
}
"""

files['2429. 最小异或【中等】/solutions/1/1.c'] = """int minimizeXor(int num1, int num2) {
    int target = __builtin_popcount(num2);
    int res = 0;
    for (int i = 29; i >= 0 && target > 0; i--) {
        if (num1 & (1 << i)) {
            res |= (1 << i);
            target--;
        }
    }
    for (int i = 0; i <= 29 && target > 0; i++) {
        if (!(res & (1 << i))) {
            res |= (1 << i);
            target--;
        }
    }
    return res;
}
"""

files['2429. 最小异或【中等】/solutions/1/1.py'] = """class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        target = bin(num2).count('1')
        res = 0
        for i in range(29, -1, -1):
            if target > 0 and (num1 & (1 << i)):
                res |= (1 << i)
                target -= 1
        for i in range(30):
            if target > 0 and not (res & (1 << i)):
                res |= (1 << i)
                target -= 1
        return res
"""

# ============================================================
# 2433. 找出前缀异或的原始数组
# ============================================================
files['2433. 找出前缀异或的原始数组【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const n = pref.length
  const arr = new Array(n)
  arr[0] = pref[0]
  for (let i = 1; i < n; i++) {
    arr[i] = pref[i] ^ pref[i - 1]
  }
  return arr
}
"""

files['2433. 找出前缀异或的原始数组【中等】/solutions/1/1.c'] = """/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findArray(int* pref, int prefSize, int* returnSize) {
    *returnSize = prefSize;
    int *arr = (int *)malloc(prefSize * sizeof(int));
    arr[0] = pref[0];
    for (int i = 1; i < prefSize; i++) {
        arr[i] = pref[i] ^ pref[i - 1];
    }
    return arr;
}
"""

files['2433. 找出前缀异或的原始数组【中等】/solutions/1/1.py'] = """class Solution:
    def findArray(self, pref: list[int]) -> list[int]:
        n = len(pref)
        arr = [0] * n
        arr[0] = pref[0]
        for i in range(1, n):
            arr[i] = pref[i] ^ pref[i - 1]
        return arr
"""

# ============================================================
# 2434. 使用机器人打印字典序最小的字符串
# ============================================================
files['2434. 使用机器人打印字典序最小的字符串【中等】/solutions/1/1.js'] = """/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  const n = s.length
  // suffixMin[i] = 从 i 到末尾的最小字符
  const suffixMin = new Array(n + 1)
  suffixMin[n] = 'z'
  for (let i = n - 1; i >= 0; i--) {
    suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1]
  }
  const stack = []
  const res = []
  for (let i = 0; i < n; i++) {
    stack.push(s[i])
    while (stack.length && stack[stack.length - 1] <= suffixMin[i + 1]) {
      res.push(stack.pop())
    }
  }
  while (stack.length) res.push(stack.pop())
  return res.join('')
}
"""

files['2434. 使用机器人打印字典序最小的字符串【中等】/solutions/1/1.c'] = """char* robotWithString(char* s) {
    int n = strlen(s);
    char *suffixMin = (char *)malloc((n + 1) * sizeof(char));
    suffixMin[n] = 'z';
    for (int i = n - 1; i >= 0; i--) {
        suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
    }
    char *stack = (char *)malloc(n * sizeof(char));
    char *res = (char *)malloc((n + 1) * sizeof(char));
    int top = 0, ri = 0;
    for (int i = 0; i < n; i++) {
        stack[top++] = s[i];
        while (top > 0 && stack[top - 1] <= suffixMin[i + 1]) {
            res[ri++] = stack[--top];
        }
    }
    while (top > 0) res[ri++] = stack[--top];
    res[ri] = '\\0';
    free(suffixMin);
    free(stack);
    return res;
}
"""

files['2434. 使用机器人打印字典序最小的字符串【中等】/solutions/1/1.py'] = """class Solution:
    def robotWithString(self, s: str) -> str:
        n = len(s)
        suffix_min = [''] * (n + 1)
        suffix_min[n] = 'z'
        for i in range(n - 1, -1, -1):
            suffix_min[i] = min(s[i], suffix_min[i + 1])
        stack = []
        res = []
        for i in range(n):
            stack.append(s[i])
            while stack and stack[-1] <= suffix_min[i + 1]:
                res.append(stack.pop())
        while stack:
            res.append(stack.pop())
        return ''.join(res)
"""

# ============================================================
# 2438. 二的幂数组中查询范围内的乘积
# ============================================================
files['2438. 二的幂数组中查询范围内的乘积【中等】/solutions/1/1.js'] = """/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  const MOD = 1e9 + 7
  const powers = []
  while (n) {
    const lb = n & (-n)
    powers.push(lb)
    n -= lb
  }
  const ans = []
  for (const [l, r] of queries) {
    let prod = 1n
    for (let i = l; i <= r; i++) {
      prod = prod * BigInt(powers[i]) % 1000000007n
    }
    ans.push(Number(prod))
  }
  return ans
}
"""

files['2438. 二的幂数组中查询范围内的乘积【中等】/solutions/1/1.c'] = """/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* productQueries(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    long long MOD = 1000000007;
    int powers[32], pCnt = 0;
    while (n) {
        int lb = n & (-n);
        powers[pCnt++] = lb;
        n -= lb;
    }
    *returnSize = queriesSize;
    int *ans = (int *)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int l = queries[q][0], r = queries[q][1];
        long long prod = 1;
        for (int i = l; i <= r; i++) {
            prod = prod * powers[i] % MOD;
        }
        ans[q] = (int)prod;
    }
    return ans;
}
"""

files['2438. 二的幂数组中查询范围内的乘积【中等】/solutions/1/1.py'] = """class Solution:
    def productQueries(self, n: int, queries: list[list[int]]) -> list[int]:
        MOD = 10 ** 9 + 7
        powers = []
        while n:
            lb = n & (-n)
            powers.append(lb)
            n -= lb
        ans = []
        for l, r in queries:
            prod = 1
            for i in range(l, r + 1):
                prod = prod * powers[i] % MOD
            ans.append(prod)
        return ans
"""

# ============================================================
# 2439. 最小化数组中的最大值
# ============================================================
files['2439. 最小化数组中的最大值【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  let ans = 0
  let prefixSum = 0
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    ans = Math.max(ans, Math.ceil(prefixSum / (i + 1)))
  }
  return ans
}
"""

files['2439. 最小化数组中的最大值【中等】/solutions/1/1.c'] = """int minimizeArrayValue(int* nums, int numsSize) {
    long long ans = 0, prefixSum = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        long long avg = (prefixSum + i) / (i + 1);
        if (avg > ans) ans = avg;
    }
    return (int)ans;
}
"""

files['2439. 最小化数组中的最大值【中等】/solutions/1/1.py'] = """class Solution:
    def minimizeArrayValue(self, nums: list[int]) -> int:
        ans = 0
        prefix_sum = 0
        for i, x in enumerate(nums):
            prefix_sum += x
            ans = max(ans, (prefix_sum + i) // (i + 1))
        return ans
"""

# ============================================================
# 2442. 反转之后不同整数的数目
# ============================================================
files['2442. 反转之后不同整数的数目【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const set = new Set(nums)
  for (const x of nums) {
    set.add(Number(String(x).split('').reverse().join('')))
  }
  return set.size
}
"""

files['2442. 反转之后不同整数的数目【中等】/solutions/1/1.c'] = """int reverse2442(int x) {
    int r = 0;
    while (x) {
        r = r * 10 + x % 10;
        x /= 10;
    }
    return r;
}

int cmp2442(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

int countDistinctIntegers(int* nums, int numsSize) {
    int *arr = (int *)malloc(numsSize * 2 * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        arr[i] = nums[i];
        arr[i + numsSize] = reverse2442(nums[i]);
    }
    int total = numsSize * 2;
    qsort(arr, total, sizeof(int), cmp2442);
    int cnt = 1;
    for (int i = 1; i < total; i++) {
        if (arr[i] != arr[i - 1]) cnt++;
    }
    free(arr);
    return cnt;
}
"""

files['2442. 反转之后不同整数的数目【中等】/solutions/1/1.py'] = """class Solution:
    def countDistinctIntegers(self, nums: list[int]) -> int:
        s = set(nums)
        for x in nums:
            s.add(int(str(x)[::-1]))
        return len(s)
"""

# ============================================================
# 2443. 反转之后的数字和
# ============================================================
files['2443. 反转之后的数字和【中等】/solutions/1/1.js'] = """/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  for (let i = 0; i <= num; i++) {
    const rev = Number(String(i).split('').reverse().join(''))
    if (i + rev === num) return true
  }
  return false
}
"""

files['2443. 反转之后的数字和【中等】/solutions/1/1.c'] = """int reverse2443(int x) {
    int r = 0;
    while (x) {
        r = r * 10 + x % 10;
        x /= 10;
    }
    return r;
}

bool sumOfNumberAndReverse(int num) {
    for (int i = 0; i <= num; i++) {
        if (i + reverse2443(i) == num) return true;
    }
    return false;
}
"""

files['2443. 反转之后的数字和【中等】/solutions/1/1.py'] = """class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        for i in range(num + 1):
            if i + int(str(i)[::-1]) == num:
                return True
        return False
"""

# ============================================================
# 2447. 最大公因数等于 K 的子数组数目
# ============================================================
files['2447. 最大公因数等于 K 的子数组数目【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function (nums, k) {
  let count = 0
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  for (let i = 0; i < nums.length; i++) {
    let g = 0
    for (let j = i; j < nums.length; j++) {
      g = gcd(g, nums[j])
      if (g === k) count++
      if (g < k) break
    }
  }
  return count
}
"""

files['2447. 最大公因数等于 K 的子数组数目【中等】/solutions/1/1.c'] = """int gcd2447(int a, int b) {
    while (b) { int t = b; b = a % b; a = t; }
    return a;
}

int subarrayGCD(int* nums, int numsSize, int k) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        int g = 0;
        for (int j = i; j < numsSize; j++) {
            g = gcd2447(g, nums[j]);
            if (g == k) count++;
            if (g < k) break;
        }
    }
    return count;
}
"""

files['2447. 最大公因数等于 K 的子数组数目【中等】/solutions/1/1.py'] = """from math import gcd

class Solution:
    def subarrayGCD(self, nums: list[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            g = 0
            for j in range(i, len(nums)):
                g = gcd(g, nums[j])
                if g == k:
                    count += 1
                if g < k:
                    break
        return count
"""

# ============================================================
# 2452. 距离字典两次编辑以内的单词
# ============================================================
files['2452. 距离字典两次编辑以内的单词【中等】/solutions/1/1.js'] = """/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  return queries.filter(q => {
    return dictionary.some(d => {
      if (q.length !== d.length) return false
      let diff = 0
      for (let i = 0; i < q.length; i++) {
        if (q[i] !== d[i]) diff++
        if (diff > 2) return false
      }
      return true
    })
  })
}
"""

files['2452. 距离字典两次编辑以内的单词【中等】/solutions/1/1.c'] = """/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** twoEditWords(char** queries, int queriesSize, char** dictionary, int dictionarySize, int* returnSize) {
    char **res = (char **)malloc(queriesSize * sizeof(char *));
    int cnt = 0;
    for (int i = 0; i < queriesSize; i++) {
        int len = strlen(queries[i]);
        for (int j = 0; j < dictionarySize; j++) {
            int diff = 0;
            for (int k = 0; k < len && diff <= 2; k++) {
                if (queries[i][k] != dictionary[j][k]) diff++;
            }
            if (diff <= 2) {
                res[cnt++] = queries[i];
                break;
            }
        }
    }
    *returnSize = cnt;
    return res;
}
"""

files['2452. 距离字典两次编辑以内的单词【中等】/solutions/1/1.py'] = """class Solution:
    def twoEditWords(self, queries: list[str], dictionary: list[str]) -> list[str]:
        res = []
        for q in queries:
            for d in dictionary:
                if len(q) == len(d) and sum(a != b for a, b in zip(q, d)) <= 2:
                    res.append(q)
                    break
        return res
"""

# ============================================================
# 2453. 摧毁一系列目标
# ============================================================
files['2453. 摧毁一系列目标【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
  const map = new Map()
  for (const x of nums) {
    const r = x % space
    map.set(r, (map.get(r) || 0) + 1)
  }
  let maxCount = 0, ans = Infinity
  for (const x of nums) {
    const cnt = map.get(x % space)
    if (cnt > maxCount || (cnt === maxCount && x < ans)) {
      maxCount = cnt
      ans = x
    }
  }
  return ans
}
"""

files['2453. 摧毁一系列目标【中等】/solutions/1/1.c'] = """int destroyTargets(int* nums, int numsSize, int space) {
    // 用哈希表统计每个余数的出现次数
    // 简单做法：先排序找余数计数
    int *count = (int *)calloc(space, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        count[nums[i] % space]++;
    }
    int maxCount = 0, ans = 2147483647;
    for (int i = 0; i < numsSize; i++) {
        int cnt = count[nums[i] % space];
        if (cnt > maxCount || (cnt == maxCount && nums[i] < ans)) {
            maxCount = cnt;
            ans = nums[i];
        }
    }
    free(count);
    return ans;
}
"""

files['2453. 摧毁一系列目标【中等】/solutions/1/1.py'] = """class Solution:
    def destroyTargets(self, nums: list[int], space: int) -> int:
        from collections import Counter
        cnt = Counter(x % space for x in nums)
        max_count = max(cnt.values())
        return min(x for x in nums if cnt[x % space] == max_count)
"""

# ============================================================
# 2456. 最流行的视频创作者
# ============================================================
files['2456. 最流行的视频创作者【中等】/solutions/1/1.js'] = """/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const map = new Map()
  for (let i = 0; i < creators.length; i++) {
    const c = creators[i]
    if (!map.has(c)) {
      map.set(c, { total: 0, bestIdx: i })
    }
    const info = map.get(c)
    info.total += views[i]
    const bi = info.bestIdx
    if (views[i] > views[bi] || (views[i] === views[bi] && ids[i] < ids[bi])) {
      info.bestIdx = i
    }
  }
  let maxTotal = -Infinity
  for (const [, info] of map) {
    maxTotal = Math.max(maxTotal, info.total)
  }
  const res = []
  for (const [c, info] of map) {
    if (info.total === maxTotal) {
      res.push([c, ids[info.bestIdx]])
    }
  }
  return res
}
"""

files['2456. 最流行的视频创作者【中等】/solutions/1/1.c'] = """/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

typedef struct {
    char *creator;
    long long total;
    int bestIdx;
} CreatorInfo2456;

char*** mostPopularCreator(char** creators, char** ids, int* views, int n, int* returnSize, int** returnColumnSizes) {
    CreatorInfo2456 *info = (CreatorInfo2456 *)malloc(n * sizeof(CreatorInfo2456));
    int infoCnt = 0;
    for (int i = 0; i < n; i++) {
        int found = -1;
        for (int j = 0; j < infoCnt; j++) {
            if (strcmp(info[j].creator, creators[i]) == 0) { found = j; break; }
        }
        if (found == -1) {
            info[infoCnt].creator = creators[i];
            info[infoCnt].total = views[i];
            info[infoCnt].bestIdx = i;
            infoCnt++;
        } else {
            info[found].total += views[i];
            int bi = info[found].bestIdx;
            if (views[i] > views[bi] || (views[i] == views[bi] && strcmp(ids[i], ids[bi]) < 0)) {
                info[found].bestIdx = i;
            }
        }
    }
    long long maxTotal = -1;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total > maxTotal) maxTotal = info[i].total;
    }
    int cnt = 0;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total == maxTotal) cnt++;
    }
    char ***res = (char ***)malloc(cnt * sizeof(char **));
    *returnColumnSizes = (int *)malloc(cnt * sizeof(int));
    int ri = 0;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total == maxTotal) {
            res[ri] = (char **)malloc(2 * sizeof(char *));
            res[ri][0] = info[i].creator;
            res[ri][1] = ids[info[i].bestIdx];
            (*returnColumnSizes)[ri] = 2;
            ri++;
        }
    }
    *returnSize = cnt;
    free(info);
    return res;
}
"""

files['2456. 最流行的视频创作者【中等】/solutions/1/1.py'] = """class Solution:
    def mostPopularCreator(self, creators: list[str], ids: list[str], views: list[int]) -> list[list[str]]:
        from collections import defaultdict
        total = defaultdict(int)
        best = {}
        for i, c in enumerate(creators):
            total[c] += views[i]
            if c not in best or views[i] > views[best[c]] or (views[i] == views[best[c]] and ids[i] < ids[best[c]]):
                best[c] = i
        max_total = max(total.values())
        return [[c, ids[best[c]]] for c in total if total[c] == max_total]
"""

# ============================================================
# 2457. 美丽整数的最小增量
# ============================================================
files['2457. 美丽整数的最小增量【中等】/solutions/1/1.js'] = """/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  let add = 0n
  let num = BigInt(n)
  const digitSum = (x) => {
    let s = 0n
    while (x > 0n) { s += x % 10n; x /= 10n }
    return s
  }
  let base = 1n
  while (digitSum(num) > BigInt(target)) {
    // 进位当前最低非零位
    let remainder = num % (base * 10n)
    let carry = base * 10n - remainder
    num += carry
    add += carry
    base *= 10n
  }
  return Number(add)
}
"""

files['2457. 美丽整数的最小增量【中等】/solutions/1/1.c'] = """int digitSum(long long x) {
    int s = 0;
    while (x) { s += x % 10; x /= 10; }
    return s;
}

long long makeIntegerBeautiful(long long n, int target) {
    long long add = 0, base = 1;
    while (digitSum(n) > target) {
        long long remainder = n % (base * 10);
        long long carry = base * 10 - remainder;
        n += carry;
        add += carry;
        base *= 10;
    }
    return add;
}
"""

files['2457. 美丽整数的最小增量【中等】/solutions/1/1.py'] = """class Solution:
    def makeIntegerBeautiful(self, n: int, target: int) -> int:
        def digit_sum(x):
            s = 0
            while x:
                s += x % 10
                x //= 10
            return s

        add = 0
        base = 1
        while digit_sum(n) > target:
            remainder = n % (base * 10)
            carry = base * 10 - remainder
            n += carry
            add += carry
            base *= 10
        return add
"""

# ============================================================
# 2461. 长度为 K 子数组中的最大和
# ============================================================
files['2461. 长度为 K 子数组中的最大和【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const freq = new Map()
  let sum = 0, ans = 0
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
    sum += nums[i]
    if (i >= k) {
      const left = nums[i - k]
      freq.set(left, freq.get(left) - 1)
      if (freq.get(left) === 0) freq.delete(left)
      sum -= left
    }
    if (i >= k - 1 && freq.size === k) {
      ans = Math.max(ans, sum)
    }
  }
  return ans
}
"""

files['2461. 长度为 K 子数组中的最大和【中等】/solutions/1/1.c'] = """// 简易哈希表
typedef struct Entry2461 {
    int key, val;
    struct Entry2461 *next;
} Entry2461;

typedef struct {
    Entry2461 **buckets;
    int size, distinct;
} HMap2461;

HMap2461* createMap2461(int size) {
    HMap2461 *m = (HMap2461 *)malloc(sizeof(HMap2461));
    m->size = size;
    m->distinct = 0;
    m->buckets = (Entry2461 **)calloc(size, sizeof(Entry2461 *));
    return m;
}

void mapAdd2461(HMap2461 *m, int key, int delta) {
    int idx = ((unsigned)key) % m->size;
    Entry2461 *e = m->buckets[idx];
    while (e) {
        if (e->key == key) {
            e->val += delta;
            if (e->val == 0) m->distinct--;
            else if (e->val == delta) m->distinct++;
            return;
        }
        e = e->next;
    }
    Entry2461 *ne = (Entry2461 *)malloc(sizeof(Entry2461));
    ne->key = key; ne->val = delta; ne->next = m->buckets[idx];
    m->buckets[idx] = ne;
    if (delta != 0) m->distinct++;
}

void freeMap2461(HMap2461 *m) {
    for (int i = 0; i < m->size; i++) {
        Entry2461 *e = m->buckets[i];
        while (e) { Entry2461 *t = e; e = e->next; free(t); }
    }
    free(m->buckets);
    free(m);
}

long long maximumSubarraySum(int* nums, int numsSize, int k) {
    HMap2461 *freq = createMap2461(100003);
    long long sum = 0, ans = 0;
    for (int i = 0; i < numsSize; i++) {
        mapAdd2461(freq, nums[i], 1);
        sum += nums[i];
        if (i >= k) {
            mapAdd2461(freq, nums[i - k], -1);
            sum -= nums[i - k];
        }
        if (i >= k - 1 && freq->distinct == k) {
            if (sum > ans) ans = sum;
        }
    }
    freeMap2461(freq);
    return ans;
}
"""

files['2461. 长度为 K 子数组中的最大和【中等】/solutions/1/1.py'] = """class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        from collections import defaultdict
        freq = defaultdict(int)
        s = 0
        ans = 0
        for i, x in enumerate(nums):
            freq[x] += 1
            s += x
            if i >= k:
                left = nums[i - k]
                freq[left] -= 1
                if freq[left] == 0:
                    del freq[left]
                s -= left
            if i >= k - 1 and len(freq) == k:
                ans = max(ans, s)
        return ans
"""

# ============================================================
# 2462. 雇佣 K 位工人的总代价
# ============================================================
files['2462. 雇佣 K 位工人的总代价【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  // 最小堆实现
  class MinHeap {
    constructor() { this.h = [] }
    push(v) {
      this.h.push(v)
      let i = this.h.length - 1
      while (i > 0) {
        const p = (i - 1) >> 1
        if (this.h[p] <= this.h[i]) break
        ;[this.h[p], this.h[i]] = [this.h[i], this.h[p]]
        i = p
      }
    }
    pop() {
      const top = this.h[0]
      const last = this.h.pop()
      if (this.h.length > 0) {
        this.h[0] = last
        let i = 0
        while (true) {
          let s = i, l = 2 * i + 1, r = 2 * i + 2
          if (l < this.h.length && this.h[l] < this.h[s]) s = l
          if (r < this.h.length && this.h[r] < this.h[s]) s = r
          if (s === i) break
          ;[this.h[s], this.h[i]] = [this.h[i], this.h[s]]
          i = s
        }
      }
      return top
    }
    peek() { return this.h[0] }
    get size() { return this.h.length }
  }

  const left = new MinHeap(), right = new MinHeap()
  let lo = 0, hi = costs.length - 1
  for (let i = 0; i < candidates && lo <= hi; i++) left.push(costs[lo++])
  for (let i = 0; i < candidates && lo <= hi; i++) right.push(costs[hi--])

  let total = 0
  for (let i = 0; i < k; i++) {
    const lv = left.size ? left.peek() : Infinity
    const rv = right.size ? right.peek() : Infinity
    if (lv <= rv) {
      total += left.pop()
      if (lo <= hi) left.push(costs[lo++])
    } else {
      total += right.pop()
      if (lo <= hi) right.push(costs[hi--])
    }
  }
  return total
}
"""

files['2462. 雇佣 K 位工人的总代价【中等】/solutions/1/1.c'] = """// 最小堆辅助函数
void swap2462(int *a, int *b) { int t = *a; *a = *b; *b = t; }
void heapPush2462(int *h, int *sz, int val) {
    h[(*sz)++] = val;
    int i = *sz - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p] <= h[i]) break;
        swap2462(&h[p], &h[i]);
        i = p;
    }
}
int heapPop2462(int *h, int *sz) {
    int top = h[0];
    h[0] = h[--(*sz)];
    int i = 0;
    while (1) {
        int s = i, l = 2*i+1, r = 2*i+2;
        if (l < *sz && h[l] < h[s]) s = l;
        if (r < *sz && h[r] < h[s]) s = r;
        if (s == i) break;
        swap2462(&h[s], &h[i]);
        i = s;
    }
    return top;
}

long long totalCost(int* costs, int costsSize, int k, int candidates) {
    int *lh = (int *)malloc(costsSize * sizeof(int));
    int *rh = (int *)malloc(costsSize * sizeof(int));
    int lsz = 0, rsz = 0;
    int lo = 0, hi = costsSize - 1;
    for (int i = 0; i < candidates && lo <= hi; i++) heapPush2462(lh, &lsz, costs[lo++]);
    for (int i = 0; i < candidates && lo <= hi; i++) heapPush2462(rh, &rsz, costs[hi--]);
    long long total = 0;
    for (int i = 0; i < k; i++) {
        int lv = lsz > 0 ? lh[0] : 2147483647;
        int rv = rsz > 0 ? rh[0] : 2147483647;
        if (lv <= rv) {
            total += heapPop2462(lh, &lsz);
            if (lo <= hi) heapPush2462(lh, &lsz, costs[lo++]);
        } else {
            total += heapPop2462(rh, &rsz);
            if (lo <= hi) heapPush2462(rh, &rsz, costs[hi--]);
        }
    }
    free(lh); free(rh);
    return total;
}
"""

files['2462. 雇佣 K 位工人的总代价【中等】/solutions/1/1.py'] = """import heapq

class Solution:
    def totalCost(self, costs: list[int], k: int, candidates: int) -> int:
        n = len(costs)
        left, right = [], []
        lo, hi = 0, n - 1
        for _ in range(candidates):
            if lo <= hi:
                heapq.heappush(left, costs[lo])
                lo += 1
        for _ in range(candidates):
            if lo <= hi:
                heapq.heappush(right, costs[hi])
                hi -= 1
        total = 0
        for _ in range(k):
            lv = left[0] if left else float('inf')
            rv = right[0] if right else float('inf')
            if lv <= rv:
                total += heapq.heappop(left)
                if lo <= hi:
                    heapq.heappush(left, costs[lo])
                    lo += 1
            else:
                total += heapq.heappop(right)
                if lo <= hi:
                    heapq.heappush(right, costs[hi])
                    hi -= 1
        return total
"""

# ============================================================
# 2466. 统计构造好字符串的方案数
# ============================================================
files['2466. 统计构造好字符串的方案数【中等】/solutions/1/1.js'] = """/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7
  const dp = new Array(high + 1).fill(0)
  dp[0] = 1
  let ans = 0
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD
    if (i >= low) ans = (ans + dp[i]) % MOD
  }
  return ans
}
"""

files['2466. 统计构造好字符串的方案数【中等】/solutions/1/1.c'] = """int countGoodStrings(int low, int high, int zero, int one) {
    long long MOD = 1000000007;
    long long *dp = (long long *)calloc(high + 1, sizeof(long long));
    dp[0] = 1;
    long long ans = 0;
    for (int i = 1; i <= high; i++) {
        if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
        if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
        if (i >= low) ans = (ans + dp[i]) % MOD;
    }
    free(dp);
    return (int)ans;
}
"""

files['2466. 统计构造好字符串的方案数【中等】/solutions/1/1.py'] = """class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        MOD = 10 ** 9 + 7
        dp = [0] * (high + 1)
        dp[0] = 1
        ans = 0
        for i in range(1, high + 1):
            if i >= zero:
                dp[i] = (dp[i] + dp[i - zero]) % MOD
            if i >= one:
                dp[i] = (dp[i] + dp[i - one]) % MOD
            if i >= low:
                ans = (ans + dp[i]) % MOD
        return ans
"""

for path, content in files.items():
    full = os.path.join(base, path)
    with open(full, 'w') as f:
        f.write(content)
    print(f'wrote {path}')

print('Batch 1 complete')
