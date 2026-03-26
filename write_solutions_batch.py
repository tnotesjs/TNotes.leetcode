#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

BASE = os.path.dirname(os.path.abspath(__file__))
NOTES = os.path.join(BASE, 'notes')

solutions = {}

# ==================== 2901 ====================
solutions['2901. 最长相邻不相等子序列 II【中等】'] = {
'1.js': r"""/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(n, words, groups) {
  const dp = new Array(n).fill(1)
  const prev = new Array(n).fill(-1)

  const hamming = (a, b) => {
    if (a.length !== b.length) return -1
    let d = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) d++
      if (d > 1) return d
    }
    return d
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && hamming(words[i], words[j]) === 1) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          prev[i] = j
        }
      }
    }
  }

  let maxIdx = 0
  for (let i = 1; i < n; i++) {
    if (dp[i] > dp[maxIdx]) maxIdx = i
  }

  const res = []
  for (let i = maxIdx; i !== -1; i = prev[i]) {
    res.push(words[i])
  }
  return res.reverse()
}
""",
'1.c': r"""int hamming(char* a, char* b) {
    int la = strlen(a), lb = strlen(b);
    if (la != lb) return -1;
    int d = 0;
    for (int i = 0; i < la; i++) {
        if (a[i] != b[i]) d++;
        if (d > 1) return d;
    }
    return d;
}

char** getWordsInLongestSubsequence(int n, char** words, int wordsSize, int* groups, int groupsSize, int* returnSize) {
    int* dp = (int*)malloc(n * sizeof(int));
    int* prev = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { dp[i] = 1; prev[i] = -1; }

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (groups[i] != groups[j] && hamming(words[i], words[j]) == 1) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }
    }

    int maxIdx = 0;
    for (int i = 1; i < n; i++) {
        if (dp[i] > dp[maxIdx]) maxIdx = i;
    }

    *returnSize = dp[maxIdx];
    char** res = (char**)malloc(*returnSize * sizeof(char*));
    int idx = *returnSize - 1;
    for (int i = maxIdx; i != -1; i = prev[i]) {
        res[idx--] = words[i];
    }

    free(dp);
    free(prev);
    return res;
}
""",
'1.py': r"""class Solution:
    def getWordsInLongestSubsequence(self, n: int, words: list[str], groups: list[int]) -> list[str]:
        dp = [1] * n
        prev = [-1] * n

        def hamming(a: str, b: str) -> int:
            if len(a) != len(b):
                return -1
            d = 0
            for x, y in zip(a, b):
                if x != y:
                    d += 1
                    if d > 1:
                        return d
            return d

        for i in range(1, n):
            for j in range(i):
                if groups[i] != groups[j] and hamming(words[i], words[j]) == 1:
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j] + 1
                        prev[i] = j

        max_idx = max(range(n), key=lambda i: dp[i])
        res = []
        i = max_idx
        while i != -1:
            res.append(words[i])
            i = prev[i]
        return res[::-1]
"""}

# ==================== 2902 ====================
solutions['2902. 和带限制的子多重集合的数目【困难】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var countSubMultisets = function(nums, l, r) {
  const MOD = 1000000007
  const cnt = new Map()
  let total = 0
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) || 0) + 1)
    total += x
  }
  if (total < l) return 0
  r = Math.min(r, total)

  const zeros = cnt.get(0) || 0
  cnt.delete(0)

  const dp = new Array(r + 1).fill(0)
  dp[0] = 1

  for (const [v, c] of cnt) {
    const newDp = new Array(r + 1).fill(0)
    for (let rem = 0; rem < v; rem++) {
      let windowSum = 0
      let count = 0
      for (let j = rem; j <= r; j += v) {
        windowSum = (windowSum + dp[j]) % MOD
        count++
        if (count > c + 1) {
          windowSum = (windowSum - dp[j - (c + 1) * v] + MOD) % MOD
        }
        newDp[j] = windowSum
      }
    }
    for (let i = 0; i <= r; i++) dp[i] = newDp[i]
  }

  let ans = 0
  for (let i = l; i <= r; i++) {
    ans = (ans + dp[i]) % MOD
  }
  ans = ans % MOD * ((zeros + 1) % MOD) % MOD
  return ans
}
""",
'1.c': r"""int countSubMultisets(int* nums, int numsSize, int l, int r) {
    long long MOD = 1000000007;
    int maxVal = 0;
    long long total = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
        total += nums[i];
    }
    if (total < l) return 0;
    if (r > total) r = (int)total;

    int* cnt = (int*)calloc(maxVal + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) cnt[nums[i]]++;

    int zeros = cnt[0];

    long long* dp = (long long*)calloc(r + 1, sizeof(long long));
    dp[0] = 1;

    for (int v = 1; v <= maxVal; v++) {
        if (cnt[v] == 0) continue;
        int c = cnt[v];
        long long* newDp = (long long*)calloc(r + 1, sizeof(long long));
        for (int rem = 0; rem < v; rem++) {
            long long windowSum = 0;
            int count = 0;
            for (int j = rem; j <= r; j += v) {
                windowSum = (windowSum + dp[j]) % MOD;
                count++;
                if (count > c + 1) {
                    windowSum = (windowSum - dp[j - (c + 1) * v] + MOD) % MOD;
                }
                newDp[j] = windowSum;
            }
        }
        for (int i = 0; i <= r; i++) dp[i] = newDp[i];
        free(newDp);
    }

    long long ans = 0;
    for (int i = l; i <= r; i++) {
        ans = (ans + dp[i]) % MOD;
    }
    ans = ans % MOD * ((zeros + 1) % MOD) % MOD;

    free(dp);
    free(cnt);
    return (int)ans;
}
""",
'1.py': r"""class Solution:
    def countSubMultisets(self, nums: list[int], l: int, r: int) -> int:
        MOD = 10**9 + 7
        from collections import Counter
        cnt = Counter(nums)
        total = sum(nums)
        if total < l:
            return 0
        r = min(r, total)

        zeros = cnt.pop(0, 0)

        dp = [0] * (r + 1)
        dp[0] = 1

        for v, c in cnt.items():
            new_dp = [0] * (r + 1)
            for rem in range(v):
                window_sum = 0
                count = 0
                j = rem
                while j <= r:
                    window_sum = (window_sum + dp[j]) % MOD
                    count += 1
                    if count > c + 1:
                        window_sum = (window_sum - dp[j - (c + 1) * v]) % MOD
                    new_dp[j] = window_sum
                    j += v
            dp = new_dp

        ans = sum(dp[l:r + 1]) % MOD
        ans = ans * (zeros + 1) % MOD
        return ans
"""}

# ==================== 2904 ====================
solutions['2904. 最短且字典序最小的美丽子字符串【中等】'] = {
'1.js': r"""/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
  const n = s.length
  let ones = 0
  let res = ''
  for (let l = 0, r = 0; r < n; r++) {
    ones += s[r] === '1' ? 1 : 0
    while (ones > k || (ones === k && s[l] === '0')) {
      ones -= s[l] === '1' ? 1 : 0
      l++
    }
    if (ones === k) {
      const sub = s.substring(l, r + 1)
      if (res === '' || sub.length < res.length || (sub.length === res.length && sub < res)) {
        res = sub
      }
    }
  }
  return res
}
""",
'1.c': r"""char* shortestBeautifulSubstring(char* s, int k) {
    int n = strlen(s);
    int ones = 0;
    int bestL = -1, bestLen = n + 1;
    for (int l = 0, r = 0; r < n; r++) {
        ones += s[r] == '1';
        while (ones > k || (ones == k && s[l] == '0')) {
            ones -= s[l] == '1';
            l++;
        }
        if (ones == k) {
            int len = r - l + 1;
            if (len < bestLen || (len == bestLen && strncmp(s + l, s + bestL, len) < 0)) {
                bestL = l;
                bestLen = len;
            }
        }
    }
    if (bestL == -1) {
        char* res = (char*)malloc(1);
        res[0] = '\0';
        return res;
    }
    char* res = (char*)malloc(bestLen + 1);
    strncpy(res, s + bestL, bestLen);
    res[bestLen] = '\0';
    return res;
}
""",
'1.py': r"""class Solution:
    def shortestBeautifulSubstring(self, s: str, k: int) -> str:
        n = len(s)
        ones = 0
        res = ''
        l = 0
        for r in range(n):
            ones += s[r] == '1'
            while ones > k or (ones == k and s[l] == '0'):
                ones -= s[l] == '1'
                l += 1
            if ones == k:
                sub = s[l:r + 1]
                if not res or len(sub) < len(res) or (len(sub) == len(res) and sub < res):
                    res = sub
        return res
"""}

# ==================== 2905 ====================
solutions['2905. 找出满足差值条件的下标 II【中等】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  const n = nums.length
  let minIdx = 0, maxIdx = 0
  for (let i = indexDifference; i < n; i++) {
    const j = i - indexDifference
    if (nums[j] < nums[minIdx]) minIdx = j
    if (nums[j] > nums[maxIdx]) maxIdx = j
    if (Math.abs(nums[i] - nums[minIdx]) >= valueDifference) return [minIdx, i]
    if (Math.abs(nums[i] - nums[maxIdx]) >= valueDifference) return [maxIdx, i]
  }
  return [-1, -1]
}
""",
'1.c': r"""int* findIndices(int* nums, int numsSize, int indexDifference, int valueDifference, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(2 * sizeof(int));
    int minIdx = 0, maxIdx = 0;
    for (int i = indexDifference; i < numsSize; i++) {
        int j = i - indexDifference;
        if (nums[j] < nums[minIdx]) minIdx = j;
        if (nums[j] > nums[maxIdx]) maxIdx = j;
        long long d1 = (long long)nums[i] - nums[minIdx];
        if (d1 < 0) d1 = -d1;
        if (d1 >= valueDifference) { res[0] = minIdx; res[1] = i; return res; }
        long long d2 = (long long)nums[i] - nums[maxIdx];
        if (d2 < 0) d2 = -d2;
        if (d2 >= valueDifference) { res[0] = maxIdx; res[1] = i; return res; }
    }
    res[0] = -1; res[1] = -1;
    return res;
}
""",
'1.py': r"""class Solution:
    def findIndices(self, nums: list[int], indexDifference: int, valueDifference: int) -> list[int]:
        n = len(nums)
        min_idx = max_idx = 0
        for i in range(indexDifference, n):
            j = i - indexDifference
            if nums[j] < nums[min_idx]:
                min_idx = j
            if nums[j] > nums[max_idx]:
                max_idx = j
            if abs(nums[i] - nums[min_idx]) >= valueDifference:
                return [min_idx, i]
            if abs(nums[i] - nums[max_idx]) >= valueDifference:
                return [max_idx, i]
        return [-1, -1]
"""}

# ==================== 2906 ====================
solutions['2906. 构造乘积矩阵【中等】'] = {
'1.js': r"""/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
  const n = grid.length, m = grid[0].length
  const MOD = 12345
  const p = Array.from({length: n}, () => new Array(m))

  // 后缀积
  let suf = 1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      p[i][j] = suf
      suf = suf * (grid[i][j] % MOD) % MOD
    }
  }

  // 前缀积
  let pre = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      p[i][j] = p[i][j] * pre % MOD
      pre = pre * (grid[i][j] % MOD) % MOD
    }
  }

  return p
}
""",
'1.c': r"""int** constructProductMatrix(int** grid, int gridSize, int* gridColSize, int* returnSize, int** returnColumnSizes) {
    int n = gridSize, m = gridColSize[0];
    long long MOD = 12345;

    int** p = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) p[i] = (int*)malloc(m * sizeof(int));

    long long suf = 1;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = m - 1; j >= 0; j--) {
            p[i][j] = (int)suf;
            suf = suf * (grid[i][j] % MOD) % MOD;
        }
    }

    long long pre = 1;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            p[i][j] = (int)((long long)p[i][j] * pre % MOD);
            pre = pre * (grid[i][j] % MOD) % MOD;
        }
    }

    *returnSize = n;
    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) (*returnColumnSizes)[i] = m;
    return p;
}
""",
'1.py': r"""class Solution:
    def constructProductMatrix(self, grid: list[list[int]]) -> list[list[int]]:
        n, m = len(grid), len(grid[0])
        MOD = 12345
        p = [[0] * m for _ in range(n)]

        suf = 1
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                p[i][j] = suf
                suf = suf * (grid[i][j] % MOD) % MOD

        pre = 1
        for i in range(n):
            for j in range(m):
                p[i][j] = p[i][j] * pre % MOD
                pre = pre * (grid[i][j] % MOD) % MOD

        return p
"""}

# ==================== 2909 ====================
solutions['2909. 元素和最小的山形三元组 II【中等】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const n = nums.length
  const rightMin = new Array(n)
  rightMin[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i])
  }

  let res = -1
  let leftMin = nums[0]
  for (let j = 1; j < n - 1; j++) {
    if (leftMin < nums[j] && rightMin[j + 1] < nums[j]) {
      const sum = leftMin + nums[j] + rightMin[j + 1]
      if (res === -1 || sum < res) res = sum
    }
    leftMin = Math.min(leftMin, nums[j])
  }
  return res
}
""",
'1.c': r"""int minimumSum(int* nums, int numsSize) {
    int n = numsSize;
    int* rightMin = (int*)malloc(n * sizeof(int));
    rightMin[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        rightMin[i] = nums[i] < rightMin[i + 1] ? nums[i] : rightMin[i + 1];
    }

    long long res = -1;
    int leftMin = nums[0];
    for (int j = 1; j < n - 1; j++) {
        if (leftMin < nums[j] && rightMin[j + 1] < nums[j]) {
            long long sum = (long long)leftMin + nums[j] + rightMin[j + 1];
            if (res == -1 || sum < res) res = sum;
        }
        if (nums[j] < leftMin) leftMin = nums[j];
    }

    free(rightMin);
    return (int)res;
}
""",
'1.py': r"""class Solution:
    def minimumSum(self, nums: list[int]) -> int:
        n = len(nums)
        right_min = [0] * n
        right_min[-1] = nums[-1]
        for i in range(n - 2, -1, -1):
            right_min[i] = min(right_min[i + 1], nums[i])

        res = -1
        left_min = nums[0]
        for j in range(1, n - 1):
            if left_min < nums[j] and right_min[j + 1] < nums[j]:
                s = left_min + nums[j] + right_min[j + 1]
                if res == -1 or s < res:
                    res = s
            left_min = min(left_min, nums[j])
        return res
"""}

# ==================== 2910 ====================
solutions['2910. 合法分组的最少组数【中等】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function(nums) {
  const cnt = new Map()
  for (const x of nums) cnt.set(x, (cnt.get(x) || 0) + 1)
  const freqs = [...cnt.values()]
  const minFreq = Math.min(...freqs)

  for (let k = minFreq; k >= 1; k--) {
    let total = 0
    let valid = true
    for (const f of freqs) {
      const g = Math.ceil(f / (k + 1))
      if (g * k > f) { valid = false; break }
      total += g
    }
    if (valid) return total
  }
  return nums.length
}
""",
'1.c': r"""int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int minGroupsForValidAssignment(int* nums, int numsSize) {
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    memcpy(sorted, nums, numsSize * sizeof(int));
    qsort(sorted, numsSize, sizeof(int), cmp);

    int* freqs = (int*)malloc(numsSize * sizeof(int));
    int fSize = 0;
    int minFreq = numsSize;
    int i = 0;
    while (i < numsSize) {
        int j = i;
        while (j < numsSize && sorted[j] == sorted[i]) j++;
        freqs[fSize++] = j - i;
        if (j - i < minFreq) minFreq = j - i;
        i = j;
    }

    for (int k = minFreq; k >= 1; k--) {
        int total = 0;
        int valid = 1;
        for (int f = 0; f < fSize; f++) {
            int g = (freqs[f] + k) / (k + 1);
            if ((long long)g * k > freqs[f]) { valid = 0; break; }
            total += g;
        }
        if (valid) { free(sorted); free(freqs); return total; }
    }

    free(sorted);
    free(freqs);
    return numsSize;
}
""",
'1.py': r"""class Solution:
    def minGroupsForValidAssignment(self, nums: list[int]) -> int:
        from collections import Counter
        freqs = list(Counter(nums).values())
        min_freq = min(freqs)

        for k in range(min_freq, 0, -1):
            total = 0
            valid = True
            for f in freqs:
                g = (f + k) // (k + 1)
                if g * k > f:
                    valid = False
                    break
                total += g
            if valid:
                return total
        return len(nums)
"""}

# ==================== 2911 ====================
solutions['2911. 得到 K 个半回文串的最少修改次数【困难】'] = {
'1.js': r"""/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
  const n = s.length

  // cost[i][j] = 将 s[i..j] 变成半回文串的最少修改次数
  const cost = Array.from({length: n}, () => new Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const len = j - i + 1
      let best = len
      for (let d = 1; d < len; d++) {
        if (len % d !== 0) continue
        let changes = 0
        for (let r = 0; r < d; r++) {
          const group = []
          for (let p = i + r; p <= j; p += d) group.push(s[p])
          const gl = group.length
          for (let a = 0; a < (gl >> 1); a++) {
            if (group[a] !== group[gl - 1 - a]) changes++
          }
        }
        best = Math.min(best, changes)
      }
      cost[i][j] = best
    }
  }

  const INF = 1e9
  const dp = Array.from({length: n + 1}, () => new Array(k + 1).fill(INF))
  dp[0][0] = 0

  for (let i = 1; i <= n; i++) {
    for (let t = 1; t <= Math.min(i >> 1, k); t++) {
      for (let j = 2 * (t - 1); j <= i - 2; j++) {
        if (dp[j][t - 1] < INF) {
          dp[i][t] = Math.min(dp[i][t], dp[j][t - 1] + cost[j][i - 1])
        }
      }
    }
  }

  return dp[n][k]
}
""",
'1.c': r"""int minimumChanges(char* s, int k) {
    int n = strlen(s);

    int cost[200][200];
    memset(cost, 0, sizeof(cost));

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int len = j - i + 1;
            int best = len;
            for (int d = 1; d < len; d++) {
                if (len % d != 0) continue;
                int changes = 0;
                for (int r = 0; r < d; r++) {
                    int gSize = 0;
                    for (int p = i + r; p <= j; p += d) gSize++;
                    for (int a = 0; a < gSize / 2; a++) {
                        int lp = i + r + a * d;
                        int rp = i + r + (gSize - 1 - a) * d;
                        if (s[lp] != s[rp]) changes++;
                    }
                }
                if (changes < best) best = changes;
            }
            cost[i][j] = best;
        }
    }

    int dp[201][101];
    for (int i = 0; i <= n; i++)
        for (int t = 0; t <= k; t++)
            dp[i][t] = 1000000;
    dp[0][0] = 0;

    for (int i = 1; i <= n; i++) {
        for (int t = 1; t <= k && t * 2 <= i; t++) {
            for (int j = 2 * (t - 1); j <= i - 2; j++) {
                if (dp[j][t - 1] < 1000000) {
                    int val = dp[j][t - 1] + cost[j][i - 1];
                    if (val < dp[i][t]) dp[i][t] = val;
                }
            }
        }
    }

    return dp[n][k];
}
""",
'1.py': r"""class Solution:
    def minimumChanges(self, s: str, k: int) -> int:
        n = len(s)

        cost = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(i + 1, n):
                length = j - i + 1
                best = length
                for d in range(1, length):
                    if length % d != 0:
                        continue
                    changes = 0
                    for r in range(d):
                        group = []
                        p = i + r
                        while p <= j:
                            group.append(s[p])
                            p += d
                        gl = len(group)
                        for a in range(gl // 2):
                            if group[a] != group[gl - 1 - a]:
                                changes += 1
                    best = min(best, changes)
                cost[i][j] = best

        INF = float('inf')
        dp = [[INF] * (k + 1) for _ in range(n + 1)]
        dp[0][0] = 0

        for i in range(1, n + 1):
            for t in range(1, min(i // 2, k) + 1):
                for j in range(2 * (t - 1), i - 1):
                    if dp[j][t - 1] < INF:
                        dp[i][t] = min(dp[i][t], dp[j][t - 1] + cost[j][i - 1])

        return dp[n][k]
"""}

# ==================== 2914 ====================
solutions['2914. 使二进制字符串变美丽的最少修改次数【中等】'] = {
'1.js': r"""/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) res++
  }
  return res
}
""",
'1.c': r"""int minChanges(char* s) {
    int res = 0;
    int n = strlen(s);
    for (int i = 0; i < n; i += 2) {
        if (s[i] != s[i + 1]) res++;
    }
    return res;
}
""",
'1.py': r"""class Solution:
    def minChanges(self, s: str) -> int:
        res = 0
        for i in range(0, len(s), 2):
            if s[i] != s[i + 1]:
                res += 1
        return res
"""}

# ==================== 2915 ====================
solutions['2915. 和为目标值的最长子序列的长度【中等】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
  const dp = new Array(target + 1).fill(-1)
  dp[0] = 0
  for (const x of nums) {
    for (let j = target; j >= x; j--) {
      if (dp[j - x] !== -1) {
        dp[j] = Math.max(dp[j], dp[j - x] + 1)
      }
    }
  }
  return dp[target]
}
""",
'1.c': r"""int lengthOfLongestSubsequence(int* nums, int numsSize, int target) {
    int* dp = (int*)malloc((target + 1) * sizeof(int));
    for (int i = 0; i <= target; i++) dp[i] = -1;
    dp[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = target; j >= nums[i]; j--) {
            if (dp[j - nums[i]] != -1) {
                int val = dp[j - nums[i]] + 1;
                if (val > dp[j]) dp[j] = val;
            }
        }
    }
    int res = dp[target];
    free(dp);
    return res;
}
""",
'1.py': r"""class Solution:
    def lengthOfLongestSubsequence(self, nums: list[int], target: int) -> int:
        dp = [-1] * (target + 1)
        dp[0] = 0
        for x in nums:
            for j in range(target, x - 1, -1):
                if dp[j - x] != -1:
                    dp[j] = max(dp[j], dp[j - x] + 1)
        return dp[target]
"""}

# ==================== 2916 ====================
solutions['2916. 子数组不同元素数目的平方和 II【困难】'] = {
'1.js': r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  const MOD = 1000000007n
  const n = nums.length
  const size = 4 * n
  const sumD = new BigInt64Array(size)
  const sumD2 = new BigInt64Array(size)
  const lazy = new BigInt64Array(size)
  const cnt = new Int32Array(size)

  function build(node, l, r) {
    cnt[node] = r - l + 1
    if (l === r) return
    const mid = (l + r) >> 1
    build(2 * node, l, mid)
    build(2 * node + 1, mid + 1, r)
  }

  function pushDown(node) {
    if (lazy[node] !== 0n) {
      const val = lazy[node]
      for (const child of [2 * node, 2 * node + 1]) {
        const c = BigInt(cnt[child])
        sumD2[child] = (sumD2[child] + 2n * val % MOD * sumD[child] % MOD + val * val % MOD * c % MOD) % MOD
        sumD[child] = (sumD[child] + val * c % MOD) % MOD
        lazy[child] = (lazy[child] + val) % MOD
      }
      lazy[node] = 0n
    }
  }

  function update(node, l, r, ql, qr) {
    if (ql > r || qr < l) return
    if (ql <= l && r <= qr) {
      const c = BigInt(cnt[node])
      sumD2[node] = (sumD2[node] + 2n * sumD[node] % MOD + c) % MOD
      sumD[node] = (sumD[node] + c) % MOD
      lazy[node] = (lazy[node] + 1n) % MOD
      return
    }
    pushDown(node)
    const mid = (l + r) >> 1
    update(2 * node, l, mid, ql, qr)
    update(2 * node + 1, mid + 1, r, ql, qr)
    sumD[node] = (sumD[2 * node] + sumD[2 * node + 1]) % MOD
    sumD2[node] = (sumD2[2 * node] + sumD2[2 * node + 1]) % MOD
  }

  function query(node, l, r, ql, qr) {
    if (ql > r || qr < l) return 0n
    if (ql <= l && r <= qr) return sumD2[node]
    pushDown(node)
    const mid = (l + r) >> 1
    return (query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid + 1, r, ql, qr)) % MOD
  }

  build(1, 0, n - 1)
  const prev = new Map()
  let ans = 0n

  for (let i = 0; i < n; i++) {
    const p = prev.has(nums[i]) ? prev.get(nums[i]) + 1 : 0
    update(1, 0, n - 1, p, i)
    prev.set(nums[i], i)
    ans = (ans + query(1, 0, n - 1, 0, i)) % MOD
  }

  return Number(ans)
}
""",
'1.c': r"""long long sumD_arr[400005], sumD2_arr[400005], lz[400005];
int cnt_arr[400005];
const long long MOD_VAL = 1000000007;

void build(int node, int l, int r) {
    sumD_arr[node] = sumD2_arr[node] = lz[node] = 0;
    cnt_arr[node] = r - l + 1;
    if (l == r) return;
    int mid = (l + r) / 2;
    build(2 * node, l, mid);
    build(2 * node + 1, mid + 1, r);
}

void pushDown(int node) {
    if (lz[node]) {
        long long val = lz[node];
        for (int i = 0; i < 2; i++) {
            int child = 2 * node + i;
            long long c = cnt_arr[child];
            sumD2_arr[child] = (sumD2_arr[child] + 2 * val % MOD_VAL * sumD_arr[child] % MOD_VAL + val * val % MOD_VAL * c % MOD_VAL) % MOD_VAL;
            sumD_arr[child] = (sumD_arr[child] + val * c % MOD_VAL) % MOD_VAL;
            lz[child] = (lz[child] + val) % MOD_VAL;
        }
        lz[node] = 0;
    }
}

void update(int node, int l, int r, int ql, int qr) {
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        long long c = cnt_arr[node];
        sumD2_arr[node] = (sumD2_arr[node] + 2 * sumD_arr[node] % MOD_VAL + c) % MOD_VAL;
        sumD_arr[node] = (sumD_arr[node] + c) % MOD_VAL;
        lz[node] = (lz[node] + 1) % MOD_VAL;
        return;
    }
    pushDown(node);
    int mid = (l + r) / 2;
    update(2 * node, l, mid, ql, qr);
    update(2 * node + 1, mid + 1, r, ql, qr);
    sumD_arr[node] = (sumD_arr[2 * node] + sumD_arr[2 * node + 1]) % MOD_VAL;
    sumD2_arr[node] = (sumD2_arr[2 * node] + sumD2_arr[2 * node + 1]) % MOD_VAL;
}

long long query(int node, int l, int r, int ql, int qr) {
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return sumD2_arr[node];
    pushDown(node);
    int mid = (l + r) / 2;
    return (query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid + 1, r, ql, qr)) % MOD_VAL;
}

int sumCounts(int* nums, int numsSize) {
    int n = numsSize;
    build(1, 0, n - 1);

    int* prev = (int*)malloc(100001 * sizeof(int));
    memset(prev, -1, 100001 * sizeof(int));

    long long ans = 0;
    for (int i = 0; i < n; i++) {
        int p = prev[nums[i]] + 1;
        update(1, 0, n - 1, p, i);
        prev[nums[i]] = i;
        ans = (ans + query(1, 0, n - 1, 0, i)) % MOD_VAL;
    }

    free(prev);
    return (int)ans;
}
""",
'1.py': r"""class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        n = len(nums)
        sum_d = [0] * (4 * n)
        sum_d2 = [0] * (4 * n)
        lazy = [0] * (4 * n)
        cnt = [0] * (4 * n)

        def build(node: int, l: int, r: int) -> None:
            cnt[node] = r - l + 1
            if l == r:
                return
            mid = (l + r) // 2
            build(2 * node, l, mid)
            build(2 * node + 1, mid + 1, r)

        def push_down(node: int) -> None:
            if lazy[node]:
                val = lazy[node]
                for child in (2 * node, 2 * node + 1):
                    c = cnt[child]
                    sum_d2[child] = (sum_d2[child] + 2 * val * sum_d[child] + val * val * c) % MOD
                    sum_d[child] = (sum_d[child] + val * c) % MOD
                    lazy[child] = (lazy[child] + val) % MOD
                lazy[node] = 0

        def update(node: int, l: int, r: int, ql: int, qr: int) -> None:
            if ql > r or qr < l:
                return
            if ql <= l and r <= qr:
                c = cnt[node]
                sum_d2[node] = (sum_d2[node] + 2 * sum_d[node] + c) % MOD
                sum_d[node] = (sum_d[node] + c) % MOD
                lazy[node] = (lazy[node] + 1) % MOD
                return
            push_down(node)
            mid = (l + r) // 2
            update(2 * node, l, mid, ql, qr)
            update(2 * node + 1, mid + 1, r, ql, qr)
            sum_d[node] = (sum_d[2 * node] + sum_d[2 * node + 1]) % MOD
            sum_d2[node] = (sum_d2[2 * node] + sum_d2[2 * node + 1]) % MOD

        def query_fn(node: int, l: int, r: int, ql: int, qr: int) -> int:
            if ql > r or qr < l:
                return 0
            if ql <= l and r <= qr:
                return sum_d2[node]
            push_down(node)
            mid = (l + r) // 2
            return (query_fn(2 * node, l, mid, ql, qr) + query_fn(2 * node + 1, mid + 1, r, ql, qr)) % MOD

        build(1, 0, n - 1)
        prev = {}
        ans = 0
        for i in range(n):
            p = prev.get(nums[i], -1) + 1
            update(1, 0, n - 1, p, i)
            prev[nums[i]] = i
            ans = (ans + query_fn(1, 0, n - 1, 0, i)) % MOD
        return ans
"""}

# ==================== 2918 ====================
solutions['2918. 数组的最小相等和【中等】'] = {
'1.js': r"""/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
  let sum1 = 0, z1 = 0, sum2 = 0, z2 = 0
  for (const x of nums1) { sum1 += x; if (x === 0) z1++ }
  for (const x of nums2) { sum2 += x; if (x === 0) z2++ }
  const min1 = sum1 + z1, min2 = sum2 + z2
  if (min1 < min2 && z1 === 0) return -1
  if (min2 < min1 && z2 === 0) return -1
  return Math.max(min1, min2)
}
""",
'1.c': r"""long long minSum(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    long long sum1 = 0, z1 = 0, sum2 = 0, z2 = 0;
    for (int i = 0; i < nums1Size; i++) { sum1 += nums1[i]; if (nums1[i] == 0) z1++; }
    for (int i = 0; i < nums2Size; i++) { sum2 += nums2[i]; if (nums2[i] == 0) z2++; }
    long long min1 = sum1 + z1, min2 = sum2 + z2;
    if (min1 < min2 && z1 == 0) return -1;
    if (min2 < min1 && z2 == 0) return -1;
    return min1 > min2 ? min1 : min2;
}
""",
'1.py': r"""class Solution:
    def minSum(self, nums1: list[int], nums2: list[int]) -> int:
        sum1, z1 = sum(nums1), nums1.count(0)
        sum2, z2 = sum(nums2), nums2.count(0)
        min1, min2 = sum1 + z1, sum2 + z2
        if min1 < min2 and z1 == 0:
            return -1
        if min2 < min1 and z2 == 0:
            return -1
        return max(min1, min2)
"""}

# Write all files
for dirname, files in solutions.items():
    for filename, content in files.items():
        filepath = os.path.join(NOTES, dirname, 'solutions', '1', filename)
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content.lstrip('\n'))
        print(f'  wrote {dirname}/solutions/1/{filename}')

print('\nAll solution files written successfully!')
