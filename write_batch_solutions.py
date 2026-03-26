#!/usr/bin/env python3
"""Batch write solution files for LeetCode problems."""
import os, glob

def find_dir(num):
    matches = glob.glob(f'notes/{num}.*')
    return matches[0] if matches else None

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f'  wrote {path}')

solutions = {}

# ===== 2565 =====
solutions[2565] = {
'py': '''class Solution:
    def minimumScore(self, s: str, t: str) -> int:
        n, m = len(s), len(t)
        suf = [0] * (n + 1)
        suf[n] = m
        for i in range(n - 1, -1, -1):
            suf[i] = suf[i + 1]
            if suf[i] > 0 and s[i] == t[suf[i] - 1]:
                suf[i] -= 1
        ans = suf[0]
        j = 0
        for i in range(n):
            if j < m and s[i] == t[j]:
                j += 1
                ans = min(ans, max(0, suf[i + 1] - j))
        return ans
'''}

# ===== 2567 =====
solutions[2567] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  return Math.min(
    nums[n - 1] - nums[2],
    nums[n - 3] - nums[0],
    nums[n - 2] - nums[1]
  )
}
''',
'c': '''int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int minimizeSum(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int n = numsSize;
    int a = nums[n - 1] - nums[2];
    int b = nums[n - 3] - nums[0];
    int c = nums[n - 2] - nums[1];
    int ans = a < b ? a : b;
    return ans < c ? ans : c;
}
''',
'py': '''class Solution:
    def minimizeSum(self, nums: list[int]) -> int:
        nums.sort()
        n = len(nums)
        return min(nums[n - 1] - nums[2], nums[n - 3] - nums[0], nums[n - 2] - nums[1])
'''}

# ===== 2568 =====
solutions[2568] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (nums) {
  const s = new Set(nums)
  let v = 1
  while (s.has(v)) v <<= 1
  return v
}
''',
'c': '''int minImpossibleOR(int* nums, int numsSize) {
    int mask = 0;
    for (int i = 0; i < numsSize; i++) {
        int v = nums[i];
        if (v > 0 && (v & (v - 1)) == 0) mask |= v;
    }
    int v = 1;
    while (mask & v) v <<= 1;
    return v;
}
''',
'py': '''class Solution:
    def minImpossibleOR(self, nums: list[int]) -> int:
        s = set(nums)
        v = 1
        while v in s:
            v <<= 1
        return v
'''}

# ===== 2569 =====
solutions[2569] = {
'js': '''/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function (nums1, nums2, queries) {
  const n = nums1.length
  const tree = new Array(4 * n).fill(0)
  const lazy = new Array(4 * n).fill(false)

  function build(o, l, r) {
    if (l === r) { tree[o] = nums1[l]; return }
    const m = (l + r) >> 1
    build(2 * o, l, m)
    build(2 * o + 1, m + 1, r)
    tree[o] = tree[2 * o] + tree[2 * o + 1]
  }

  function pushDown(o, l, r) {
    if (lazy[o]) {
      const m = (l + r) >> 1
      tree[2 * o] = (m - l + 1) - tree[2 * o]
      tree[2 * o + 1] = (r - m) - tree[2 * o + 1]
      lazy[2 * o] = !lazy[2 * o]
      lazy[2 * o + 1] = !lazy[2 * o + 1]
      lazy[o] = false
    }
  }

  function update(o, l, r, ql, qr) {
    if (ql <= l && r <= qr) {
      tree[o] = (r - l + 1) - tree[o]
      lazy[o] = !lazy[o]
      return
    }
    pushDown(o, l, r)
    const m = (l + r) >> 1
    if (ql <= m) update(2 * o, l, m, ql, qr)
    if (qr > m) update(2 * o + 1, m + 1, r, ql, qr)
    tree[o] = tree[2 * o] + tree[2 * o + 1]
  }

  build(1, 0, n - 1)
  let sum2 = 0
  for (const v of nums2) sum2 += v

  const ans = []
  for (const [type, l, r] of queries) {
    if (type === 1) {
      update(1, 0, n - 1, l, r)
    } else if (type === 2) {
      sum2 += tree[1] * l
    } else {
      ans.push(sum2)
    }
  }
  return ans
}
''',
'c': '''typedef struct {
    int* tree;
    int* lazy;
    int n;
} SegTree;

void build(SegTree* st, int* nums, int o, int l, int r) {
    if (l == r) { st->tree[o] = nums[l]; return; }
    int m = (l + r) / 2;
    build(st, nums, 2 * o, l, m);
    build(st, nums, 2 * o + 1, m + 1, r);
    st->tree[o] = st->tree[2 * o] + st->tree[2 * o + 1];
}

void pushDown(SegTree* st, int o, int l, int r) {
    if (st->lazy[o]) {
        int m = (l + r) / 2;
        st->tree[2 * o] = (m - l + 1) - st->tree[2 * o];
        st->tree[2 * o + 1] = (r - m) - st->tree[2 * o + 1];
        st->lazy[2 * o] ^= 1;
        st->lazy[2 * o + 1] ^= 1;
        st->lazy[o] = 0;
    }
}

void update(SegTree* st, int o, int l, int r, int ql, int qr) {
    if (ql <= l && r <= qr) {
        st->tree[o] = (r - l + 1) - st->tree[o];
        st->lazy[o] ^= 1;
        return;
    }
    pushDown(st, o, l, r);
    int m = (l + r) / 2;
    if (ql <= m) update(st, 2 * o, l, m, ql, qr);
    if (qr > m) update(st, 2 * o + 1, m + 1, r, ql, qr);
    st->tree[o] = st->tree[2 * o] + st->tree[2 * o + 1];
}

long long* handleQuery(int* nums1, int nums1Size, int* nums2, int nums2Size, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int n = nums1Size;
    SegTree st;
    st.n = n;
    st.tree = (int*)calloc(4 * n, sizeof(int));
    st.lazy = (int*)calloc(4 * n, sizeof(int));
    build(&st, nums1, 1, 0, n - 1);

    long long sum2 = 0;
    for (int i = 0; i < n; i++) sum2 += nums2[i];

    long long* ans = (long long*)malloc(queriesSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < queriesSize; i++) {
        int type = queries[i][0], l = queries[i][1], r = queries[i][2];
        if (type == 1) {
            update(&st, 1, 0, n - 1, l, r);
        } else if (type == 2) {
            sum2 += (long long)st.tree[1] * l;
        } else {
            ans[cnt++] = sum2;
        }
    }
    free(st.tree);
    free(st.lazy);
    *returnSize = cnt;
    return ans;
}
''',
'py': '''class Solution:
    def handleQuery(self, nums1: list[int], nums2: list[int], queries: list[list[int]]) -> list[int]:
        n = len(nums1)
        tree = [0] * (4 * n)
        lazy = [False] * (4 * n)

        def build(o, l, r):
            if l == r:
                tree[o] = nums1[l]
                return
            m = (l + r) // 2
            build(2 * o, l, m)
            build(2 * o + 1, m + 1, r)
            tree[o] = tree[2 * o] + tree[2 * o + 1]

        def push_down(o, l, r):
            if lazy[o]:
                m = (l + r) // 2
                tree[2 * o] = (m - l + 1) - tree[2 * o]
                tree[2 * o + 1] = (r - m) - tree[2 * o + 1]
                lazy[2 * o] = not lazy[2 * o]
                lazy[2 * o + 1] = not lazy[2 * o + 1]
                lazy[o] = False

        def update(o, l, r, ql, qr):
            if ql <= l and r <= qr:
                tree[o] = (r - l + 1) - tree[o]
                lazy[o] = not lazy[o]
                return
            push_down(o, l, r)
            m = (l + r) // 2
            if ql <= m:
                update(2 * o, l, m, ql, qr)
            if qr > m:
                update(2 * o + 1, m + 1, r, ql, qr)
            tree[o] = tree[2 * o] + tree[2 * o + 1]

        build(1, 0, n - 1)
        s = sum(nums2)
        ans = []
        for t, l, r in queries:
            if t == 1:
                update(1, 0, n - 1, l, r)
            elif t == 2:
                s += tree[1] * l
            else:
                ans.append(s)
        return ans
'''}

# ===== 2571 =====
solutions[2571] = {
'js': '''/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let ops = 0
  while (n > 0) {
    const lb = n & -n
    if (n & (lb << 1)) {
      n += lb
    } else {
      n -= lb
    }
    ops++
  }
  return ops
}
''',
'c': '''int minOperations(int n) {
    int ops = 0;
    while (n > 0) {
        int lb = n & (-n);
        if (n & (lb << 1)) {
            n += lb;
        } else {
            n -= lb;
        }
        ops++;
    }
    return ops;
}
''',
'py': '''class Solution:
    def minOperations(self, n: int) -> int:
        ops = 0
        while n:
            lb = n & -n
            if n & (lb << 1):
                n += lb
            else:
                n -= lb
            ops += 1
        return ops
'''}

# ===== 2572 =====
solutions[2572] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var squareFreeSubsets = function (nums) {
  const MOD = 1000000007n
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  const pmask = new Array(31).fill(-1)
  for (let v = 1; v <= 30; v++) {
    let m = 0, x = v, valid = true
    for (let i = 0; i < primes.length; i++) {
      let cnt = 0
      while (x % primes[i] === 0) { x /= primes[i]; cnt++ }
      if (cnt > 1) { valid = false; break }
      if (cnt === 1) m |= (1 << i)
    }
    if (valid) pmask[v] = m
  }
  const freq = new Array(31).fill(0)
  for (const v of nums) freq[v]++
  const dp = new Array(1 << 10).fill(0n)
  dp[0] = 1n
  for (let v = 2; v <= 30; v++) {
    if (freq[v] === 0 || pmask[v] === -1) continue
    const m = pmask[v], f = BigInt(freq[v])
    for (let s = (1 << 10) - 1; s >= 0; s--) {
      if ((s & m) === 0 && dp[s] > 0n) {
        dp[s | m] = (dp[s | m] + dp[s] * f) % MOD
      }
    }
  }
  let ans = 0n
  for (let s = 0; s < (1 << 10); s++) ans = (ans + dp[s]) % MOD
  let pow2 = 1n
  for (let i = 0; i < freq[1]; i++) pow2 = pow2 * 2n % MOD
  ans = (ans * pow2 - 1n + MOD) % MOD
  return Number(ans)
}
''',
'c': '''int squareFreeSubsets(int* nums, int numsSize) {
    long long MOD = 1000000007;
    int primes[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    int pmask[31];
    memset(pmask, -1, sizeof(pmask));
    for (int v = 1; v <= 30; v++) {
        int m = 0, x = v, valid = 1;
        for (int i = 0; i < 10; i++) {
            int cnt = 0;
            while (x % primes[i] == 0) { x /= primes[i]; cnt++; }
            if (cnt > 1) { valid = 0; break; }
            if (cnt == 1) m |= (1 << i);
        }
        if (valid) pmask[v] = m;
    }
    int freq[31] = {0};
    for (int i = 0; i < numsSize; i++) freq[nums[i]]++;
    long long dp[1024] = {0};
    dp[0] = 1;
    for (int v = 2; v <= 30; v++) {
        if (freq[v] == 0 || pmask[v] == -1) continue;
        int m = pmask[v];
        for (int s = 1023; s >= 0; s--) {
            if ((s & m) == 0 && dp[s] > 0) {
                dp[s | m] = (dp[s | m] + dp[s] * freq[v]) % MOD;
            }
        }
    }
    long long ans = 0;
    for (int s = 0; s < 1024; s++) ans = (ans + dp[s]) % MOD;
    long long pow2 = 1;
    for (int i = 0; i < freq[1]; i++) pow2 = pow2 * 2 % MOD;
    ans = (ans % MOD * pow2 % MOD - 1 + MOD) % MOD;
    return (int)ans;
}
''',
'py': '''class Solution:
    def squareFreeSubsets(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        mask = {}
        for v in range(1, 31):
            m, x, valid = 0, v, True
            for i, p in enumerate(primes):
                cnt = 0
                while x % p == 0:
                    x //= p
                    cnt += 1
                if cnt > 1:
                    valid = False
                    break
                if cnt == 1:
                    m |= 1 << i
            if valid:
                mask[v] = m
        from collections import Counter
        freq = Counter(nums)
        dp = [0] * 1024
        dp[0] = 1
        for v in range(2, 31):
            if freq[v] == 0 or v not in mask:
                continue
            m = mask[v]
            for s in range(1023, -1, -1):
                if (s & m) == 0 and dp[s]:
                    dp[s | m] = (dp[s | m] + dp[s] * freq[v]) % MOD
        ans = sum(dp) % MOD
        ans = (ans * pow(2, freq[1], MOD) - 1) % MOD
        return ans
'''}

# ===== 2573 =====
solutions[2573] = {
'js': '''/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  const n = lcp.length
  const s = new Array(n).fill(-1)
  let c = 0
  for (let i = 0; i < n; i++) {
    if (s[i] >= 0) continue
    if (c >= 26) return ""
    s[i] = c
    for (let j = i + 1; j < n; j++) {
      if (lcp[i][j] > 0 && s[j] < 0) s[j] = c
    }
    c++
  }
  // 验证 LCP 矩阵
  const chk = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === s[j]) chk[i][j] = chk[i + 1][j + 1] + 1
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (chk[i][j] !== lcp[i][j]) return ""
    }
  }
  return s.map((c) => String.fromCharCode(97 + c)).join("")
}
''',
'c': '''char* findTheString(int** lcp, int lcpSize, int* lcpColSize) {
    int n = lcpSize;
    int* s = (int*)malloc(n * sizeof(int));
    memset(s, -1, n * sizeof(int));
    int c = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] >= 0) continue;
        if (c >= 26) { free(s); char* r = (char*)calloc(1, 1); return r; }
        s[i] = c;
        for (int j = i + 1; j < n; j++) {
            if (lcp[i][j] > 0 && s[j] < 0) s[j] = c;
        }
        c++;
    }
    int** chk = (int**)malloc((n + 1) * sizeof(int*));
    for (int i = 0; i <= n; i++) chk[i] = (int*)calloc(n + 1, sizeof(int));
    for (int i = n - 1; i >= 0; i--) {
        for (int j = n - 1; j >= 0; j--) {
            if (s[i] == s[j]) chk[i][j] = chk[i + 1][j + 1] + 1;
        }
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (chk[i][j] != lcp[i][j]) {
                for (int k = 0; k <= n; k++) free(chk[k]);
                free(chk); free(s);
                char* r = (char*)calloc(1, 1); return r;
            }
        }
    }
    char* res = (char*)malloc(n + 1);
    for (int i = 0; i < n; i++) res[i] = 'a' + s[i];
    res[n] = '\\0';
    for (int k = 0; k <= n; k++) free(chk[k]);
    free(chk); free(s);
    return res;
}
''',
'py': '''class Solution:
    def findTheString(self, lcp: list[list[int]]) -> str:
        n = len(lcp)
        s = [-1] * n
        c = 0
        for i in range(n):
            if s[i] >= 0:
                continue
            if c >= 26:
                return ""
            s[i] = c
            for j in range(i + 1, n):
                if lcp[i][j] > 0 and s[j] < 0:
                    s[j] = c
            c += 1
        chk = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if s[i] == s[j]:
                    chk[i][j] = chk[i + 1][j + 1] + 1
        for i in range(n):
            for j in range(n):
                if chk[i][j] != lcp[i][j]:
                    return ""
        return "".join(chr(97 + x) for x in s)
'''}

# ===== 2575 =====
solutions[2575] = {
'js': '''/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  const n = word.length
  const div = new Array(n)
  let rem = 0
  for (let i = 0; i < n; i++) {
    rem = (rem * 10 + (word.charCodeAt(i) - 48)) % m
    div[i] = rem === 0 ? 1 : 0
  }
  return div
}
''',
'c': '''int* divisibilityArray(char* word, int m, int* returnSize) {
    int n = strlen(word);
    *returnSize = n;
    int* div = (int*)malloc(n * sizeof(int));
    long long rem = 0;
    for (int i = 0; i < n; i++) {
        rem = (rem * 10 + (word[i] - '0')) % m;
        div[i] = rem == 0 ? 1 : 0;
    }
    return div;
}
''',
'py': '''class Solution:
    def divisibilityArray(self, word: str, m: int) -> list[int]:
        res = []
        rem = 0
        for c in word:
            rem = (rem * 10 + int(c)) % m
            res.append(1 if rem == 0 else 0)
        return res
'''}

# ===== 2576 =====
solutions[2576] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let lo = 0, hi = Math.floor(n / 2)
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    let ok = true
    for (let i = 0; i < mid; i++) {
      if (2 * nums[i] > nums[n - mid + i]) { ok = false; break }
    }
    if (ok) lo = mid; else hi = mid - 1
  }
  return lo * 2
}
''',
'c': '''int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (x > y) - (x < y);
}

int maxNumOfMarkedIndices(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int n = numsSize;
    int lo = 0, hi = n / 2;
    while (lo < hi) {
        int mid = (lo + hi + 1) / 2;
        int ok = 1;
        for (int i = 0; i < mid; i++) {
            if (2LL * nums[i] > nums[n - mid + i]) { ok = 0; break; }
        }
        if (ok) lo = mid; else hi = mid - 1;
    }
    return lo * 2;
}
''',
'py': '''class Solution:
    def maxNumOfMarkedIndices(self, nums: list[int]) -> int:
        nums.sort()
        n = len(nums)
        lo, hi = 0, n // 2
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if all(2 * nums[i] <= nums[n - mid + i] for i in range(mid)):
                lo = mid
            else:
                hi = mid - 1
        return lo * 2
'''}

# ===== 2577 =====
solutions[2577] = {
'js': '''/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  const m = grid.length, n = grid[0].length
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1
  const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity))
  dist[0][0] = 0
  const heap = [[0, 0, 0]]
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const push = (v) => {
    heap.push(v)
    let i = heap.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (heap[p][0] <= heap[i][0]) break
      ;[heap[p], heap[i]] = [heap[i], heap[p]]
      i = p
    }
  }
  const pop = () => {
    const top = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last
      let i = 0
      while (true) {
        let s = i, l = 2 * i + 1, r = 2 * i + 2
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r
        if (s === i) break
        ;[heap[s], heap[i]] = [heap[i], heap[s]]
        i = s
      }
    }
    return top
  }

  while (heap.length) {
    const [t, r, c] = pop()
    if (r === m - 1 && c === n - 1) return t
    if (t > dist[r][c]) continue
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue
      let w = Math.max(t + 1, grid[nr][nc])
      if ((w - t) % 2 === 0) w++
      if (w < dist[nr][nc]) {
        dist[nr][nc] = w
        push([w, nr, nc])
      }
    }
  }
  return -1
}
''',
'c': '''typedef struct { int time; int row; int col; } Node;

void hswap(Node* a, Node* b) { Node t = *a; *a = *b; *b = t; }

void hpush(Node* h, int* sz, Node v) {
    h[(*sz)++] = v;
    int i = *sz - 1;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (h[p].time <= h[i].time) break;
        hswap(&h[p], &h[i]);
        i = p;
    }
}

Node hpop(Node* h, int* sz) {
    Node top = h[0];
    h[0] = h[--(*sz)];
    int i = 0;
    while (1) {
        int s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < *sz && h[l].time < h[s].time) s = l;
        if (r < *sz && h[r].time < h[s].time) s = r;
        if (s == i) break;
        hswap(&h[s], &h[i]);
        i = s;
    }
    return top;
}

int minimumTime(int** grid, int gridSize, int* gridColSize) {
    int m = gridSize, n = gridColSize[0];
    if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
    int* dist = (int*)malloc(m * n * sizeof(int));
    for (int i = 0; i < m * n; i++) dist[i] = 0x7fffffff;
    dist[0] = 0;
    Node* heap = (Node*)malloc(m * n * 4 * sizeof(Node));
    int hsz = 0;
    hpush(heap, &hsz, (Node){0, 0, 0});
    int dx[] = {0, 0, 1, -1}, dy[] = {1, -1, 0, 0};
    int ans = -1;
    while (hsz > 0) {
        Node cur = hpop(heap, &hsz);
        if (cur.row == m - 1 && cur.col == n - 1) { ans = cur.time; break; }
        if (cur.time > dist[cur.row * n + cur.col]) continue;
        for (int d = 0; d < 4; d++) {
            int nr = cur.row + dx[d], nc = cur.col + dy[d];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            int w = cur.time + 1;
            if (w < grid[nr][nc]) w = grid[nr][nc];
            if ((w - cur.time) % 2 == 0) w++;
            if (w < dist[nr * n + nc]) {
                dist[nr * n + nc] = w;
                hpush(heap, &hsz, (Node){w, nr, nc});
            }
        }
    }
    free(dist); free(heap);
    return ans;
}
''',
'py': '''class Solution:
    def minimumTime(self, grid: list[list[int]]) -> int:
        m, n = len(grid), len(grid[0])
        if grid[0][1] > 1 and grid[1][0] > 1:
            return -1
        import heapq
        dist = [[float("inf")] * n for _ in range(m)]
        dist[0][0] = 0
        heap = [(0, 0, 0)]
        while heap:
            t, r, c = heapq.heappop(heap)
            if r == m - 1 and c == n - 1:
                return t
            if t > dist[r][c]:
                continue
            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    w = max(t + 1, grid[nr][nc])
                    if (w - t) % 2 == 0:
                        w += 1
                    if w < dist[nr][nc]:
                        dist[nr][nc] = w
                        heapq.heappush(heap, (w, nr, nc))
        return -1
'''}

# ===== 2579 =====
solutions[2579] = {
'js': '''/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  return 2 * n * n - 2 * n + 1
}
''',
'c': '''long long coloredCells(int n) {
    return 2LL * n * n - 2LL * n + 1;
}
''',
'py': '''class Solution:
    def coloredCells(self, n: int) -> int:
        return 2 * n * n - 2 * n + 1
'''}

# ===== 2580 =====
solutions[2580] = {
'js': '''/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  const MOD = 1000000007n
  ranges.sort((a, b) => a[0] - b[0])
  let groups = 0, maxEnd = -1
  for (const [s, e] of ranges) {
    if (s > maxEnd) groups++
    maxEnd = Math.max(maxEnd, e)
  }
  let ans = 1n
  for (let i = 0; i < groups; i++) ans = (ans * 2n) % MOD
  return Number(ans)
}
''',
'c': '''int cmp(const void* a, const void* b) {
    int* ra = *(int**)a, *rb = *(int**)b;
    return ra[0] - rb[0];
}

int countWays(int** ranges, int rangesSize, int* rangesColSize) {
    qsort(ranges, rangesSize, sizeof(int*), cmp);
    long long MOD = 1000000007;
    int groups = 0, maxEnd = -1;
    for (int i = 0; i < rangesSize; i++) {
        if (ranges[i][0] > maxEnd) groups++;
        if (ranges[i][1] > maxEnd) maxEnd = ranges[i][1];
    }
    long long ans = 1;
    for (int i = 0; i < groups; i++) ans = ans * 2 % MOD;
    return (int)ans;
}
''',
'py': '''class Solution:
    def countWays(self, ranges: list[list[int]]) -> int:
        MOD = 10**9 + 7
        ranges.sort()
        groups = 0
        max_end = -1
        for s, e in ranges:
            if s > max_end:
                groups += 1
            max_end = max(max_end, e)
        return pow(2, groups, MOD)
'''}

# ===== 2581 =====
solutions[2581] = {
'js': '''/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function (edges, guesses, k) {
  const n = edges.length + 1
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const guessSet = new Set()
  for (const [u, v] of guesses) guessSet.add(u * 100001 + v)

  // BFS 求以 0 为根时的正确猜测数
  const parent = new Array(n).fill(-1)
  const order = []
  const visited = new Uint8Array(n)
  visited[0] = 1
  const queue = [0]
  let front = 0
  let cnt = 0
  while (front < queue.length) {
    const u = queue[front++]
    order.push(u)
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        queue.push(v)
        if (guessSet.has(u * 100001 + v)) cnt++
      }
    }
  }

  // 换根 DP
  const cnts = new Array(n)
  cnts[0] = cnt
  let ans = cnt >= k ? 1 : 0
  for (let i = 1; i < order.length; i++) {
    const u = order[i], p = parent[u]
    let c = cnts[p]
    if (guessSet.has(p * 100001 + u)) c--
    if (guessSet.has(u * 100001 + p)) c++
    cnts[u] = c
    if (c >= k) ans++
  }
  return ans
}
''',
'c': '''#define HSIZE 262144
#define HMASK (HSIZE - 1)

typedef struct HNode { long long key; struct HNode* next; } HNode;
HNode* htable[HSIZE];

void hinit() { memset(htable, 0, sizeof(htable)); }

unsigned hfn(long long key) { return (unsigned)(key ^ (key >> 17)) & HMASK; }

void hins(long long key) {
    unsigned h = hfn(key);
    HNode* n = (HNode*)malloc(sizeof(HNode));
    n->key = key; n->next = htable[h]; htable[h] = n;
}

int hhas(long long key) {
    for (HNode* n = htable[hfn(key)]; n; n = n->next)
        if (n->key == key) return 1;
    return 0;
}

void hfree() {
    for (int i = 0; i < HSIZE; i++) {
        HNode* n = htable[i];
        while (n) { HNode* t = n->next; free(n); n = t; }
        htable[i] = NULL;
    }
}

int rootCount(int** edges, int edgesSize, int* edgesColSize, int** guesses, int guessesSize, int* guessesColSize, int k) {
    int n = edgesSize + 1;
    int* head = (int*)malloc(n * sizeof(int));
    int* to = (int*)malloc(2 * edgesSize * sizeof(int));
    int* nxt = (int*)malloc(2 * edgesSize * sizeof(int));
    memset(head, -1, n * sizeof(int));
    int ei = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        to[ei] = v; nxt[ei] = head[u]; head[u] = ei++;
        to[ei] = u; nxt[ei] = head[v]; head[v] = ei++;
    }
    hinit();
    for (int i = 0; i < guessesSize; i++)
        hins((long long)guesses[i][0] * 100001 + guesses[i][1]);
    int* par = (int*)malloc(n * sizeof(int));
    int* order = (int*)malloc(n * sizeof(int));
    int* vis = (int*)calloc(n, sizeof(int));
    int front = 0, back = 0;
    order[back++] = 0; vis[0] = 1; par[0] = -1;
    int cnt = 0;
    while (front < back) {
        int u = order[front++];
        for (int e = head[u]; e != -1; e = nxt[e]) {
            int v = to[e];
            if (!vis[v]) {
                vis[v] = 1; par[v] = u; order[back++] = v;
                if (hhas((long long)u * 100001 + v)) cnt++;
            }
        }
    }
    int* cnts = (int*)malloc(n * sizeof(int));
    cnts[0] = cnt;
    int ans = cnt >= k ? 1 : 0;
    for (int i = 1; i < n; i++) {
        int u = order[i], p = par[u];
        int c = cnts[p];
        if (hhas((long long)p * 100001 + u)) c--;
        if (hhas((long long)u * 100001 + p)) c++;
        cnts[u] = c;
        if (c >= k) ans++;
    }
    hfree();
    free(head); free(to); free(nxt); free(par); free(order); free(vis); free(cnts);
    return ans;
}
''',
'py': '''class Solution:
    def rootCount(self, edges: list[list[int]], guesses: list[list[int]], k: int) -> int:
        from collections import deque
        n = len(edges) + 1
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        guess_set = {(u, v) for u, v in guesses}
        parent = [-1] * n
        order = []
        visited = [False] * n
        visited[0] = True
        q = deque([0])
        cnt = 0
        while q:
            u = q.popleft()
            order.append(u)
            for v in adj[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    q.append(v)
                    if (u, v) in guess_set:
                        cnt += 1
        cnts = [0] * n
        cnts[0] = cnt
        ans = 1 if cnt >= k else 0
        for i in range(1, len(order)):
            u = order[i]
            p = parent[u]
            c = cnts[p]
            if (p, u) in guess_set:
                c -= 1
            if (u, p) in guess_set:
                c += 1
            cnts[u] = c
            if c >= k:
                ans += 1
        return ans
'''}

# ===== 2583 =====
solutions[2583] = {
'js': '''/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const sums = []
  let queue = [root]
  while (queue.length) {
    let sum = 0
    const next = []
    for (const node of queue) {
      sum += node.val
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    }
    sums.push(sum)
    queue = next
  }
  if (sums.length < k) return -1
  sums.sort((a, b) => b - a)
  return sums[k - 1]
}
''',
'c': '''/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int cmpDesc(const void* a, const void* b) {
    long long x = *(long long*)a, y = *(long long*)b;
    return x > y ? -1 : x < y ? 1 : 0;
}

long long kthLargestLevelSum(struct TreeNode* root, int k) {
    long long sums[100001];
    int cnt = 0;
    struct TreeNode* queue[100001];
    int front = 0, back = 0;
    queue[back++] = root;
    while (front < back) {
        int size = back - front;
        long long sum = 0;
        for (int i = 0; i < size; i++) {
            struct TreeNode* node = queue[front++];
            sum += node->val;
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        sums[cnt++] = sum;
    }
    if (cnt < k) return -1;
    qsort(sums, cnt, sizeof(long long), cmpDesc);
    return sums[k - 1];
}
''',
'py': '''# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        from collections import deque
        sums = []
        q = deque([root])
        while q:
            s = 0
            for _ in range(len(q)):
                node = q.popleft()
                s += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            sums.append(s)
        if len(sums) < k:
            return -1
        sums.sort(reverse=True)
        return sums[k - 1]
'''}

# ===== 2584 =====
solutions[2584] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function (nums) {
  const n = nums.length
  const last = new Map()
  const factors = new Array(n)

  for (let i = 0; i < n; i++) {
    const fs = []
    let x = nums[i]
    for (let p = 2; p * p <= x; p++) {
      if (x % p === 0) {
        fs.push(p)
        while (x % p === 0) x /= p
      }
    }
    if (x > 1) fs.push(x)
    factors[i] = fs
    for (const p of fs) last.set(p, i)
  }

  let maxEnd = 0
  for (let i = 0; i < n - 1; i++) {
    for (const p of factors[i]) {
      maxEnd = Math.max(maxEnd, last.get(p))
    }
    if (maxEnd === i) return i
  }
  return -1
}
''',
'c': '''int findValidSplit(int* nums, int numsSize) {
    int n = numsSize;
    int* last = (int*)calloc(1000001, sizeof(int));
    int** factors = (int**)malloc(n * sizeof(int*));
    int* fcount = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) {
        int buf[20], cnt = 0;
        int x = nums[i];
        for (int p = 2; (long long)p * p <= x; p++) {
            if (x % p == 0) {
                buf[cnt++] = p;
                while (x % p == 0) x /= p;
            }
        }
        if (x > 1) buf[cnt++] = x;
        factors[i] = (int*)malloc(cnt * sizeof(int));
        memcpy(factors[i], buf, cnt * sizeof(int));
        fcount[i] = cnt;
        for (int j = 0; j < cnt; j++) last[buf[j]] = i;
    }
    int maxEnd = 0, ans = -1;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < fcount[i]; j++) {
            if (last[factors[i][j]] > maxEnd) maxEnd = last[factors[i][j]];
        }
        if (maxEnd == i) { ans = i; break; }
    }
    for (int i = 0; i < n; i++) free(factors[i]);
    free(factors); free(fcount); free(last);
    return ans;
}
''',
'py': '''class Solution:
    def findValidSplit(self, nums: list[int]) -> int:
        n = len(nums)
        last = {}
        factors = [[] for _ in range(n)]
        for i, x in enumerate(nums):
            d = 2
            while d * d <= x:
                if x % d == 0:
                    factors[i].append(d)
                    while x % d == 0:
                        x //= d
                d += 1
            if x > 1:
                factors[i].append(x)
            for p in factors[i]:
                last[p] = i
        max_end = 0
        for i in range(n - 1):
            for p in factors[i]:
                max_end = max(max_end, last[p])
            if max_end == i:
                return i
        return -1
'''}

# ===== 2585 =====
solutions[2585] = {
'js': '''/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function (target, types) {
  const MOD = 1000000007
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (const [count, marks] of types) {
    for (let j = target; j >= marks; j--) {
      for (let t = 1; t <= count && t * marks <= j; t++) {
        dp[j] = (dp[j] + dp[j - t * marks]) % MOD
      }
    }
  }
  return dp[target]
}
''',
'c': '''int waysToReachTarget(int target, int** types, int typesSize, int* typesColSize) {
    long long MOD = 1000000007;
    long long* dp = (long long*)calloc(target + 1, sizeof(long long));
    dp[0] = 1;
    for (int i = 0; i < typesSize; i++) {
        int count = types[i][0], marks = types[i][1];
        for (int j = target; j >= marks; j--) {
            for (int t = 1; t <= count && t * marks <= j; t++) {
                dp[j] = (dp[j] + dp[j - t * marks]) % MOD;
            }
        }
    }
    int ans = (int)dp[target];
    free(dp);
    return ans;
}
''',
'py': '''class Solution:
    def waysToReachTarget(self, target: int, types: list[list[int]]) -> int:
        MOD = 10**9 + 7
        dp = [0] * (target + 1)
        dp[0] = 1
        for count, marks in types:
            for j in range(target, marks - 1, -1):
                for t in range(1, count + 1):
                    if t * marks > j:
                        break
                    dp[j] = (dp[j] + dp[j - t * marks]) % MOD
        return dp[target]
'''}

# ===== 2587 =====
solutions[2587] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  nums.sort((a, b) => b - a)
  let sum = 0, count = 0
  for (const v of nums) {
    sum += v
    if (sum > 0) count++
    else break
  }
  return count
}
''',
'c': '''int cmp(const void* a, const void* b) {
    int x = *(int*)a, y = *(int*)b;
    return (y > x) - (y < x);
}

int maxScore(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    long long sum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        if (sum > 0) count++;
        else break;
    }
    return count;
}
''',
'py': '''class Solution:
    def maxScore(self, nums: list[int]) -> int:
        nums.sort(reverse=True)
        s = 0
        count = 0
        for v in nums:
            s += v
            if s > 0:
                count += 1
            else:
                break
        return count
'''}

# ===== 2588 =====
solutions[2588] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  const map = new Map()
  map.set(0, 1)
  let xor = 0, count = 0
  for (const v of nums) {
    xor ^= v
    count += map.get(xor) || 0
    map.set(xor, (map.get(xor) || 0) + 1)
  }
  return count
}
''',
'c': '''#define BSIZE 262144
#define BMASK (BSIZE - 1)

typedef struct BNode { int key; int val; struct BNode* next; } BNode;

long long beautifulSubarrays(int* nums, int numsSize) {
    BNode** tbl = (BNode**)calloc(BSIZE, sizeof(BNode*));
    // insert (0, 1)
    BNode* init = (BNode*)malloc(sizeof(BNode));
    init->key = 0; init->val = 1; init->next = NULL;
    tbl[0] = init;

    int xv = 0;
    long long count = 0;
    for (int i = 0; i < numsSize; i++) {
        xv ^= nums[i];
        unsigned h = ((unsigned)xv * 2654435761u) & BMASK;
        int found = 0;
        for (BNode* n = tbl[h]; n; n = n->next) {
            if (n->key == xv) { count += n->val; n->val++; found = 1; break; }
        }
        if (!found) {
            BNode* n = (BNode*)malloc(sizeof(BNode));
            n->key = xv; n->val = 1; n->next = tbl[h]; tbl[h] = n;
        }
    }
    for (int i = 0; i < BSIZE; i++) {
        BNode* n = tbl[i];
        while (n) { BNode* t = n->next; free(n); n = t; }
    }
    free(tbl);
    return count;
}
''',
'py': '''class Solution:
    def beautifulSubarrays(self, nums: list[int]) -> int:
        from collections import defaultdict
        cnt = defaultdict(int)
        cnt[0] = 1
        xor = 0
        ans = 0
        for v in nums:
            xor ^= v
            ans += cnt[xor]
            cnt[xor] += 1
        return ans
'''}

# ===== 2589 =====
solutions[2589] = {
'js': '''/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {
  tasks.sort((a, b) => a[1] - b[1])
  const run = new Uint8Array(2001)
  for (const [start, end, duration] of tasks) {
    let d = duration
    for (let t = start; t <= end; t++) {
      if (run[t]) d--
    }
    for (let t = end; t >= start && d > 0; t--) {
      if (!run[t]) {
        run[t] = 1
        d--
      }
    }
  }
  let ans = 0
  for (let t = 0; t <= 2000; t++) ans += run[t]
  return ans
}
''',
'c': '''int cmp(const void* a, const void* b) {
    int* ra = *(int**)a, *rb = *(int**)b;
    return ra[1] - rb[1];
}

int findMinimumTime(int** tasks, int tasksSize, int* tasksColSize) {
    qsort(tasks, tasksSize, sizeof(int*), cmp);
    int run[2001] = {0};
    for (int i = 0; i < tasksSize; i++) {
        int start = tasks[i][0], end = tasks[i][1], d = tasks[i][2];
        for (int t = start; t <= end; t++) {
            if (run[t]) d--;
        }
        for (int t = end; t >= start && d > 0; t--) {
            if (!run[t]) { run[t] = 1; d--; }
        }
    }
    int ans = 0;
    for (int t = 0; t <= 2000; t++) ans += run[t];
    return ans;
}
''',
'py': '''class Solution:
    def findMinimumTime(self, tasks: list[list[int]]) -> int:
        tasks.sort(key=lambda x: x[1])
        run = [False] * 2001
        for start, end, duration in tasks:
            d = duration
            for t in range(start, end + 1):
                if run[t]:
                    d -= 1
            t = end
            while d > 0:
                if not run[t]:
                    run[t] = True
                    d -= 1
                t -= 1
        return sum(run)
'''}

# ===== 2592 =====
solutions[2592] = {
'js': '''/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  nums.sort((a, b) => a - b)
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > nums[i]) i++
  }
  return i
}
''',
'c': '''int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maximizeGreatness(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int i = 0;
    for (int j = 0; j < numsSize; j++) {
        if (nums[j] > nums[i]) i++;
    }
    return i;
}
''',
'py': '''class Solution:
    def maximizeGreatness(self, nums: list[int]) -> int:
        nums.sort()
        i = 0
        for v in nums:
            if v > nums[i]:
                i += 1
        return i
'''}

# ===== Write all files =====
for num, files in solutions.items():
    d = find_dir(num)
    if not d:
        print(f'ERROR: dir not found for {num}')
        continue
    print(f'Problem {num}:')
    for ext, content in files.items():
        path = f'{d}/solutions/1/1.{ext}'
        write(path, content)
    print()

print('All solution files written!')
