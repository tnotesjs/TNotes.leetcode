#!/usr/bin/env python3
"""Batch write all solutions for problems 2822-2861."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'notes')

def w(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w') as f:
        f.write(content)

# ============================================================
# 2823 - 深度对象筛选 (JS-only)
# ============================================================
w('2823. 深度对象筛选【中等】/solutions/1/1.js', r"""/**
 * @param {Object|Array} obj
 * @param {Function} fn
 * @return {Object|Array|undefined}
 */
var deepFilter = function (obj, fn) {
  if (Array.isArray(obj)) {
    const res = obj.map(item => deepFilter(item, fn)).filter(item => item !== undefined)
    return res.length > 0 ? res : undefined
  }
  if (typeof obj === 'object' && obj !== null) {
    const res = {}
    for (const key of Object.keys(obj)) {
      const val = deepFilter(obj[key], fn)
      if (val !== undefined) res[key] = val
    }
    return Object.keys(res).length > 0 ? res : undefined
  }
  return fn(obj) ? obj : undefined
}
""".lstrip())

# ============================================================
# 2825 - 循环增长使字符串子序列等于另一个字符串
# ============================================================
w('2825. 循环增长使字符串子序列等于另一个字符串【中等】/solutions/1/1.js', r"""/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let j = 0
  for (let i = 0; i < str1.length && j < str2.length; i++) {
    const c = str1.charCodeAt(i) - 97
    const t = str2.charCodeAt(j) - 97
    if (c === t || (c + 1) % 26 === t) j++
  }
  return j === str2.length
}
""".lstrip())

w('2825. 循环增长使字符串子序列等于另一个字符串【中等】/solutions/1/1.c', r"""bool canMakeSubsequence(char* str1, char* str2) {
    int j = 0;
    for (int i = 0; str1[i] && str2[j]; i++) {
        if (str1[i] == str2[j] || (str1[i] - 'a' + 1) % 26 + 'a' == str2[j]) {
            j++;
        }
    }
    return str2[j] == '\0';
}
""".lstrip())

w('2825. 循环增长使字符串子序列等于另一个字符串【中等】/solutions/1/1.py', r"""class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        j = 0
        for c in str1:
            if j < len(str2) and (c == str2[j] or chr((ord(c) - 97 + 1) % 26 + 97) == str2[j]):
                j += 1
        return j == len(str2)
""".lstrip())

# ============================================================
# 2826 - 将三个组排序
# ============================================================
w('2826. 将三个组排序【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  // f[j] = 以值 j+1 结尾的最长非递减子序列长度
  const f = [0, 0, 0]
  for (const x of nums) {
    if (x === 1) f[0]++
    else if (x === 2) f[1] = Math.max(f[0], f[1]) + 1
    else f[2] = Math.max(f[0], f[1], f[2]) + 1
  }
  return nums.length - Math.max(f[0], f[1], f[2])
}
""".lstrip())

w('2826. 将三个组排序【中等】/solutions/1/1.c', r"""int minimumOperations(int* nums, int numsSize) {
    int f[3] = {0, 0, 0};
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) f[0]++;
        else if (nums[i] == 2) f[1] = (f[0] > f[1] ? f[0] : f[1]) + 1;
        else {
            int mx = f[0] > f[1] ? f[0] : f[1];
            f[2] = (mx > f[2] ? mx : f[2]) + 1;
        }
    }
    int mx = f[0] > f[1] ? f[0] : f[1];
    return numsSize - (mx > f[2] ? mx : f[2]);
}
""".lstrip())

w('2826. 将三个组排序【中等】/solutions/1/1.py', r"""class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        f = [0, 0, 0]
        for x in nums:
            if x == 1:
                f[0] += 1
            elif x == 2:
                f[1] = max(f[0], f[1]) + 1
            else:
                f[2] = max(f[0], f[1], f[2]) + 1
        return len(nums) - max(f)
""".lstrip())

# ============================================================
# 2827 - 范围中美丽整数的数目 (数位 DP)
# ============================================================
w('2827. 范围中美丽整数的数目【困难】/solutions/1/1.js', r"""/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function(low, high, k) {
  const count = (num) => {
    if (num <= 0) return 0
    const s = String(num)
    const n = s.length
    const memo = new Map()
    const dp = (pos, tight, mod, diff, started) => {
      if (pos === n) return started && mod === 0 && diff === 0 ? 1 : 0
      const key = `${pos},${tight},${mod},${diff},${started}`
      if (memo.has(key)) return memo.get(key)
      const limit = tight ? +s[pos] : 9
      let res = 0
      for (let d = 0; d <= limit; d++) {
        const nt = tight && d === limit
        if (!started && d === 0) {
          res += dp(pos + 1, nt, 0, 0, false)
        } else {
          const nm = (mod * 10 + d) % k
          const nd = diff + (d % 2 === 0 ? 1 : -1)
          res += dp(pos + 1, nt, nm, nd, true)
        }
      }
      memo.set(key, res)
      return res
    }
    return dp(0, true, 0, 0, false)
  }
  return count(high) - count(low - 1)
}
""".lstrip())

w('2827. 范围中美丽整数的数目【困难】/solutions/1/1.c', r"""int k_val;
char digits[12];
int n;
long long memo[11][2][20][22][2];
int visited[11][2][20][22][2];
int vid;

long long dp(int pos, int tight, int mod, int diff, int started) {
    if (pos == n) return started && mod == 0 && diff == 10 ? 1 : 0;
    if (visited[pos][tight][mod][diff][started] == vid)
        return memo[pos][tight][mod][diff][started];
    visited[pos][tight][mod][diff][started] = vid;
    int limit = tight ? digits[pos] - '0' : 9;
    long long res = 0;
    for (int d = 0; d <= limit; d++) {
        int nt = tight && d == limit;
        if (!started && d == 0) {
            res += dp(pos + 1, nt, 0, 10, 0);
        } else {
            int nm = (mod * 10 + d) % k_val;
            int nd = diff + (d % 2 == 0 ? 1 : -1);
            res += dp(pos + 1, nt, nm, nd, 1);
        }
    }
    memo[pos][tight][mod][diff][started] = res;
    return res;
}

long long countBeautiful(long long num) {
    if (num <= 0) return 0;
    n = sprintf(digits, "%lld", num);
    vid++;
    return dp(0, 1, 0, 10, 0);
}

int numberOfBeautifulIntegers(int low, int high, int k) {
    k_val = k;
    vid = 0;
    memset(visited, 0, sizeof(visited));
    return (int)(countBeautiful(high) - countBeautiful((long long)low - 1));
}
""".lstrip())

w('2827. 范围中美丽整数的数目【困难】/solutions/1/1.py', r"""class Solution:
    def numberOfBeautifulIntegers(self, low: int, high: int, k: int) -> int:
        def count(num: int) -> int:
            if num <= 0:
                return 0
            s = str(num)
            n = len(s)

            @cache
            def dp(pos, tight, mod, diff, started):
                if pos == n:
                    return 1 if started and mod == 0 and diff == 0 else 0
                limit = int(s[pos]) if tight else 9
                res = 0
                for d in range(limit + 1):
                    nt = tight and d == limit
                    if not started and d == 0:
                        res += dp(pos + 1, nt, 0, 0, False)
                    else:
                        nm = (mod * 10 + d) % k
                        nd = diff + (1 if d % 2 == 0 else -1)
                        res += dp(pos + 1, nt, nm, nd, True)
                return res

            result = dp(0, True, 0, 0, False)
            dp.cache_clear()
            return result

        return count(high) - count(low - 1)
""".lstrip())

# ============================================================
# 2829 - k-avoiding 数组的最小总和
# ============================================================
w('2829. k-avoiding 数组的最小总和【中等】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
  const m = Math.min(n, Math.floor((k - 1) / 2))
  const rem = n - m
  return m * (m + 1) / 2 + rem * k + rem * (rem - 1) / 2
}
""".lstrip())

w('2829. k-avoiding 数组的最小总和【中等】/solutions/1/1.c', r"""int minimumSum(int n, int k) {
    int m = n < (k - 1) / 2 ? n : (k - 1) / 2;
    long long sum = (long long)m * (m + 1) / 2;
    int rem = n - m;
    sum += (long long)rem * k + (long long)rem * (rem - 1) / 2;
    return (int)sum;
}
""".lstrip())

w('2829. k-avoiding 数组的最小总和【中等】/solutions/1/1.py', r"""class Solution:
    def minimumSum(self, n: int, k: int) -> int:
        m = min(n, (k - 1) // 2)
        rem = n - m
        return m * (m + 1) // 2 + rem * k + rem * (rem - 1) // 2
""".lstrip())

# ============================================================
# 2830 - 销售利润最大化
# ============================================================
w('2830. 销售利润最大化【中等】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function(n, offers) {
  const groups = Array.from({length: n}, () => [])
  for (const [s, e, g] of offers) {
    groups[e].push([s, g])
  }
  const dp = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    dp[i + 1] = dp[i]
    for (const [s, g] of groups[i]) {
      dp[i + 1] = Math.max(dp[i + 1], dp[s] + g)
    }
  }
  return dp[n]
}
""".lstrip())

w('2830. 销售利润最大化【中等】/solutions/1/1.c', r"""typedef struct { int start, gold; } Offer;

int maximizeTheProfit(int n, int** offers, int offersSize, int* offersColSize) {
    // 按 end 分组
    int* gcnt = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < offersSize; i++) gcnt[offers[i][1]]++;
    Offer** groups = (Offer**)malloc(n * sizeof(Offer*));
    for (int i = 0; i < n; i++) {
        groups[i] = (Offer*)malloc(gcnt[i] * sizeof(Offer));
        gcnt[i] = 0;
    }
    for (int i = 0; i < offersSize; i++) {
        int e = offers[i][1];
        groups[e][gcnt[e]++] = (Offer){offers[i][0], offers[i][2]};
    }

    int* dp = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        dp[i + 1] = dp[i];
        for (int j = 0; j < gcnt[i]; j++) {
            int val = dp[groups[i][j].start] + groups[i][j].gold;
            if (val > dp[i + 1]) dp[i + 1] = val;
        }
    }
    int ans = dp[n];
    for (int i = 0; i < n; i++) free(groups[i]);
    free(groups); free(gcnt); free(dp);
    return ans;
}
""".lstrip())

w('2830. 销售利润最大化【中等】/solutions/1/1.py', r"""class Solution:
    def maximizeTheProfit(self, n: int, offers: List[List[int]]) -> int:
        groups = [[] for _ in range(n)]
        for s, e, g in offers:
            groups[e].append((s, g))
        dp = [0] * (n + 1)
        for i in range(n):
            dp[i + 1] = dp[i]
            for s, g in groups[i]:
                dp[i + 1] = max(dp[i + 1], dp[s] + g)
        return dp[n]
""".lstrip())

# ============================================================
# 2831 - 找出最长等值子数组
# ============================================================
w('2831. 找出最长等值子数组【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
  const groups = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!groups.has(nums[i])) groups.set(nums[i], [])
    groups.get(nums[i]).push(i)
  }
  let ans = 0
  for (const indices of groups.values()) {
    let l = 0
    for (let r = 0; r < indices.length; r++) {
      while (indices[r] - indices[l] + 1 - (r - l + 1) > k) l++
      ans = Math.max(ans, r - l + 1)
    }
  }
  return ans
}
""".lstrip())

w('2831. 找出最长等值子数组【中等】/solutions/1/1.c', r"""int longestEqualSubarray(int* nums, int numsSize, int k) {
    int** groups = (int**)calloc(numsSize + 1, sizeof(int*));
    int* gsize = (int*)calloc(numsSize + 1, sizeof(int));
    int* gcap = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int v = nums[i];
        if (gsize[v] == gcap[v]) {
            gcap[v] = gcap[v] ? gcap[v] * 2 : 4;
            groups[v] = (int*)realloc(groups[v], gcap[v] * sizeof(int));
        }
        groups[v][gsize[v]++] = i;
    }
    int ans = 0;
    for (int v = 1; v <= numsSize; v++) {
        if (!gsize[v]) continue;
        int l = 0;
        for (int r = 0; r < gsize[v]; r++) {
            while (groups[v][r] - groups[v][l] + 1 - (r - l + 1) > k) l++;
            int len = r - l + 1;
            if (len > ans) ans = len;
        }
        free(groups[v]);
    }
    free(groups); free(gsize); free(gcap);
    return ans;
}
""".lstrip())

w('2831. 找出最长等值子数组【中等】/solutions/1/1.py', r"""class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        groups = defaultdict(list)
        for i, v in enumerate(nums):
            groups[v].append(i)
        ans = 0
        for indices in groups.values():
            l = 0
            for r in range(len(indices)):
                while indices[r] - indices[l] + 1 - (r - l + 1) > k:
                    l += 1
                ans = max(ans, r - l + 1)
        return ans
""".lstrip())

# ============================================================
# 2834 - 找出美丽数组的最小和
# ============================================================
w('2834. 找出美丽数组的最小和【中等】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
  const MOD = 1000000007n
  const inv2 = 500000004n
  const N = BigInt(n), T = BigInt(target)
  const M = N < (T - 1n) / 2n ? N : (T - 1n) / 2n
  const rem = N - M
  const s1 = M % MOD * ((M + 1n) % MOD) % MOD * inv2 % MOD
  const s2 = rem > 0n
    ? (rem % MOD * (T % MOD) % MOD + rem % MOD * ((rem - 1n) % MOD) % MOD * inv2 % MOD) % MOD
    : 0n
  return Number((s1 + s2) % MOD)
}
""".lstrip())

w('2834. 找出美丽数组的最小和【中等】/solutions/1/1.c', r"""int minimumPossibleSum(int n, int target) {
    long long MOD = 1000000007;
    long long N = n, T = target;
    long long half = (T - 1) / 2;
    long long M = N < half ? N : half;
    long long rem = N - M;
    long long inv2 = 500000004;
    long long s1 = M % MOD * ((M + 1) % MOD) % MOD * inv2 % MOD;
    long long s2 = 0;
    if (rem > 0)
        s2 = (rem % MOD * (T % MOD) % MOD + rem % MOD * ((rem - 1) % MOD) % MOD * inv2 % MOD) % MOD;
    return (int)((s1 + s2) % MOD);
}
""".lstrip())

w('2834. 找出美丽数组的最小和【中等】/solutions/1/1.py', r"""class Solution:
    def minimumPossibleSum(self, n: int, target: int) -> int:
        MOD = 10 ** 9 + 7
        m = min(n, (target - 1) // 2)
        rem = n - m
        s1 = m * (m + 1) // 2
        s2 = rem * target + rem * (rem - 1) // 2
        return (s1 + s2) % MOD
""".lstrip())

# ============================================================
# 2835 - 使子序列的和等于目标的最少操作次数
# ============================================================
w('2835. 使子序列的和等于目标的最少操作次数【困难】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function(nums, target) {
  let sum = 0
  const cnt = new Array(32).fill(0)
  for (const x of nums) {
    sum += x
    let b = 0, v = x
    while (v > 1) { v >>= 1; b++ }
    cnt[b]++
  }
  if (sum < target) return -1
  let ops = 0
  for (let i = 0; i < 31; i++) {
    if ((target >> i) & 1) {
      if (cnt[i] > 0) {
        cnt[i]--
      } else {
        let j = i + 1
        while (cnt[j] === 0) j++
        ops += j - i
        cnt[j]--
        for (let l = j - 1; l > i; l--) cnt[l]++
      }
    }
    cnt[i + 1] += cnt[i] >> 1
  }
  return ops
}
""".lstrip())

w('2835. 使子序列的和等于目标的最少操作次数【困难】/solutions/1/1.c', r"""int minOperations(int* nums, int numsSize, int target) {
    long long sum = 0;
    int cnt[32] = {0};
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        int b = 0, v = nums[i];
        while (v > 1) { v >>= 1; b++; }
        cnt[b]++;
    }
    if (sum < target) return -1;
    int ops = 0;
    for (int i = 0; i < 31; i++) {
        if ((target >> i) & 1) {
            if (cnt[i] > 0) {
                cnt[i]--;
            } else {
                int j = i + 1;
                while (cnt[j] == 0) j++;
                ops += j - i;
                cnt[j]--;
                for (int l = j - 1; l > i; l--) cnt[l]++;
            }
        }
        cnt[i + 1] += cnt[i] >> 1;
    }
    return ops;
}
""".lstrip())

w('2835. 使子序列的和等于目标的最少操作次数【困难】/solutions/1/1.py', r"""class Solution:
    def minOperations(self, nums: List[int], target: int) -> int:
        if sum(nums) < target:
            return -1
        cnt = [0] * 32
        for x in nums:
            cnt[x.bit_length() - 1] += 1
        ops = 0
        for i in range(31):
            if (target >> i) & 1:
                if cnt[i] > 0:
                    cnt[i] -= 1
                else:
                    j = i + 1
                    while cnt[j] == 0:
                        j += 1
                    ops += j - i
                    cnt[j] -= 1
                    for l in range(j - 1, i, -1):
                        cnt[l] += 1
            cnt[i + 1] += cnt[i] >> 1
        return ops
""".lstrip())

print("Part 1 done: 2823-2835")
