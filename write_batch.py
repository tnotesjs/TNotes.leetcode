#!/usr/bin/env python3
"""Batch write all solution files for problems 2536-2564."""
import os, glob

BASE = os.path.dirname(os.path.abspath(__file__))
NOTES = os.path.join(BASE, "notes")

def find_dir(num):
    pattern = os.path.join(NOTES, f"{num}.*")
    dirs = glob.glob(pattern)
    return dirs[0] if dirs else None

solutions = {}

# ===== 2536 - 二维差分数组 =====
solutions[2536] = {
"js": None,  # already done
"c": r"""int** rangeAddQueries(int n, int** queries, int queriesSize, int* queriesColSize, int* returnSize, int** returnColumnSizes) {
    int** diff = (int**)malloc((n + 1) * sizeof(int*));
    for (int i = 0; i <= n; i++) diff[i] = (int*)calloc(n + 1, sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int r1 = queries[q][0], c1 = queries[q][1];
        int r2 = queries[q][2], c2 = queries[q][3];
        diff[r1][c1]++;
        diff[r1][c2 + 1]--;
        diff[r2 + 1][c1]--;
        diff[r2 + 1][c2 + 1]++;
    }
    int** mat = (int**)malloc(n * sizeof(int*));
    *returnSize = n;
    *returnColumnSizes = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        mat[i] = (int*)malloc(n * sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            diff[i][j] += (i > 0 ? diff[i - 1][j] : 0)
                        + (j > 0 ? diff[i][j - 1] : 0)
                        - (i > 0 && j > 0 ? diff[i - 1][j - 1] : 0);
            mat[i][j] = diff[i][j];
        }
    }
    for (int i = 0; i <= n; i++) free(diff[i]);
    free(diff);
    return mat;
}
""",
"py": r"""class Solution:
    def rangeAddQueries(self, n: int, queries: list[list[int]]) -> list[list[int]]:
        diff = [[0] * (n + 1) for _ in range(n + 1)]
        for r1, c1, r2, c2 in queries:
            diff[r1][c1] += 1
            diff[r1][c2 + 1] -= 1
            diff[r2 + 1][c1] -= 1
            diff[r2 + 1][c2 + 1] += 1
        mat = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                diff[i][j] += (diff[i - 1][j] if i > 0 else 0) \
                            + (diff[i][j - 1] if j > 0 else 0) \
                            - (diff[i - 1][j - 1] if i > 0 and j > 0 else 0)
                mat[i][j] = diff[i][j]
        return mat
""",
}

# ===== 2537 - 滑动窗口 =====
solutions[2537] = {
"js": None,
"c": r"""typedef struct { int key; int val; UT_hash_handle hh; } HMap;

long long countGood(int* nums, int numsSize, int k) {
    HMap* map = NULL;
    long long pairs = 0, ans = 0;
    int left = 0;
    for (int right = 0; right < numsSize; right++) {
        HMap* entry = NULL;
        HASH_FIND_INT(map, &nums[right], entry);
        int c = entry ? entry->val : 0;
        pairs += c;
        if (entry) entry->val = c + 1;
        else { entry = (HMap*)malloc(sizeof(HMap)); entry->key = nums[right]; entry->val = 1; HASH_ADD_INT(map, key, entry); }
        while (pairs >= k) {
            ans += numsSize - right;
            HMap* le = NULL;
            HASH_FIND_INT(map, &nums[left], le);
            le->val--;
            pairs -= le->val;
            left++;
        }
    }
    HMap *cur, *tmp;
    HASH_ITER(hh, map, cur, tmp) { HASH_DEL(map, cur); free(cur); }
    return ans;
}
""",
"py": r"""class Solution:
    def countGood(self, nums: list[int], k: int) -> int:
        from collections import defaultdict
        cnt = defaultdict(int)
        pairs = 0
        ans = 0
        left = 0
        for right, x in enumerate(nums):
            pairs += cnt[x]
            cnt[x] += 1
            while pairs >= k:
                ans += len(nums) - right
                cnt[nums[left]] -= 1
                pairs -= cnt[nums[left]]
                left += 1
        return ans
""",
}

# ===== 2538 - 树形DP =====
solutions[2538] = {
"js": None,
"c": r"""typedef struct { int to, next; } Edge;

long long maxOutput(int n, int** edges, int edgesSize, int* edgesColSize, int* price, int priceSize) {
    Edge* e = (Edge*)malloc(2 * (n - 1) * sizeof(Edge));
    int* head = (int*)malloc(n * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        e[idx] = (Edge){v, head[u]}; head[u] = idx++;
        e[idx] = (Edge){u, head[v]}; head[v] = idx++;
    }
    long long ans = 0;
    // 迭代 DFS
    int* stk = (int*)malloc(n * sizeof(int));
    int* par = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    long long* wl = (long long*)calloc(n, sizeof(long long)); // with leaf
    long long* wt = (long long*)calloc(n, sizeof(long long)); // without leaf
    int top = 0, cnt = 0;
    par[0] = -1; stk[top++] = 0;
    while (top > 0) {
        int u = stk[--top];
        order[cnt++] = u;
        for (int i = head[u]; i != -1; i = e[i].next) {
            int v = e[i].to;
            if (v != par[u]) { par[v] = u; stk[top++] = v; }
        }
    }
    for (int i = 0; i < n; i++) { wl[i] = price[i]; wt[i] = 0; }
    for (int i = cnt - 1; i >= 0; i--) {
        int u = order[i];
        for (int j = head[u]; j != -1; j = e[j].next) {
            int v = e[j].to;
            if (v == par[u]) continue;
            long long a = wl[u] + wt[v], b = wt[u] + wl[v];
            if (a > ans) ans = a;
            if (b > ans) ans = b;
            if (price[u] + wl[v] > wl[u]) wl[u] = price[u] + wl[v];
            if (price[u] + wt[v] > wt[u]) wt[u] = price[u] + wt[v];
        }
    }
    free(e); free(head); free(stk); free(par); free(order); free(wl); free(wt);
    return ans;
}
""",
"py": r"""import sys

class Solution:
    def maxOutput(self, n: int, edges: list[list[int]], price: list[int]) -> int:
        g: list[list[int]] = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        ans = 0
        # 迭代 DFS
        par = [-1] * n
        order = []
        stk = [0]
        visited = [False] * n
        visited[0] = True
        while stk:
            u = stk.pop()
            order.append(u)
            for v in g[u]:
                if not visited[v]:
                    visited[v] = True
                    par[v] = u
                    stk.append(v)
        wl = list(price)  # with leaf
        wt = [0] * n      # without leaf
        for u in reversed(order):
            for v in g[u]:
                if v == par[u]:
                    continue
                ans = max(ans, wl[u] + wt[v], wt[u] + wl[v])
                wl[u] = max(wl[u], price[u] + wl[v])
                wt[u] = max(wt[u], price[u] + wt[v])
        return ans
""",
}

# ===== 2541 - 贪心 =====
solutions[2541] = {
"js": None,
"c": r"""long long minOperations(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
    if (k == 0) {
        for (int i = 0; i < nums1Size; i++)
            if (nums1[i] != nums2[i]) return -1;
        return 0;
    }
    long long ops = 0, sum = 0;
    for (int i = 0; i < nums1Size; i++) {
        long long diff = (long long)nums2[i] - nums1[i];
        if (diff % k != 0) return -1;
        sum += diff;
        if (diff > 0) ops += diff / k;
    }
    return sum == 0 ? ops : -1;
}
""",
"py": r"""class Solution:
    def minOperations(self, nums1: list[int], nums2: list[int], k: int) -> int:
        if k == 0:
            return 0 if nums1 == nums2 else -1
        ops = 0
        total = 0
        for a, b in zip(nums1, nums2):
            diff = b - a
            if diff % k != 0:
                return -1
            total += diff
            if diff > 0:
                ops += diff // k
        return ops if total == 0 else -1
""",
}

# ===== 2542 - 排序 + 最小堆 =====
solutions[2542] = {
"js": r"""/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const n = nums1.length
  const ids = Array.from({ length: n }, (_, i) => i)
  ids.sort((a, b) => nums2[b] - nums2[a])
  // 最小堆
  const h = []
  const push = (v) => {
    h.push(v)
    let i = h.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (h[p] <= h[i]) break
      ;[h[p], h[i]] = [h[i], h[p]]
      i = p
    }
  }
  const pop = () => {
    const top = h[0]
    const last = h.pop()
    if (h.length > 0) {
      h[0] = last
      let i = 0
      while (true) {
        let m = i, l = 2 * i + 1, r = 2 * i + 2
        if (l < h.length && h[l] < h[m]) m = l
        if (r < h.length && h[r] < h[m]) m = r
        if (m === i) break
        ;[h[i], h[m]] = [h[m], h[i]]
        i = m
      }
    }
    return top
  }
  let sum = 0, ans = 0
  for (const i of ids) {
    push(nums1[i])
    sum += nums1[i]
    if (h.length > k) sum -= pop()
    if (h.length === k) ans = Math.max(ans, sum * nums2[i])
  }
  return ans
}
""",
"c": r"""int cmp2542(const void* a, const void* b) {
    return ((int*)b)[1] - ((int*)a)[1];
}

long long maxScore(int* nums1, int nums1Size, int* nums2, int nums2Size, int k) {
    int n = nums1Size;
    int (*pairs)[2] = malloc(n * sizeof(int[2]));
    for (int i = 0; i < n; i++) { pairs[i][0] = nums1[i]; pairs[i][1] = nums2[i]; }
    qsort(pairs, n, sizeof(int[2]), cmp2542);
    // 最小堆
    int* heap = (int*)malloc(n * sizeof(int));
    int hsize = 0;
    void hpush(int v) {
        heap[hsize] = v; int i = hsize++;
        while (i > 0) { int p = (i - 1) / 2; if (heap[p] <= heap[i]) break; int t = heap[p]; heap[p] = heap[i]; heap[i] = t; i = p; }
    }
    int hpop() {
        int top = heap[0]; heap[0] = heap[--hsize]; int i = 0;
        while (1) { int m = i, l = 2*i+1, r = 2*i+2;
            if (l < hsize && heap[l] < heap[m]) m = l;
            if (r < hsize && heap[r] < heap[m]) m = r;
            if (m == i) break; int t = heap[i]; heap[i] = heap[m]; heap[m] = t; i = m; }
        return top;
    }
    long long sum = 0, ans = 0;
    for (int i = 0; i < n; i++) {
        hpush(pairs[i][0]);
        sum += pairs[i][0];
        if (hsize > k) sum -= hpop();
        if (hsize == k) { long long cur = sum * pairs[i][1]; if (cur > ans) ans = cur; }
    }
    free(pairs); free(heap);
    return ans;
}
""",
"py": r"""import heapq

class Solution:
    def maxScore(self, nums1: list[int], nums2: list[int], k: int) -> int:
        pairs = sorted(zip(nums2, nums1), reverse=True)
        heap: list[int] = []
        s = 0
        ans = 0
        for n2, n1 in pairs:
            heapq.heappush(heap, n1)
            s += n1
            if len(heap) > k:
                s -= heapq.heappop(heap)
            if len(heap) == k:
                ans = max(ans, s * n2)
        return ans
""",
}

# ===== 2543 - GCD =====
solutions[2543] = {
"js": r"""/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function (targetX, targetY) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  let g = gcd(targetX, targetY)
  return (g & (g - 1)) === 0
}
""",
"c": r"""bool isReachable(int targetX, int targetY) {
    int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
    int g = gcd(targetX, targetY);
    return (g & (g - 1)) == 0;
}
""",
"py": r"""from math import gcd

class Solution:
    def isReachable(self, targetX: int, targetY: int) -> bool:
        g = gcd(targetX, targetY)
        return g & (g - 1) == 0
""",
}

# ===== 2545 - 排序 =====
solutions[2545] = {
"js": r"""/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k])
}
""",
"c": r"""static int gK2545;

int cmp2545(const void* a, const void* b) {
    int va = (*(int**)a)[gK2545], vb = (*(int**)b)[gK2545];
    return vb - va;
}

int** sortTheStudents(int** score, int scoreSize, int* scoreColSize, int k, int* returnSize, int** returnColumnSizes) {
    gK2545 = k;
    qsort(score, scoreSize, sizeof(int*), cmp2545);
    *returnSize = scoreSize;
    *returnColumnSizes = (int*)malloc(scoreSize * sizeof(int));
    for (int i = 0; i < scoreSize; i++) (*returnColumnSizes)[i] = scoreColSize[i];
    return score;
}
""",
"py": r"""class Solution:
    def sortTheStudents(self, score: list[list[int]], k: int) -> list[list[int]]:
        return sorted(score, key=lambda x: -x[k])
""",
}

# ===== 2546 - 逻辑判断 =====
solutions[2546] = {
"js": r"""/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function (s, target) {
  return s.includes('1') === target.includes('1')
}
""",
"c": r"""bool makeStringsEqual(char* s, char* target) {
    int hasOne_s = 0, hasOne_t = 0;
    for (int i = 0; s[i]; i++) if (s[i] == '1') hasOne_s = 1;
    for (int i = 0; target[i]; i++) if (target[i] == '1') hasOne_t = 1;
    return hasOne_s == hasOne_t;
}
""",
"py": r"""class Solution:
    def makeStringsEqual(self, s: str, target: str) -> bool:
        return ('1' in s) == ('1' in target)
""",
}

# ===== 2547 - 动态规划 =====
solutions[2547] = {
"js": r"""/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function (nums, k) {
  const n = nums.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    const cnt = new Array(n).fill(0)
    let trimLen = 0
    for (let j = i - 1; j >= 0; j--) {
      cnt[nums[j]]++
      if (cnt[nums[j]] === 2) trimLen += 2
      else if (cnt[nums[j]] > 2) trimLen++
      dp[i] = Math.min(dp[i], dp[j] + k + trimLen)
    }
  }
  return dp[n]
}
""",
"c": r"""int minCost(int* nums, int numsSize, int k) {
    int n = numsSize;
    long long* dp = (long long*)malloc((n + 1) * sizeof(long long));
    for (int i = 0; i <= n; i++) dp[i] = (long long)2e18;
    dp[0] = 0;
    int* cnt = (int*)calloc(n, sizeof(int));
    for (int i = 1; i <= n; i++) {
        memset(cnt, 0, n * sizeof(int));
        int trimLen = 0;
        for (int j = i - 1; j >= 0; j--) {
            cnt[nums[j]]++;
            if (cnt[nums[j]] == 2) trimLen += 2;
            else if (cnt[nums[j]] > 2) trimLen++;
            long long cost = dp[j] + k + trimLen;
            if (cost < dp[i]) dp[i] = cost;
        }
    }
    int ans = (int)dp[n];
    free(dp); free(cnt);
    return ans;
}
""",
"py": r"""class Solution:
    def minCost(self, nums: list[int], k: int) -> int:
        n = len(nums)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            cnt = [0] * n
            trim_len = 0
            for j in range(i - 1, -1, -1):
                cnt[nums[j]] += 1
                if cnt[nums[j]] == 2:
                    trim_len += 2
                elif cnt[nums[j]] > 2:
                    trim_len += 1
                dp[i] = min(dp[i], dp[j] + k + trim_len)
        return dp[n]
""",
}

# ===== 2550 - 快速幂 =====
solutions[2550] = {
"js": r"""/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  const MOD = 1000000007n
  const power = (base, exp, mod) => {
    let result = 1n
    base = base % mod
    while (exp > 0n) {
      if (exp % 2n === 1n) result = (result * base) % mod
      exp = exp / 2n
      base = (base * base) % mod
    }
    return result
  }
  return Number((power(2n, BigInt(n), MOD) - 2n + MOD) % MOD)
}
""",
"c": r"""int monkeyMove(int n) {
    long long mod = 1000000007;
    long long base = 2, exp = n, result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp & 1) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1;
    }
    return (int)((result - 2 + mod) % mod);
}
""",
"py": r"""class Solution:
    def monkeyMove(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        return (pow(2, n, MOD) - 2) % MOD
""",
}

# ===== 2551 - 排序相邻和 =====
solutions[2551] = {
"js": r"""/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  const n = weights.length
  if (k === 1 || k === n) return 0
  const pairs = []
  for (let i = 0; i < n - 1; i++) pairs.push(weights[i] + weights[i + 1])
  pairs.sort((a, b) => a - b)
  let diff = 0
  for (let i = 0; i < k - 1; i++) {
    diff += pairs[pairs.length - 1 - i] - pairs[i]
  }
  return diff
}
""",
"c": r"""int cmp2551(const void* a, const void* b) {
    long long va = *(long long*)a, vb = *(long long*)b;
    return va < vb ? -1 : va > vb ? 1 : 0;
}

long long putMarbles(int* weights, int weightsSize, int k) {
    int n = weightsSize;
    if (k == 1 || k == n) return 0;
    int m = n - 1;
    long long* pairs = (long long*)malloc(m * sizeof(long long));
    for (int i = 0; i < m; i++) pairs[i] = (long long)weights[i] + weights[i + 1];
    qsort(pairs, m, sizeof(long long), cmp2551);
    long long diff = 0;
    for (int i = 0; i < k - 1; i++) diff += pairs[m - 1 - i] - pairs[i];
    free(pairs);
    return diff;
}
""",
"py": r"""class Solution:
    def putMarbles(self, weights: list[int], k: int) -> int:
        n = len(weights)
        if k == 1 or k == n:
            return 0
        pairs = sorted(weights[i] + weights[i + 1] for i in range(n - 1))
        return sum(pairs[-(k - 1):]) - sum(pairs[:k - 1])
""",
}

# ===== 2552 - 枚举 + 前缀计数 =====
solutions[2552] = {
"js": r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length
  let ans = 0
  // f[j] = 满足 i < j < k 且 nums[i] < nums[k] < nums[j] 的 (i, k) 对数
  const f = new Array(n).fill(0)
  for (let k = 1; k < n; k++) {
    let cntLess = 0 // j 之前小于 nums[k] 的元素个数
    for (let j = 0; j < k; j++) {
      if (nums[j] < nums[k]) {
        ans += f[j] // k 作为 l，j 作为 j
        cntLess++
      } else if (nums[j] > nums[k]) {
        f[j] += cntLess // (j, k) 作为中间对
      }
    }
  }
  return ans
}
""",
"c": r"""long long countQuadruplets(int* nums, int numsSize) {
    int n = numsSize;
    long long ans = 0;
    long long* f = (long long*)calloc(n, sizeof(long long));
    for (int k = 1; k < n; k++) {
        int cntLess = 0;
        for (int j = 0; j < k; j++) {
            if (nums[j] < nums[k]) {
                ans += f[j];
                cntLess++;
            } else if (nums[j] > nums[k]) {
                f[j] += cntLess;
            }
        }
    }
    free(f);
    return ans;
}
""",
"py": r"""class Solution:
    def countQuadruplets(self, nums: list[int]) -> int:
        n = len(nums)
        ans = 0
        f = [0] * n  # f[j] = 满足 i<j<k, nums[i]<nums[k]<nums[j] 的对数
        for k in range(1, n):
            cnt_less = 0
            for j in range(k):
                if nums[j] < nums[k]:
                    ans += f[j]
                    cnt_less += 1
                elif nums[j] > nums[k]:
                    f[j] += cnt_less
        return ans
""",
}

# ===== 2554 - 贪心 + 哈希集合 =====
solutions[2554] = {
"js": r"""/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  const set = new Set(banned)
  let sum = 0, cnt = 0
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) continue
    if (sum + i > maxSum) break
    sum += i
    cnt++
  }
  return cnt
}
""",
"c": r"""int cmp2554(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxCount(int* banned, int bannedSize, int n, int maxSum) {
    qsort(banned, bannedSize, sizeof(int), cmp2554);
    int cnt = 0, bi = 0;
    long long sum = 0;
    for (int i = 1; i <= n; i++) {
        while (bi < bannedSize && banned[bi] < i) bi++;
        if (bi < bannedSize && banned[bi] == i) { bi++; continue; }
        if (sum + i > maxSum) break;
        sum += i;
        cnt++;
    }
    return cnt;
}
""",
"py": r"""class Solution:
    def maxCount(self, banned: list[int], n: int, maxSum: int) -> int:
        s = set(banned)
        total = 0
        cnt = 0
        for i in range(1, n + 1):
            if i in s:
                continue
            if total + i > maxSum:
                break
            total += i
            cnt += 1
        return cnt
""",
}

# ===== 2555 - 滑动窗口 + DP =====
solutions[2555] = {
"js": r"""/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
  const n = prizePositions.length
  const dp = new Array(n + 1).fill(0) // dp[i] = 前 i 个位置中一个线段最多能获得的奖品
  let ans = 0, left = 0
  for (let right = 0; right < n; right++) {
    while (prizePositions[right] - prizePositions[left] > k) left++
    const cnt = right - left + 1
    dp[right + 1] = Math.max(dp[right], cnt)
    ans = Math.max(ans, cnt + dp[left])
  }
  return ans
}
""",
"c": r"""int maximizeWin(int* prizePositions, int prizePositionsSize, int k) {
    int n = prizePositionsSize;
    int* dp = (int*)calloc(n + 1, sizeof(int));
    int ans = 0, left = 0;
    for (int right = 0; right < n; right++) {
        while (prizePositions[right] - prizePositions[left] > k) left++;
        int cnt = right - left + 1;
        dp[right + 1] = dp[right] > cnt ? dp[right] : cnt;
        int cur = cnt + dp[left];
        if (cur > ans) ans = cur;
    }
    free(dp);
    return ans;
}
""",
"py": r"""class Solution:
    def maximizeWin(self, prizePositions: list[int], k: int) -> int:
        n = len(prizePositions)
        dp = [0] * (n + 1)
        ans = 0
        left = 0
        for right in range(n):
            while prizePositions[right] - prizePositions[left] > k:
                left += 1
            cnt = right - left + 1
            dp[right + 1] = max(dp[right], cnt)
            ans = max(ans, cnt + dp[left])
        return ans
""",
}

# ===== 2556 - 两次 DFS =====
solutions[2556] = {
"js": r"""/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function (grid) {
  const m = grid.length, n = grid[0].length
  // 第一次 DFS：找到一条路径并标记
  const dfs = (i, j) => {
    if (i === m - 1 && j === n - 1) return true
    grid[i][j] = 0
    if (i + 1 < m && grid[i + 1][j] === 1 && dfs(i + 1, j)) return true
    if (j + 1 < n && grid[i][j + 1] === 1 && dfs(i, j + 1)) return true
    return false
  }
  if (!dfs(0, 0)) return true
  grid[0][0] = 1
  grid[m - 1][n - 1] = 1
  // 第二次 DFS：检查是否还有路径
  return !dfs(0, 0)
}
""",
"c": r"""bool isPossibleToCutPath(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    bool dfs(int i, int j) {
        if (i == m - 1 && j == n - 1) return true;
        grid[i][j] = 0;
        if (i + 1 < m && grid[i + 1][j] == 1 && dfs(i + 1, j)) return true;
        if (j + 1 < n && grid[i][j + 1] == 1 && dfs(i, j + 1)) return true;
        return false;
    }
    if (!dfs(0, 0)) return true;
    grid[0][0] = 1;
    grid[m - 1][n - 1] = 1;
    return !dfs(0, 0);
}
""",
"py": r"""import sys

class Solution:
    def isPossibleToCutPath(self, grid: list[list[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        sys.setrecursionlimit(m * n + 10)
        def dfs(i: int, j: int) -> bool:
            if i == m - 1 and j == n - 1:
                return True
            grid[i][j] = 0
            if i + 1 < m and grid[i + 1][j] == 1 and dfs(i + 1, j):
                return True
            if j + 1 < n and grid[i][j + 1] == 1 and dfs(i, j + 1):
                return True
            return False
        if not dfs(0, 0):
            return True
        grid[0][0] = 1
        grid[m - 1][n - 1] = 1
        return not dfs(0, 0)
""",
}

# ===== 2559 - 前缀和 =====
solutions[2559] = {
"js": r"""/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const isVowelStr = (s) => vowels.has(s[0]) && vowels.has(s[s.length - 1])
  const n = words.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + (isVowelStr(words[i]) ? 1 : 0)
  return queries.map(([l, r]) => prefix[r + 1] - prefix[l])
}
""",
"c": r"""int* vowelStrings(char** words, int wordsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int isVowel(char c) { return c=='a'||c=='e'||c=='i'||c=='o'||c=='u'; }
    int* prefix = (int*)calloc(wordsSize + 1, sizeof(int));
    for (int i = 0; i < wordsSize; i++) {
        int len = strlen(words[i]);
        prefix[i + 1] = prefix[i] + (isVowel(words[i][0]) && isVowel(words[i][len - 1]) ? 1 : 0);
    }
    *returnSize = queriesSize;
    int* ans = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        ans[i] = prefix[queries[i][1] + 1] - prefix[queries[i][0]];
    }
    free(prefix);
    return ans;
}
""",
"py": r"""class Solution:
    def vowelStrings(self, words: list[str], queries: list[list[int]]) -> list[int]:
        vowels = set('aeiou')
        prefix = [0] * (len(words) + 1)
        for i, w in enumerate(words):
            prefix[i + 1] = prefix[i] + (1 if w[0] in vowels and w[-1] in vowels else 0)
        return [prefix[r + 1] - prefix[l] for l, r in queries]
""",
}

# ===== 2560 - 二分查找 + 贪心 =====
solutions[2560] = {
"js": r"""/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let lo = Math.min(...nums), hi = Math.max(...nums)
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let cnt = 0, prev = false
    for (const x of nums) {
      if (x <= mid && !prev) {
        cnt++
        prev = true
      } else {
        prev = false
      }
    }
    if (cnt >= k) hi = mid
    else lo = mid + 1
  }
  return lo
}
""",
"c": r"""int minCapability(int* nums, int numsSize, int k) {
    int lo = nums[0], hi = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < lo) lo = nums[i];
        if (nums[i] > hi) hi = nums[i];
    }
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        int cnt = 0, prev = 0;
        for (int i = 0; i < numsSize; i++) {
            if (nums[i] <= mid && !prev) { cnt++; prev = 1; }
            else prev = 0;
        }
        if (cnt >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
""",
"py": r"""class Solution:
    def minCapability(self, nums: list[int], k: int) -> int:
        lo, hi = min(nums), max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            cnt = 0
            prev = False
            for x in nums:
                if x <= mid and not prev:
                    cnt += 1
                    prev = True
                else:
                    prev = False
            if cnt >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
""",
}

# ===== 2561 - 贪心 + 计数 =====
solutions[2561] = {
"js": r"""/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  const cnt = new Map()
  for (const x of basket1) cnt.set(x, (cnt.get(x) || 0) + 1)
  for (const x of basket2) cnt.set(x, (cnt.get(x) || 0) - 1)
  const swaps = []
  for (const [k, v] of cnt) {
    if (v % 2 !== 0) return -1
    const need = Math.abs(v) / 2
    for (let i = 0; i < need; i++) swaps.push(k)
  }
  swaps.sort((a, b) => a - b)
  let minVal = Infinity
  for (const x of basket1) minVal = Math.min(minVal, x)
  for (const x of basket2) minVal = Math.min(minVal, x)
  let cost = 0
  for (let i = 0; i < swaps.length / 2; i++) {
    cost += Math.min(swaps[i], 2 * minVal)
  }
  return cost
}
""",
"c": r"""typedef struct { int key; int val; UT_hash_handle hh; } HM2561;

int cmp2561(const void* a, const void* b) { return *(int*)a - *(int*)b; }

long long minCost(int* basket1, int basket1Size, int* basket2, int basket2Size) {
    HM2561* map = NULL;
    for (int i = 0; i < basket1Size; i++) {
        HM2561* e = NULL; HASH_FIND_INT(map, &basket1[i], e);
        if (e) e->val++; else { e = (HM2561*)malloc(sizeof(HM2561)); e->key = basket1[i]; e->val = 1; HASH_ADD_INT(map, key, e); }
    }
    for (int i = 0; i < basket2Size; i++) {
        HM2561* e = NULL; HASH_FIND_INT(map, &basket2[i], e);
        if (e) e->val--; else { e = (HM2561*)malloc(sizeof(HM2561)); e->key = basket2[i]; e->val = -1; HASH_ADD_INT(map, key, e); }
    }
    int* swaps = (int*)malloc((basket1Size + basket2Size) * sizeof(int));
    int slen = 0;
    HM2561 *cur, *tmp;
    HASH_ITER(hh, map, cur, tmp) {
        if (cur->val % 2 != 0) { free(swaps); return -1; }
        int need = cur->val > 0 ? cur->val / 2 : -cur->val / 2;
        for (int i = 0; i < need; i++) swaps[slen++] = cur->key;
        HASH_DEL(map, cur); free(cur);
    }
    qsort(swaps, slen, sizeof(int), cmp2561);
    int minVal = basket1[0];
    for (int i = 1; i < basket1Size; i++) if (basket1[i] < minVal) minVal = basket1[i];
    for (int i = 0; i < basket2Size; i++) if (basket2[i] < minVal) minVal = basket2[i];
    long long cost = 0;
    for (int i = 0; i < slen / 2; i++) {
        int v = swaps[i] < 2 * minVal ? swaps[i] : 2 * minVal;
        cost += v;
    }
    free(swaps);
    return cost;
}
""",
"py": r"""from collections import Counter

class Solution:
    def minCost(self, basket1: list[int], basket2: list[int]) -> int:
        cnt = Counter(basket1)
        for x in basket2:
            cnt[x] -= 1
        swaps: list[int] = []
        for k, v in cnt.items():
            if v % 2 != 0:
                return -1
            swaps.extend([k] * (abs(v) // 2))
        swaps.sort()
        min_val = min(min(basket1), min(basket2))
        return sum(min(swaps[i], 2 * min_val) for i in range(len(swaps) // 2))
""",
}

# ===== 2563 - 排序 + 双指针 =====
solutions[2563] = {
"js": r"""/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const countLess = (target) => {
    let cnt = 0, lo = 0, hi = n - 1
    while (lo < hi) {
      if (nums[lo] + nums[hi] < target) {
        cnt += hi - lo
        lo++
      } else {
        hi--
      }
    }
    return cnt
  }
  return countLess(upper + 1) - countLess(lower)
}
""",
"c": r"""int cmp2563(const void* a, const void* b) {
    int va = *(int*)a, vb = *(int*)b;
    return va < vb ? -1 : va > vb ? 1 : 0;
}

long long countFairPairs(int* nums, int numsSize, int lower, int upper) {
    qsort(nums, numsSize, sizeof(int), cmp2563);
    long long countLess(long long target) {
        long long cnt = 0;
        int lo = 0, hi = numsSize - 1;
        while (lo < hi) {
            if ((long long)nums[lo] + nums[hi] < target) { cnt += hi - lo; lo++; }
            else hi--;
        }
        return cnt;
    }
    return countLess((long long)upper + 1) - countLess((long long)lower);
}
""",
"py": r"""class Solution:
    def countFairPairs(self, nums: list[int], lower: int, upper: int) -> int:
        nums.sort()
        n = len(nums)
        def count_less(target: int) -> int:
            cnt = 0
            lo, hi = 0, n - 1
            while lo < hi:
                if nums[lo] + nums[hi] < target:
                    cnt += hi - lo
                    lo += 1
                else:
                    hi -= 1
            return cnt
        return count_less(upper + 1) - count_less(lower)
""",
}

# ===== 2564 - 哈希表预处理 =====
solutions[2564] = {
"js": r"""/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
  const map = new Map()
  const n = s.length
  for (let i = 0; i < n; i++) {
    let val = 0
    for (let j = i; j < Math.min(i + 30, n); j++) {
      val = val * 2 + (s.charCodeAt(j) - 48)
      if (!map.has(val)) map.set(val, [i, j])
      if (val === 0) break
    }
  }
  return queries.map(([f, sc]) => map.get(f ^ sc) || [-1, -1])
}
""",
"c": r"""typedef struct { int key; int left; int right; UT_hash_handle hh; } HM2564;

int** substringXorQueries(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize, int** returnColumnSizes) {
    int n = strlen(s);
    HM2564* map = NULL;
    for (int i = 0; i < n; i++) {
        int val = 0;
        for (int j = i; j < i + 30 && j < n; j++) {
            val = val * 2 + (s[j] - '0');
            HM2564* e = NULL;
            HASH_FIND_INT(map, &val, e);
            if (!e) { e = (HM2564*)malloc(sizeof(HM2564)); e->key = val; e->left = i; e->right = j; HASH_ADD_INT(map, key, e); }
            if (val == 0) break;
        }
    }
    *returnSize = queriesSize;
    *returnColumnSizes = (int*)malloc(queriesSize * sizeof(int));
    int** ans = (int**)malloc(queriesSize * sizeof(int*));
    for (int i = 0; i < queriesSize; i++) {
        ans[i] = (int*)malloc(2 * sizeof(int));
        (*returnColumnSizes)[i] = 2;
        int target = queries[i][0] ^ queries[i][1];
        HM2564* e = NULL;
        HASH_FIND_INT(map, &target, e);
        if (e) { ans[i][0] = e->left; ans[i][1] = e->right; }
        else { ans[i][0] = -1; ans[i][1] = -1; }
    }
    HM2564 *cur2, *tmp2;
    HASH_ITER(hh, map, cur2, tmp2) { HASH_DEL(map, cur2); free(cur2); }
    return ans;
}
""",
"py": r"""class Solution:
    def substringXorQueries(self, s: str, queries: list[list[int]]) -> list[list[int]]:
        mp: dict[int, list[int]] = {}
        n = len(s)
        for i in range(n):
            val = 0
            for j in range(i, min(i + 30, n)):
                val = val * 2 + int(s[j])
                if val not in mp:
                    mp[val] = [i, j]
                if val == 0:
                    break
        return [mp.get(f ^ sc, [-1, -1]) for f, sc in queries]
""",
}

# ===== Write all files =====
for num, langs in solutions.items():
    d = find_dir(num)
    if d is None:
        print(f"ERROR: directory not found for {num}")
        continue
    for ext, code in langs.items():
        if code is None:
            continue
        fpath = os.path.join(d, "solutions", "1", f"1.{ext}")
        with open(fpath, "w") as f:
            f.write(code.lstrip("\n"))
        print(f"OK: {num} {ext}")

print("All solution files written!")
