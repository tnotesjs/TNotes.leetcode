#!/usr/bin/env python3
"""Batch write all solutions for problems 2836-2861."""
import os

BASE = os.path.join(os.path.dirname(__file__), 'notes')

def w(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w') as f:
        f.write(content)

# ============================================================
# 2836 - 在传球游戏中最大化函数值 (倍增)
# ============================================================
w('2836. 在传球游戏中最大化函数值【困难】/solutions/1/1.js', r"""/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
var getMaxFunctionValue = function(receiver, k) {
  const n = receiver.length
  const LOG = 35
  const jump = Array.from({length: LOG}, () => new Int32Array(n))
  const sm = Array.from({length: LOG}, () => new Float64Array(n))
  for (let i = 0; i < n; i++) {
    jump[0][i] = receiver[i]
    sm[0][i] = receiver[i]
  }
  for (let j = 1; j < LOG; j++) {
    for (let i = 0; i < n; i++) {
      jump[j][i] = jump[j - 1][jump[j - 1][i]]
      sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]]
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    let cur = i, total = i, kk = k
    for (let j = 0; j < LOG && kk > 0; j++) {
      if (kk % 2 === 1) {
        total += sm[j][cur]
        cur = jump[j][cur]
      }
      kk = Math.floor(kk / 2)
    }
    if (total > ans) ans = total
  }
  return ans
}
""".lstrip())

w('2836. 在传球游戏中最大化函数值【困难】/solutions/1/1.c', r"""long long getMaxFunctionValue(int* receiver, int receiverSize, long long k) {
    int n = receiverSize, LOG = 35;
    int** jump = (int**)malloc(LOG * sizeof(int*));
    long long** sm = (long long**)malloc(LOG * sizeof(long long*));
    for (int j = 0; j < LOG; j++) {
        jump[j] = (int*)malloc(n * sizeof(int));
        sm[j] = (long long*)malloc(n * sizeof(long long));
    }
    for (int i = 0; i < n; i++) {
        jump[0][i] = receiver[i];
        sm[0][i] = receiver[i];
    }
    for (int j = 1; j < LOG; j++)
        for (int i = 0; i < n; i++) {
            jump[j][i] = jump[j - 1][jump[j - 1][i]];
            sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]];
        }
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        int cur = i;
        long long total = i;
        long long kk = k;
        for (int j = 0; j < LOG && kk > 0; j++) {
            if (kk & 1) { total += sm[j][cur]; cur = jump[j][cur]; }
            kk >>= 1;
        }
        if (total > ans) ans = total;
    }
    for (int j = 0; j < LOG; j++) { free(jump[j]); free(sm[j]); }
    free(jump); free(sm);
    return ans;
}
""".lstrip())

w('2836. 在传球游戏中最大化函数值【困难】/solutions/1/1.py', r"""class Solution:
    def getMaxFunctionValue(self, receiver: List[int], k: int) -> int:
        n = len(receiver)
        LOG = max(1, k.bit_length())
        jump = [[0] * n for _ in range(LOG)]
        sm = [[0] * n for _ in range(LOG)]
        for i in range(n):
            jump[0][i] = receiver[i]
            sm[0][i] = receiver[i]
        for j in range(1, LOG):
            for i in range(n):
                jump[j][i] = jump[j - 1][jump[j - 1][i]]
                sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]]
        ans = 0
        for i in range(n):
            cur, s = i, i
            kk = k
            for j in range(LOG):
                if kk & 1:
                    s += sm[j][cur]
                    cur = jump[j][cur]
                kk >>= 1
            ans = max(ans, s)
        return ans
""".lstrip())

# ============================================================
# 2840 - 判断通过操作能否让字符串相等 II
# ============================================================
w('2840. 判断通过操作能否让字符串相等 II【中等】/solutions/1/1.js', r"""/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
  const even1 = [], odd1 = [], even2 = [], odd2 = []
  for (let i = 0; i < s1.length; i++) {
    if (i % 2 === 0) { even1.push(s1[i]); even2.push(s2[i]) }
    else { odd1.push(s1[i]); odd2.push(s2[i]) }
  }
  even1.sort(); even2.sort(); odd1.sort(); odd2.sort()
  return even1.join('') === even2.join('') && odd1.join('') === odd2.join('')
}
""".lstrip())

w('2840. 判断通过操作能否让字符串相等 II【中等】/solutions/1/1.c', r"""int cmp(const void* a, const void* b) { return *(char*)a - *(char*)b; }

bool checkStrings(char* s1, char* s2) {
    int n = strlen(s1);
    char *e1 = malloc(n), *o1 = malloc(n), *e2 = malloc(n), *o2 = malloc(n);
    int ei = 0, oi = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) { e1[ei] = s1[i]; e2[ei] = s2[i]; ei++; }
        else { o1[oi] = s1[i]; o2[oi] = s2[i]; oi++; }
    }
    qsort(e1, ei, 1, cmp); qsort(e2, ei, 1, cmp);
    qsort(o1, oi, 1, cmp); qsort(o2, oi, 1, cmp);
    bool res = memcmp(e1, e2, ei) == 0 && memcmp(o1, o2, oi) == 0;
    free(e1); free(o1); free(e2); free(o2);
    return res;
}
""".lstrip())

w('2840. 判断通过操作能否让字符串相等 II【中等】/solutions/1/1.py', r"""class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
        return sorted(s1[::2]) == sorted(s2[::2]) and sorted(s1[1::2]) == sorted(s2[1::2])
""".lstrip())

# ============================================================
# 2841 - 几乎唯一子数组的最大和
# ============================================================
w('2841. 几乎唯一子数组的最大和【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
  const cnt = new Map()
  let sum = 0, ans = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
    if (i >= k) {
      const old = nums[i - k]
      sum -= old
      cnt.set(old, cnt.get(old) - 1)
      if (cnt.get(old) === 0) cnt.delete(old)
    }
    if (i >= k - 1 && cnt.size >= m) ans = Math.max(ans, sum)
  }
  return ans
}
""".lstrip())

w('2841. 几乎唯一子数组的最大和【中等】/solutions/1/1.c', r"""long long maxSum(int* nums, int numsSize, int m, int k) {
    int capacity = 40003;
    int* keys = (int*)calloc(capacity, sizeof(int));
    int* vals = (int*)calloc(capacity, sizeof(int));
    int* used = (int*)calloc(capacity, sizeof(int));
    int distinct = 0;
    long long sum = 0, ans = 0;

    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        // add nums[i]
        unsigned h = (unsigned)nums[i] % capacity;
        while (used[h] && keys[h] != nums[i]) h = (h + 1) % capacity;
        if (!used[h]) { used[h] = 1; keys[h] = nums[i]; vals[h] = 0; }
        if (vals[h] == 0) distinct++;
        vals[h]++;

        if (i >= k) {
            int old = nums[i - k];
            sum -= old;
            unsigned oh = (unsigned)old % capacity;
            while (keys[oh] != old || !used[oh]) oh = (oh + 1) % capacity;
            vals[oh]--;
            if (vals[oh] == 0) distinct--;
        }
        if (i >= k - 1 && distinct >= m && sum > ans) ans = sum;
    }
    free(keys); free(vals); free(used);
    return ans;
}
""".lstrip())

w('2841. 几乎唯一子数组的最大和【中等】/solutions/1/1.py', r"""class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        cnt = defaultdict(int)
        s = 0
        ans = 0
        for i, x in enumerate(nums):
            s += x
            cnt[x] += 1
            if i >= k:
                old = nums[i - k]
                s -= old
                cnt[old] -= 1
                if cnt[old] == 0:
                    del cnt[old]
            if i >= k - 1 and len(cnt) >= m:
                ans = max(ans, s)
        return ans
""".lstrip())

# ============================================================
# 2842 - 统计一个字符串的 k 子序列美丽值最大的数目
# ============================================================
w('2842. 统计一个字符串的 k 子序列美丽值最大的数目【困难】/solutions/1/1.js', r"""/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKSubsequencesWithMaxBeauty = function(s, k) {
  const MOD = 1000000007n
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  const freqs = freq.filter(f => f > 0).sort((a, b) => b - a)
  if (k > freqs.length) return 0

  const boundary = freqs[k - 1]
  let result = 1n, rem = k
  let countBound = 0
  for (const f of freqs) if (f === boundary) countBound++
  for (const f of freqs) {
    if (f > boundary) { result = result * BigInt(f) % MOD; rem-- }
  }
  // C(countBound, rem) * boundary^rem
  result = result * comb(countBound, rem, MOD) % MOD
  result = result * modPow(BigInt(boundary), BigInt(rem), MOD) % MOD
  return Number(result)
}

function modPow(base, exp, mod) {
  let r = 1n; base %= mod
  while (exp > 0n) { if (exp & 1n) r = r * base % mod; exp >>= 1n; base = base * base % mod }
  return r
}

function comb(n, r, mod) {
  if (r > n || r < 0) return 0n
  let num = 1n, den = 1n
  for (let i = 0; i < r; i++) { num = num * BigInt(n - i) % mod; den = den * BigInt(i + 1) % mod }
  return num * modPow(den, mod - 2n, mod) % mod
}
""".lstrip())

w('2842. 统计一个字符串的 k 子序列美丽值最大的数目【困难】/solutions/1/1.c', r"""long long modPow_c(long long base, long long exp, long long mod) {
    long long r = 1; base %= mod;
    while (exp > 0) { if (exp & 1) r = r * base % mod; exp >>= 1; base = base * base % mod; }
    return r;
}

int cmpDesc(const void* a, const void* b) { return *(int*)b - *(int*)a; }

int countKSubsequencesWithMaxBeauty(char* s, int k) {
    long long MOD = 1000000007;
    int freq[26] = {0};
    for (int i = 0; s[i]; i++) freq[s[i] - 'a']++;
    int freqs[26], n = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > 0) freqs[n++] = freq[i];
    if (k > n) return 0;

    qsort(freqs, n, sizeof(int), cmpDesc);
    int boundary = freqs[k - 1];
    long long result = 1;
    int rem = k, countBound = 0;
    for (int i = 0; i < n; i++) if (freqs[i] == boundary) countBound++;
    for (int i = 0; i < n; i++)
        if (freqs[i] > boundary) { result = result * freqs[i] % MOD; rem--; }

    long long c = 1;
    for (int i = 0; i < rem; i++) {
        c = c * (countBound - i) % MOD;
        c = c * modPow_c(i + 1, MOD - 2, MOD) % MOD;
    }
    result = result * c % MOD;
    result = result * modPow_c(boundary, rem, MOD) % MOD;
    return (int)result;
}
""".lstrip())

w('2842. 统计一个字符串的 k 子序列美丽值最大的数目【困难】/solutions/1/1.py', r"""class Solution:
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        MOD = 10 ** 9 + 7
        freq = Counter(s)
        freqs = sorted(freq.values(), reverse=True)
        if k > len(freqs):
            return 0
        boundary = freqs[k - 1]
        result = 1
        rem = k
        count_bound = freqs.count(boundary)
        for f in freqs:
            if f > boundary:
                result = result * f % MOD
                rem -= 1
        result = result * comb(count_bound, rem) % MOD * pow(boundary, rem, MOD) % MOD
        return result
""".lstrip())

# ============================================================
# 2844 - 生成特殊数字的最少操作
# ============================================================
w('2844. 生成特殊数字的最少操作【中等】/solutions/1/1.js', r"""/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  const n = num.length
  let ans = n
  for (const t of ['00', '25', '50', '75']) {
    let j = n - 1
    while (j >= 0 && num[j] !== t[1]) j--
    if (j < 0) continue
    let i = j - 1
    while (i >= 0 && num[i] !== t[0]) i--
    if (i < 0) continue
    ans = Math.min(ans, n - 2 - i)
  }
  if (num.includes('0')) ans = Math.min(ans, n - 1)
  return ans
}
""".lstrip())

w('2844. 生成特殊数字的最少操作【中等】/solutions/1/1.c', r"""int minimumOperations(char* num) {
    int n = strlen(num);
    int ans = n;
    char* targets[] = {"00", "25", "50", "75"};
    for (int t = 0; t < 4; t++) {
        int j = n - 1;
        while (j >= 0 && num[j] != targets[t][1]) j--;
        if (j < 0) continue;
        int i = j - 1;
        while (i >= 0 && num[i] != targets[t][0]) i--;
        if (i < 0) continue;
        int cost = n - 2 - i;
        if (cost < ans) ans = cost;
    }
    for (int i = 0; i < n; i++)
        if (num[i] == '0') { if (n - 1 < ans) ans = n - 1; break; }
    return ans;
}
""".lstrip())

w('2844. 生成特殊数字的最少操作【中等】/solutions/1/1.py', r"""class Solution:
    def minimumOperations(self, num: str) -> int:
        n = len(num)
        ans = n
        for t in ['00', '25', '50', '75']:
            j = n - 1
            while j >= 0 and num[j] != t[1]:
                j -= 1
            if j < 0:
                continue
            i = j - 1
            while i >= 0 and num[i] != t[0]:
                i -= 1
            if i < 0:
                continue
            ans = min(ans, n - 2 - i)
        if '0' in num:
            ans = min(ans, n - 1)
        return ans
""".lstrip())

# ============================================================
# 2845 - 统计趣味子数组的数目
# ============================================================
w('2845. 统计趣味子数组的数目【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  const cnt = new Map()
  cnt.set(0, 1)
  let prefix = 0, ans = 0
  for (const x of nums) {
    if (x % modulo === k) prefix++
    const mod = prefix % modulo
    const need = ((mod - k) % modulo + modulo) % modulo
    ans += cnt.get(need) || 0
    cnt.set(mod, (cnt.get(mod) || 0) + 1)
  }
  return ans
}
""".lstrip())

w('2845. 统计趣味子数组的数目【中等】/solutions/1/1.c', r"""long long countInterestingSubarrays(int* nums, int numsSize, int modulo, int k) {
    int cap = modulo < 100003 ? 100003 : modulo + 1;
    long long* table = (long long*)calloc(cap, sizeof(long long));
    table[0] = 1;
    long long ans = 0;
    int prefix = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % modulo == k) prefix++;
        int mod = prefix % modulo;
        int need = ((mod - k) % modulo + modulo) % modulo;
        ans += table[need];
        table[mod]++;
    }
    free(table);
    return ans;
}
""".lstrip())

w('2845. 统计趣味子数组的数目【中等】/solutions/1/1.py', r"""class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        cnt = defaultdict(int)
        cnt[0] = 1
        prefix = 0
        ans = 0
        for x in nums:
            if x % modulo == k:
                prefix += 1
            mod = prefix % modulo
            ans += cnt[(mod - k) % modulo]
            cnt[mod] += 1
        return ans
""".lstrip())

# ============================================================
# 2846 - 边权重均等查询 (LCA + 权重频率)
# ============================================================
w('2846. 边权重均等查询【困难】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperationsQueries = function(n, edges, queries) {
  const LOG = 15
  const adj = Array.from({length: n}, () => [])
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]); adj[v].push([u, w])
  }
  const depth = new Int32Array(n)
  const parent = Array.from({length: LOG}, () => new Int32Array(n).fill(-1))
  const wCnt = Array.from({length: n}, () => new Int32Array(27))
  const vis = new Uint8Array(n)
  const queue = [0]; vis[0] = 1; let head = 0
  while (head < queue.length) {
    const u = queue[head++]
    for (const [v, w] of adj[u]) {
      if (!vis[v]) {
        vis[v] = 1; depth[v] = depth[u] + 1; parent[0][v] = u
        for (let i = 1; i <= 26; i++) wCnt[v][i] = wCnt[u][i]
        wCnt[v][w]++; queue.push(v)
      }
    }
  }
  for (let j = 1; j < LOG; j++)
    for (let i = 0; i < n; i++)
      if (parent[j - 1][i] !== -1) parent[j][i] = parent[j - 1][parent[j - 1][i]]

  const lca = (u, v) => {
    if (depth[u] < depth[v]) { let t = u; u = v; v = t }
    let diff = depth[u] - depth[v]
    for (let j = 0; j < LOG; j++) if ((diff >> j) & 1) u = parent[j][u]
    if (u === v) return u
    for (let j = LOG - 1; j >= 0; j--)
      if (parent[j][u] !== parent[j][v]) { u = parent[j][u]; v = parent[j][v] }
    return parent[0][u]
  }

  return queries.map(([a, b]) => {
    const l = lca(a, b)
    const pathLen = depth[a] + depth[b] - 2 * depth[l]
    let maxW = 0
    for (let w = 1; w <= 26; w++) {
      const cnt = wCnt[a][w] + wCnt[b][w] - 2 * wCnt[l][w]
      if (cnt > maxW) maxW = cnt
    }
    return pathLen - maxW
  })
}
""".lstrip())

w('2846. 边权重均等查询【困难】/solutions/1/1.c', r"""int* minOperationsQueries(int n, int** edges, int edgesSize, int* edgesColSize,
    int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int LOG = 15;
    int* adjHead = (int*)malloc(n * sizeof(int));
    memset(adjHead, -1, n * sizeof(int));
    int* adjTo = (int*)malloc(4 * n * sizeof(int));
    int* adjW = (int*)malloc(4 * n * sizeof(int));
    int* adjNext = (int*)malloc(4 * n * sizeof(int));
    int ei = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adjTo[ei]=v; adjW[ei]=w; adjNext[ei]=adjHead[u]; adjHead[u]=ei++;
        adjTo[ei]=u; adjW[ei]=w; adjNext[ei]=adjHead[v]; adjHead[v]=ei++;
    }
    int* depth = (int*)calloc(n, sizeof(int));
    int** parent = (int**)malloc(LOG * sizeof(int*));
    for (int j = 0; j < LOG; j++) {
        parent[j] = (int*)malloc(n * sizeof(int));
        memset(parent[j], -1, n * sizeof(int));
    }
    int (*wCnt)[27] = calloc(n, sizeof(int[27]));
    int* queue = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int head = 0, tail = 0;
    queue[tail++] = 0; vis[0] = 1;
    while (head < tail) {
        int u = queue[head++];
        for (int e = adjHead[u]; e != -1; e = adjNext[e]) {
            int v = adjTo[e], w = adjW[e];
            if (!vis[v]) {
                vis[v] = 1; depth[v] = depth[u] + 1; parent[0][v] = u;
                memcpy(wCnt[v], wCnt[u], 27 * sizeof(int));
                wCnt[v][w]++; queue[tail++] = v;
            }
        }
    }
    for (int j = 1; j < LOG; j++)
        for (int i = 0; i < n; i++)
            if (parent[j-1][i] != -1) parent[j][i] = parent[j-1][parent[j-1][i]];

    *returnSize = queriesSize;
    int* result = (int*)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int u = queries[q][0], v = queries[q][1];
        int a = u, b = v;
        if (depth[u] < depth[v]) { int t = u; u = v; v = t; }
        int diff = depth[u] - depth[v];
        for (int j = 0; j < LOG; j++) if ((diff >> j) & 1) u = parent[j][u];
        if (u != v) {
            for (int j = LOG-1; j >= 0; j--)
                if (parent[j][u] != parent[j][v]) { u = parent[j][u]; v = parent[j][v]; }
            u = parent[0][u];
        }
        int lca = u;
        int pathLen = depth[a] + depth[b] - 2 * depth[lca];
        int maxW = 0;
        for (int w = 1; w <= 26; w++) {
            int cnt = wCnt[a][w] + wCnt[b][w] - 2 * wCnt[lca][w];
            if (cnt > maxW) maxW = cnt;
        }
        result[q] = pathLen - maxW;
    }
    free(adjHead); free(adjTo); free(adjW); free(adjNext);
    free(depth); free(queue); free(vis); free(wCnt);
    for (int j = 0; j < LOG; j++) free(parent[j]);
    free(parent);
    return result;
}
""".lstrip())

w('2846. 边权重均等查询【困难】/solutions/1/1.py', r"""class Solution:
    def minOperationsQueries(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        LOG = 15
        adj = [[] for _ in range(n)]
        for u, v, w in edges:
            adj[u].append((v, w)); adj[v].append((u, w))
        depth = [0] * n
        parent = [[-1] * n for _ in range(LOG)]
        wCnt = [[0] * 27 for _ in range(n)]
        vis = [False] * n
        q = deque([0]); vis[0] = True
        while q:
            u = q.popleft()
            for v, w in adj[u]:
                if not vis[v]:
                    vis[v] = True; depth[v] = depth[u] + 1; parent[0][v] = u
                    wCnt[v] = wCnt[u][:]; wCnt[v][w] += 1; q.append(v)
        for j in range(1, LOG):
            for i in range(n):
                if parent[j-1][i] != -1:
                    parent[j][i] = parent[j-1][parent[j-1][i]]
        def lca(u, v):
            if depth[u] < depth[v]: u, v = v, u
            diff = depth[u] - depth[v]
            for j in range(LOG):
                if (diff >> j) & 1: u = parent[j][u]
            if u == v: return u
            for j in range(LOG - 1, -1, -1):
                if parent[j][u] != parent[j][v]: u, v = parent[j][u], parent[j][v]
            return parent[0][u]
        result = []
        for a, b in queries:
            l = lca(a, b)
            path_len = depth[a] + depth[b] - 2 * depth[l]
            max_w = max(wCnt[a][w] + wCnt[b][w] - 2 * wCnt[l][w] for w in range(1, 27))
            result.append(path_len - max_w)
        return result
""".lstrip())

# ============================================================
# 2849 - 判断能否在给定时间到达单元格
# ============================================================
w('2849. 判断能否在给定时间到达单元格【中等】/solutions/1/1.js', r"""/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
  const dx = Math.abs(sx - fx), dy = Math.abs(sy - fy)
  if (dx === 0 && dy === 0) return t !== 1
  return t >= Math.max(dx, dy)
}
""".lstrip())

w('2849. 判断能否在给定时间到达单元格【中等】/solutions/1/1.c', r"""bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
    int dx = abs(sx - fx), dy = abs(sy - fy);
    if (dx == 0 && dy == 0) return t != 1;
    return t >= (dx > dy ? dx : dy);
}
""".lstrip())

w('2849. 判断能否在给定时间到达单元格【中等】/solutions/1/1.py', r"""class Solution:
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        dx, dy = abs(sx - fx), abs(sy - fy)
        if dx == 0 and dy == 0:
            return t != 1
        return t >= max(dx, dy)
""".lstrip())

# ============================================================
# 2850 - 将石头分散到网格图的最少移动次数
# ============================================================
w('2850. 将石头分散到网格图的最少移动次数【中等】/solutions/1/1.js', r"""/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const surplus = [], deficit = []
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] > 1) for (let k = 1; k < grid[i][j]; k++) surplus.push([i, j])
      else if (grid[i][j] === 0) deficit.push([i, j])
    }
  if (!deficit.length) return 0
  let ans = Infinity
  const permute = (arr, l) => {
    if (l === arr.length) {
      let cost = 0
      for (let i = 0; i < surplus.length; i++)
        cost += Math.abs(surplus[i][0] - arr[i][0]) + Math.abs(surplus[i][1] - arr[i][1])
      ans = Math.min(ans, cost)
      return
    }
    for (let i = l; i < arr.length; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]]
      permute(arr, l + 1)
      ;[arr[l], arr[i]] = [arr[i], arr[l]]
    }
  }
  permute(deficit, 0)
  return ans
}
""".lstrip())

w('2850. 将石头分散到网格图的最少移动次数【中等】/solutions/1/1.c', r"""int minCost, surN, defN;
int surR[9], surC[9], defR[9], defC[9], used[9];

void dfs(int idx, int cost) {
    if (idx == surN) { if (cost < minCost) minCost = cost; return; }
    for (int j = 0; j < defN; j++) {
        if (!used[j]) {
            int c = cost + abs(surR[idx] - defR[j]) + abs(surC[idx] - defC[j]);
            if (c < minCost) { used[j] = 1; dfs(idx + 1, c); used[j] = 0; }
        }
    }
}

int minimumMoves(int** grid, int gridSize, int* gridColSize) {
    surN = 0; defN = 0;
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++) {
            if (grid[i][j] > 1)
                for (int k = 1; k < grid[i][j]; k++) { surR[surN] = i; surC[surN] = j; surN++; }
            else if (grid[i][j] == 0) { defR[defN] = i; defC[defN] = j; defN++; }
        }
    if (defN == 0) return 0;
    minCost = 1000000;
    memset(used, 0, sizeof(used));
    dfs(0, 0);
    return minCost;
}
""".lstrip())

w('2850. 将石头分散到网格图的最少移动次数【中等】/solutions/1/1.py', r"""class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        surplus, deficit = [], []
        for i in range(3):
            for j in range(3):
                if grid[i][j] > 1:
                    surplus.extend([(i, j)] * (grid[i][j] - 1))
                elif grid[i][j] == 0:
                    deficit.append((i, j))
        if not deficit:
            return 0
        ans = float('inf')
        for perm in permutations(deficit):
            cost = sum(abs(s[0]-d[0]) + abs(s[1]-d[1]) for s, d in zip(surplus, perm))
            ans = min(ans, cost)
        return ans
""".lstrip())

# ============================================================
# 2851 - 字符串转换 (KMP + 矩阵快速幂)
# ============================================================
w('2851. 字符串转换【困难】/solutions/1/1.js', r"""/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(s, t, k) {
  const MOD = 1000000007n
  const n = BigInt(s.length), nn = Number(n)

  // KMP: 统计 s 的旋转中有多少等于 t
  const fail = new Int32Array(nn)
  for (let i = 1; i < nn; i++) {
    let j = fail[i - 1]
    while (j > 0 && t[j] !== t[i]) j = fail[j - 1]
    if (t[j] === t[i]) j++
    fail[i] = j
  }
  let p = 0n, j = 0
  const text = s + s
  for (let i = 0; i < 2 * nn - 1; i++) {
    while (j > 0 && text[i] !== t[j]) j = fail[j - 1]
    if (text[i] === t[j]) j++
    if (j === nn) { if (i - nn + 1 < nn) p++; j = fail[j - 1] }
  }

  const c = s === t ? 1n : 0n
  const K = BigInt(k)
  const inv_n = modPow(n, MOD - 2n, MOD)
  const nk = modPow(n - 1n, K, MOD)
  const sign = K % 2n === 0n ? 1n : MOD - 1n  // 1 or -1 mod MOD
  let result = (sign * ((c * n % MOD - p % MOD + MOD) % MOD) % MOD + p % MOD * nk % MOD) % MOD
  result = result * inv_n % MOD
  return Number(result)
}

function modPow(base, exp, mod) {
  let r = 1n; base = ((base % mod) + mod) % mod
  while (exp > 0n) { if (exp & 1n) r = r * base % mod; exp >>= 1n; base = base * base % mod }
  return r
}
""".lstrip())

w('2851. 字符串转换【困难】/solutions/1/1.c', r"""long long modPow2(long long base, long long exp, long long mod) {
    long long r = 1; base = ((base % mod) + mod) % mod;
    while (exp > 0) { if (exp & 1) r = r * base % mod; exp >>= 1; base = base * base % mod; }
    return r;
}

int numberOfWays(char* s, char* t, long long k) {
    long long MOD = 1000000007;
    int n = strlen(s);
    int* fail = (int*)calloc(n, sizeof(int));
    for (int i = 1; i < n; i++) {
        int j = fail[i - 1];
        while (j > 0 && t[j] != t[i]) j = fail[j - 1];
        if (t[j] == t[i]) j++;
        fail[i] = j;
    }
    char* text = (char*)malloc(2 * n + 1);
    memcpy(text, s, n); memcpy(text + n, s, n); text[2*n] = 0;
    long long p = 0; int j = 0;
    for (int i = 0; i < 2 * n - 1; i++) {
        while (j > 0 && text[i] != t[j]) j = fail[j - 1];
        if (text[i] == t[j]) j++;
        if (j == n) { if (i - n + 1 < n) p++; j = fail[j - 1]; }
    }
    long long c = (strncmp(s, t, n) == 0) ? 1 : 0;
    long long inv_n = modPow2(n, MOD - 2, MOD);
    long long nk = modPow2(n - 1, k, MOD);
    long long sign = (k % 2 == 0) ? 1 : MOD - 1;
    long long result = (sign % MOD * ((c * n % MOD - p % MOD + MOD) % MOD) % MOD + p % MOD * nk % MOD) % MOD;
    result = result * inv_n % MOD;
    free(fail); free(text);
    return (int)result;
}
""".lstrip())

w('2851. 字符串转换【困难】/solutions/1/1.py', r"""class Solution:
    def numberOfWays(self, s: str, t: str, k: int) -> int:
        MOD = 10 ** 9 + 7
        n = len(s)
        # KMP 统计旋转匹配数
        fail = [0] * n
        for i in range(1, n):
            j = fail[i - 1]
            while j > 0 and t[j] != t[i]:
                j = fail[j - 1]
            if t[j] == t[i]:
                j += 1
            fail[i] = j
        text = s + s
        p = j = 0
        for i in range(2 * n - 1):
            while j > 0 and text[i] != t[j]:
                j = fail[j - 1]
            if text[i] == t[j]:
                j += 1
            if j == n:
                if i - n + 1 < n:
                    p += 1
                j = fail[j - 1]
        c = 1 if s == t else 0
        inv_n = pow(n, MOD - 2, MOD)
        nk = pow(n - 1, k, MOD)
        sign = 1 if k % 2 == 0 else -1
        return (sign * (c * n - p) + p * nk) % MOD * inv_n % MOD
""".lstrip())

# ============================================================
# 2856 - 删除数对后的最小数组长度
# ============================================================
w('2856. 删除数对后的最小数组长度【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
  const n = nums.length
  const mid = nums[n >> 1]
  let lo = 0, hi = n
  while (lo < hi) { const m = (lo + hi) >> 1; if (nums[m] < mid) lo = m + 1; else hi = m }
  const left = lo
  lo = 0; hi = n
  while (lo < hi) { const m = (lo + hi) >> 1; if (nums[m] <= mid) lo = m + 1; else hi = m }
  const freq = lo - left
  return freq > (n >> 1) ? 2 * freq - n : n % 2
}
""".lstrip())

w('2856. 删除数对后的最小数组长度【中等】/solutions/1/1.c', r"""int minLengthAfterRemovals(int* nums, int numsSize) {
    int mid = nums[numsSize / 2];
    int lo = 0, hi = numsSize, m;
    while (lo < hi) { m = (lo + hi) / 2; if (nums[m] < mid) lo = m + 1; else hi = m; }
    int left = lo;
    lo = 0; hi = numsSize;
    while (lo < hi) { m = (lo + hi) / 2; if (nums[m] <= mid) lo = m + 1; else hi = m; }
    int freq = lo - left;
    return freq > numsSize / 2 ? 2 * freq - numsSize : numsSize % 2;
}
""".lstrip())

w('2856. 删除数对后的最小数组长度【中等】/solutions/1/1.py', r"""class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        n = len(nums)
        mid = nums[n // 2]
        freq = bisect_right(nums, mid) - bisect_left(nums, mid)
        return 2 * freq - n if freq > n // 2 else n % 2
""".lstrip())

# ============================================================
# 2857 - 统计距离为 k 的点对
# ============================================================
w('2857. 统计距离为 k 的点对【中等】/solutions/1/1.js', r"""/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
  const map = new Map()
  let ans = 0
  for (const [x, y] of coordinates) {
    for (let a = 0; a <= k; a++) {
      const key = `${x ^ a},${y ^ (k - a)}`
      ans += map.get(key) || 0
    }
    const myKey = `${x},${y}`
    map.set(myKey, (map.get(myKey) || 0) + 1)
  }
  return ans
}
""".lstrip())

w('2857. 统计距离为 k 的点对【中等】/solutions/1/1.c', r"""typedef struct CN { int x, y, cnt; struct CN* next; } CN;
#define CHSZ 100003

int countPairs(int** coordinates, int coordinatesSize, int* coordinatesColSize, int k) {
    CN* table[CHSZ]; memset(table, 0, sizeof(table));
    int ans = 0;
    for (int i = 0; i < coordinatesSize; i++) {
        int x = coordinates[i][0], y = coordinates[i][1];
        for (int a = 0; a <= k; a++) {
            int nx = x ^ a, ny = y ^ (k - a);
            unsigned h = ((unsigned)((long long)nx * 1000001 + ny)) % CHSZ;
            for (CN* p = table[h]; p; p = p->next)
                if (p->x == nx && p->y == ny) { ans += p->cnt; break; }
        }
        unsigned h = ((unsigned)((long long)x * 1000001 + y)) % CHSZ;
        CN* found = NULL;
        for (CN* p = table[h]; p; p = p->next)
            if (p->x == x && p->y == y) { found = p; break; }
        if (found) found->cnt++;
        else { CN* node = (CN*)malloc(sizeof(CN)); node->x=x; node->y=y; node->cnt=1; node->next=table[h]; table[h]=node; }
    }
    for (int i = 0; i < CHSZ; i++) { CN* p = table[i]; while (p) { CN* n = p->next; free(p); p = n; } }
    return ans;
}
""".lstrip())

w('2857. 统计距离为 k 的点对【中等】/solutions/1/1.py', r"""class Solution:
    def countPairs(self, coordinates: List[List[int]], k: int) -> int:
        cnt = defaultdict(int)
        ans = 0
        for x, y in coordinates:
            for a in range(k + 1):
                ans += cnt[(x ^ a, y ^ (k - a))]
            cnt[(x, y)] += 1
        return ans
""".lstrip())

# ============================================================
# 2858 - 可以到达每一个节点的最少边反转次数 (换根 DP)
# ============================================================
w('2858. 可以到达每一个节点的最少边反转次数【困难】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {
  const adj = Array.from({length: n}, () => [])
  for (const [u, v] of edges) {
    adj[u].push([v, 0]) // 正向边无需反转
    adj[v].push([u, 1]) // 反向边需反转
  }
  const ans = new Int32Array(n)
  const parent = new Int32Array(n).fill(-1)
  const pcost = new Int32Array(n)
  const vis = new Uint8Array(n)
  const order = []
  const queue = [0]; let head = 0; vis[0] = 1
  let cost0 = 0
  while (head < queue.length) {
    const u = queue[head++]; order.push(u)
    for (const [v, w] of adj[u]) {
      if (!vis[v]) { vis[v] = 1; parent[v] = u; pcost[v] = w; cost0 += w; queue.push(v) }
    }
  }
  ans[0] = cost0
  for (let i = 1; i < order.length; i++) {
    const u = order[i]
    ans[u] = ans[parent[u]] + (pcost[u] === 0 ? 1 : -1)
  }
  return Array.from(ans)
}
""".lstrip())

w('2858. 可以到达每一个节点的最少边反转次数【困难】/solutions/1/1.c', r"""int* minEdgeReversals(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    int* head = (int*)malloc(n * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int* to = (int*)malloc(4 * n * sizeof(int));
    int* cost = (int*)malloc(4 * n * sizeof(int));
    int* nxt = (int*)malloc(4 * n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[idx]=v; cost[idx]=0; nxt[idx]=head[u]; head[u]=idx++;
        to[idx]=u; cost[idx]=1; nxt[idx]=head[v]; head[v]=idx++;
    }
    int* ans = (int*)malloc(n * sizeof(int));
    int* par = (int*)malloc(n * sizeof(int));
    int* pcost = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int front = 0, back = 0;
    order[back++] = 0; vis[0] = 1; par[0] = -1;
    int cost0 = 0;
    while (front < back) {
        int u = order[front++];
        for (int e = head[u]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (!vis[v]) { vis[v]=1; par[v]=u; pcost[v]=cost[e]; cost0+=cost[e]; order[back++]=v; }
        }
    }
    ans[0] = cost0;
    for (int i = 1; i < n; i++) { int u = order[i]; ans[u] = ans[par[u]] + (pcost[u]==0?1:-1); }
    free(head); free(to); free(cost); free(nxt); free(par); free(pcost); free(order); free(vis);
    *returnSize = n;
    return ans;
}
""".lstrip())

w('2858. 可以到达每一个节点的最少边反转次数【困难】/solutions/1/1.py', r"""class Solution:
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append((v, 0))
            adj[v].append((u, 1))
        ans = [0] * n
        parent = [-1] * n
        pcost = [0] * n
        order = []
        vis = [False] * n
        q = deque([0]); vis[0] = True
        cost0 = 0
        while q:
            u = q.popleft(); order.append(u)
            for v, w in adj[u]:
                if not vis[v]:
                    vis[v] = True; parent[v] = u; pcost[v] = w; cost0 += w; q.append(v)
        ans[0] = cost0
        for u in order[1:]:
            ans[u] = ans[parent[u]] + (1 if pcost[u] == 0 else -1)
        return ans
""".lstrip())

# ============================================================
# 2860 - 让所有学生保持开心的分组方法数
# ============================================================
w('2860. 让所有学生保持开心的分组方法数【中等】/solutions/1/1.js', r"""/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let ans = (nums[0] > 0 ? 1 : 0) + 1 // s=0（检查） + s=n（一定满足）
  for (let s = 1; s < n; s++) {
    if (nums[s - 1] < s && nums[s] > s) ans++
  }
  return ans
}
""".lstrip())

w('2860. 让所有学生保持开心的分组方法数【中等】/solutions/1/1.c', r"""int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int countWays(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmpInt);
    int ans = (nums[0] > 0 ? 1 : 0) + 1;
    for (int s = 1; s < numsSize; s++)
        if (nums[s - 1] < s && nums[s] > s) ans++;
    return ans;
}
""".lstrip())

w('2860. 让所有学生保持开心的分组方法数【中等】/solutions/1/1.py', r"""class Solution:
    def countWays(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        ans = (1 if nums[0] > 0 else 0) + 1
        for s in range(1, n):
            if nums[s - 1] < s and nums[s] > s:
                ans += 1
        return ans
""".lstrip())

# ============================================================
# 2861 - 最大合金数 (二分答案)
# ============================================================
w('2861. 最大合金数【中等】/solutions/1/1.js', r"""/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
  let ans = 0
  for (let m = 0; m < k; m++) {
    let lo = 0, hi = 2e8
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      let totalCost = 0, ok = true
      for (let j = 0; j < n; j++) {
        const need = Math.max(0, mid * composition[m][j] - stock[j])
        totalCost += need * cost[j]
        if (totalCost > budget) { ok = false; break }
      }
      if (ok) { ans = Math.max(ans, mid); lo = mid + 1 }
      else hi = mid - 1
    }
  }
  return ans
}
""".lstrip())

w('2861. 最大合金数【中等】/solutions/1/1.c', r"""int maxNumberOfAlloys(int n, int k, int budget, int** composition, int compositionSize,
    int* compositionColSize, int* stock, int stockSize, int* cost, int costSize) {
    int ans = 0;
    for (int m = 0; m < k; m++) {
        int lo = 0, hi = 200000000;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            long long totalCost = 0;
            int ok = 1;
            for (int j = 0; j < n; j++) {
                long long need = (long long)mid * composition[m][j] - stock[j];
                if (need < 0) need = 0;
                totalCost += need * cost[j];
                if (totalCost > budget) { ok = 0; break; }
            }
            if (ok) { if (mid > ans) ans = mid; lo = mid + 1; }
            else hi = mid - 1;
        }
    }
    return ans;
}
""".lstrip())

w('2861. 最大合金数【中等】/solutions/1/1.py', r"""class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: List[List[int]],
                          stock: List[int], cost: List[int]) -> int:
        ans = 0
        for m in range(k):
            lo, hi = 0, 2 * 10 ** 8
            while lo <= hi:
                mid = (lo + hi) // 2
                total = sum(max(0, mid * composition[m][j] - stock[j]) * cost[j] for j in range(n))
                if total <= budget:
                    ans = max(ans, mid)
                    lo = mid + 1
                else:
                    hi = mid - 1
        return ans
""".lstrip())

print("Part 2 done: 2836-2861")
