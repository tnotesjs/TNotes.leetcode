#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'notes')
files = {}

# ============================================================
# 2467. 树上最大得分和路径
# ============================================================
files['2467. 树上最大得分和路径【中等】/solutions/1/1.js'] = """/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    g[u].push(v)
    g[v].push(u)
  }

  // 找 Bob 到 0 的路径
  const parent = new Array(n).fill(-1)
  const visited = new Uint8Array(n)
  const queue = [0]
  visited[0] = 1
  for (let i = 0; i < queue.length; i++) {
    const u = queue[i]
    for (const v of g[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        queue.push(v)
      }
    }
  }

  // Bob 到 0 的时间
  const bobTime = new Array(n).fill(Infinity)
  let cur = bob, t = 0
  while (cur !== -1) {
    bobTime[cur] = t++
    cur = parent[cur]
  }

  // DFS from 0, Alice 走到叶子节点的最大收益
  let ans = -Infinity
  const dfs = (u, par, time, score) => {
    if (time < bobTime[u]) score += amount[u]
    else if (time === bobTime[u]) score += amount[u] / 2

    let isLeaf = true
    for (const v of g[u]) {
      if (v !== par) {
        isLeaf = false
        dfs(v, u, time + 1, score)
      }
    }
    if (isLeaf) ans = Math.max(ans, score)
  }
  dfs(0, -1, 0, 0)
  return ans
}
"""

files['2467. 树上最大得分和路径【中等】/solutions/1/1.c'] = """int *adj2467, *adjHead2467, *adjNext2467;
int adjIdx2467;

void addEdge2467(int u, int v) {
    adj2467[adjIdx2467] = v;
    adjNext2467[adjIdx2467] = adjHead2467[u];
    adjHead2467[u] = adjIdx2467++;
}

int *bobTime2467, *parent2467, *amount2467;
int ans2467;

void dfs2467(int u, int par, int time, int score) {
    if (time < bobTime2467[u]) score += amount2467[u];
    else if (time == bobTime2467[u]) score += amount2467[u] / 2;

    int isLeaf = 1;
    for (int i = adjHead2467[u]; i != -1; i = adjNext2467[i]) {
        int v = adj2467[i];
        if (v != par) {
            isLeaf = 0;
            dfs2467(v, u, time + 1, score);
        }
    }
    if (isLeaf && score > ans2467) ans2467 = score;
}

int mostProfitablePath(int** edges, int edgesSize, int* edgesColSize, int bob, int* amount, int amountSize) {
    int n = amountSize;
    adj2467 = (int *)malloc(2 * n * sizeof(int));
    adjHead2467 = (int *)malloc(n * sizeof(int));
    adjNext2467 = (int *)malloc(2 * n * sizeof(int));
    memset(adjHead2467, -1, n * sizeof(int));
    adjIdx2467 = 0;
    for (int i = 0; i < edgesSize; i++) {
        addEdge2467(edges[i][0], edges[i][1]);
        addEdge2467(edges[i][1], edges[i][0]);
    }

    parent2467 = (int *)malloc(n * sizeof(int));
    memset(parent2467, -1, n * sizeof(int));
    int *queue = (int *)malloc(n * sizeof(int));
    int *visited = (int *)calloc(n, sizeof(int));
    queue[0] = 0; visited[0] = 1;
    int head = 0, tail = 1;
    while (head < tail) {
        int u = queue[head++];
        for (int i = adjHead2467[u]; i != -1; i = adjNext2467[i]) {
            int v = adj2467[i];
            if (!visited[v]) {
                visited[v] = 1;
                parent2467[v] = u;
                queue[tail++] = v;
            }
        }
    }

    bobTime2467 = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) bobTime2467[i] = 2147483647;
    int cur = bob, t = 0;
    while (cur != -1) {
        bobTime2467[cur] = t++;
        cur = parent2467[cur];
    }

    amount2467 = amount;
    ans2467 = -2147483647;
    dfs2467(0, -1, 0, 0);

    free(adj2467); free(adjHead2467); free(adjNext2467);
    free(parent2467); free(queue); free(visited); free(bobTime2467);
    return ans2467;
}
"""

files['2467. 树上最大得分和路径【中等】/solutions/1/1.py'] = """class Solution:
    def mostProfitablePath(self, edges: list[list[int]], bob: int, amount: list[int]) -> int:
        from collections import deque
        n = len(amount)
        g = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)

        parent = [-1] * n
        visited = [False] * n
        visited[0] = True
        q = deque([0])
        while q:
            u = q.popleft()
            for v in g[u]:
                if not visited[v]:
                    visited[v] = True
                    parent[v] = u
                    q.append(v)

        bob_time = [float('inf')] * n
        cur, t = bob, 0
        while cur != -1:
            bob_time[cur] = t
            t += 1
            cur = parent[cur]

        ans = float('-inf')

        def dfs(u, par, time, score):
            nonlocal ans
            if time < bob_time[u]:
                score += amount[u]
            elif time == bob_time[u]:
                score += amount[u] // 2
            is_leaf = True
            for v in g[u]:
                if v != par:
                    is_leaf = False
                    dfs(v, u, time + 1, score)
            if is_leaf:
                ans = max(ans, score)

        dfs(0, -1, 0, 0)
        return ans
"""

# ============================================================
# 2470. 最小公倍数等于 K 的子数组数目
# ============================================================
files['2470. 最小公倍数等于 K 的子数组数目【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function (nums, k) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  const lcm = (a, b) => a / gcd(a, b) * b
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let l = 1
    for (let j = i; j < nums.length; j++) {
      l = lcm(l, nums[j])
      if (l === k) count++
      if (l > k) break
    }
  }
  return count
}
"""

files['2470. 最小公倍数等于 K 的子数组数目【中等】/solutions/1/1.c'] = """long long gcd2470(long long a, long long b) {
    while (b) { long long t = b; b = a % b; a = t; }
    return a;
}

int subarrayLCM(int* nums, int numsSize, int k) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        long long l = 1;
        for (int j = i; j < numsSize; j++) {
            l = l / gcd2470(l, nums[j]) * nums[j];
            if (l == k) count++;
            if (l > k) break;
        }
    }
    return count;
}
"""

files['2470. 最小公倍数等于 K 的子数组数目【中等】/solutions/1/1.py'] = """from math import gcd

class Solution:
    def subarrayLCM(self, nums: list[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            l = 1
            for j in range(i, len(nums)):
                l = l * nums[j] // gcd(l, nums[j])
                if l == k:
                    count += 1
                if l > k:
                    break
        return count
"""

# ============================================================
# 2471. 逐层排序二叉树所需的最少操作数目
# ============================================================
files['2471. 逐层排序二叉树所需的最少操作数目【中等】/solutions/1/1.js'] = """/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function (root) {
  // 计算排序所需的最小交换次数
  const minSwaps = (arr) => {
    const n = arr.length
    const indexed = arr.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0])
    const visited = new Uint8Array(n)
    let swaps = 0
    for (let i = 0; i < n; i++) {
      if (visited[i] || indexed[i][1] === i) continue
      let cycleLen = 0, j = i
      while (!visited[j]) {
        visited[j] = 1
        j = indexed[j][1]
        cycleLen++
      }
      swaps += cycleLen - 1
    }
    return swaps
  }

  let ans = 0
  const queue = [root]
  while (queue.length) {
    const size = queue.length
    const level = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans += minSwaps(level)
  }
  return ans
}
"""

files['2471. 逐层排序二叉树所需的最少操作数目【中等】/solutions/1/1.c'] = """/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int cmp2471(const void *a, const void *b) {
    return ((int *)a)[0] - ((int *)b)[0];
}

int minSwaps2471(int *arr, int n) {
    int (*indexed)[2] = malloc(n * sizeof(int[2]));
    for (int i = 0; i < n; i++) { indexed[i][0] = arr[i]; indexed[i][1] = i; }
    qsort(indexed, n, sizeof(int[2]), cmp2471);
    int *visited = (int *)calloc(n, sizeof(int));
    int swaps = 0;
    for (int i = 0; i < n; i++) {
        if (visited[i] || indexed[i][1] == i) continue;
        int cycleLen = 0, j = i;
        while (!visited[j]) {
            visited[j] = 1;
            j = indexed[j][1];
            cycleLen++;
        }
        swaps += cycleLen - 1;
    }
    free(indexed); free(visited);
    return swaps;
}

int minimumOperations(struct TreeNode* root) {
    if (!root) return 0;
    struct TreeNode **queue = (struct TreeNode **)malloc(100001 * sizeof(struct TreeNode *));
    int front = 0, back = 0;
    queue[back++] = root;
    int ans = 0;
    while (front < back) {
        int size = back - front;
        int *level = (int *)malloc(size * sizeof(int));
        for (int i = 0; i < size; i++) {
            struct TreeNode *node = queue[front++];
            level[i] = node->val;
            if (node->left) queue[back++] = node->left;
            if (node->right) queue[back++] = node->right;
        }
        ans += minSwaps2471(level, size);
        free(level);
    }
    free(queue);
    return ans;
}
"""

files['2471. 逐层排序二叉树所需的最少操作数目【中等】/solutions/1/1.py'] = """# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def minimumOperations(self, root) -> int:
        def min_swaps(arr):
            indexed = sorted(range(len(arr)), key=lambda i: arr[i])
            visited = [False] * len(arr)
            swaps = 0
            for i in range(len(arr)):
                if visited[i] or indexed[i] == i:
                    continue
                cycle_len = 0
                j = i
                while not visited[j]:
                    visited[j] = True
                    j = indexed[j]
                    cycle_len += 1
                swaps += cycle_len - 1
            return swaps

        ans = 0
        q = deque([root])
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans += min_swaps(level)
        return ans
"""

# ============================================================
# 2476. 二叉搜索树最近节点查询
# ============================================================
files['2476. 二叉搜索树最近节点查询【中等】/solutions/1/1.js'] = """/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  const sorted = []
  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    sorted.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  const bisectLeft = (arr, target) => {
    let lo = 0, hi = arr.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (arr[mid] < target) lo = mid + 1
      else hi = mid
    }
    return lo
  }

  return queries.map(q => {
    const idx = bisectLeft(sorted, q)
    let mn = -1, mx = -1
    if (idx < sorted.length && sorted[idx] === q) return [q, q]
    if (idx > 0) mn = sorted[idx - 1]
    if (idx < sorted.length) mx = sorted[idx]
    return [mn, mx]
  })
}
"""

files['2476. 二叉搜索树最近节点查询【中等】/solutions/1/1.c'] = """/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int sortedArr2476[100001];
int sortedCnt2476;

void inorder2476(struct TreeNode *node) {
    if (!node) return;
    inorder2476(node->left);
    sortedArr2476[sortedCnt2476++] = node->val;
    inorder2476(node->right);
}

int bisectLeft2476(int *arr, int n, int target) {
    int lo = 0, hi = n;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** closestNodes(struct TreeNode* root, int* queries, int queriesSize, int* returnSize, int** returnColumnSizes) {
    sortedCnt2476 = 0;
    inorder2476(root);
    int n = sortedCnt2476;
    *returnSize = queriesSize;
    *returnColumnSizes = (int *)malloc(queriesSize * sizeof(int));
    int **res = (int **)malloc(queriesSize * sizeof(int *));
    for (int i = 0; i < queriesSize; i++) {
        res[i] = (int *)malloc(2 * sizeof(int));
        (*returnColumnSizes)[i] = 2;
        int idx = bisectLeft2476(sortedArr2476, n, queries[i]);
        if (idx < n && sortedArr2476[idx] == queries[i]) {
            res[i][0] = res[i][1] = queries[i];
        } else {
            res[i][0] = idx > 0 ? sortedArr2476[idx - 1] : -1;
            res[i][1] = idx < n ? sortedArr2476[idx] : -1;
        }
    }
    return res;
}
"""

files['2476. 二叉搜索树最近节点查询【中等】/solutions/1/1.py'] = """# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from bisect import bisect_left

class Solution:
    def closestNodes(self, root, queries: list[int]) -> list[list[int]]:
        sorted_vals = []
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            sorted_vals.append(node.val)
            inorder(node.right)
        inorder(root)
        n = len(sorted_vals)
        res = []
        for q in queries:
            idx = bisect_left(sorted_vals, q)
            if idx < n and sorted_vals[idx] == q:
                res.append([q, q])
            else:
                mn = sorted_vals[idx - 1] if idx > 0 else -1
                mx = sorted_vals[idx] if idx < n else -1
                res.append([mn, mx])
        return res
"""

# ============================================================
# 2477. 到达首都的最少油耗
# ============================================================
files['2477. 到达首都的最少油耗【中等】/solutions/1/1.js'] = """/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const n = roads.length + 1
  const g = Array.from({ length: n }, () => [])
  for (const [u, v] of roads) {
    g[u].push(v)
    g[v].push(u)
  }

  let fuel = 0
  const dfs = (u, parent) => {
    let people = 1
    for (const v of g[u]) {
      if (v !== parent) {
        people += dfs(v, u)
      }
    }
    if (u !== 0) {
      fuel += Math.ceil(people / seats)
    }
    return people
  }
  dfs(0, -1)
  return fuel
}
"""

files['2477. 到达首都的最少油耗【中等】/solutions/1/1.c'] = """int *adj2477, *adjHead2477, *adjNext2477;
int adjIdx2477;
long long fuel2477;
int seats2477;

void addEdge2477(int u, int v) {
    adj2477[adjIdx2477] = v;
    adjNext2477[adjIdx2477] = adjHead2477[u];
    adjHead2477[u] = adjIdx2477++;
}

long long dfs2477(int u, int parent) {
    long long people = 1;
    for (int i = adjHead2477[u]; i != -1; i = adjNext2477[i]) {
        int v = adj2477[i];
        if (v != parent) {
            people += dfs2477(v, u);
        }
    }
    if (u != 0) {
        fuel2477 += (people + seats2477 - 1) / seats2477;
    }
    return people;
}

long long minimumFuelCost(int** roads, int roadsSize, int* roadsColSize, int seats) {
    int n = roadsSize + 1;
    adj2477 = (int *)malloc(2 * n * sizeof(int));
    adjHead2477 = (int *)malloc(n * sizeof(int));
    adjNext2477 = (int *)malloc(2 * n * sizeof(int));
    memset(adjHead2477, -1, n * sizeof(int));
    adjIdx2477 = 0;
    for (int i = 0; i < roadsSize; i++) {
        addEdge2477(roads[i][0], roads[i][1]);
        addEdge2477(roads[i][1], roads[i][0]);
    }
    fuel2477 = 0;
    seats2477 = seats;
    dfs2477(0, -1);
    free(adj2477); free(adjHead2477); free(adjNext2477);
    return fuel2477;
}
"""

files['2477. 到达首都的最少油耗【中等】/solutions/1/1.py'] = """class Solution:
    def minimumFuelCost(self, roads: list[list[int]], seats: int) -> int:
        from math import ceil
        n = len(roads) + 1
        g = [[] for _ in range(n)]
        for u, v in roads:
            g[u].append(v)
            g[v].append(u)

        self.fuel = 0

        def dfs(u, parent):
            people = 1
            for v in g[u]:
                if v != parent:
                    people += dfs(v, u)
            if u != 0:
                self.fuel += ceil(people / seats)
            return people

        dfs(0, -1)
        return self.fuel
"""

# ============================================================
# 2482. 行和列中一和零的差值
# ============================================================
files['2482. 行和列中一和零的差值【中等】/solutions/1/1.js'] = """/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length, n = grid[0].length
  const rowOnes = new Array(m).fill(0)
  const colOnes = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowOnes[i] += grid[i][j]
      colOnes[j] += grid[i][j]
    }
  }
  const diff = Array.from({ length: m }, () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = 2 * rowOnes[i] + 2 * colOnes[j] - m - n
    }
  }
  return diff
}
"""

files['2482. 行和列中一和零的差值【中等】/solutions/1/1.c'] = """/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** onesMinusZeros(int** grid, int gridSize, int* gridColSize, int* returnSize, int** returnColumnSizes) {
    int m = gridSize, n = gridColSize[0];
    int *rowOnes = (int *)calloc(m, sizeof(int));
    int *colOnes = (int *)calloc(n, sizeof(int));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            rowOnes[i] += grid[i][j];
            colOnes[j] += grid[i][j];
        }
    int **diff = (int **)malloc(m * sizeof(int *));
    *returnColumnSizes = (int *)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        diff[i] = (int *)malloc(n * sizeof(int));
        (*returnColumnSizes)[i] = n;
        for (int j = 0; j < n; j++) {
            diff[i][j] = 2 * rowOnes[i] + 2 * colOnes[j] - m - n;
        }
    }
    *returnSize = m;
    free(rowOnes); free(colOnes);
    return diff;
}
"""

files['2482. 行和列中一和零的差值【中等】/solutions/1/1.py'] = """class Solution:
    def onesMinusZeros(self, grid: list[list[int]]) -> list[list[int]]:
        m, n = len(grid), len(grid[0])
        row_ones = [sum(row) for row in grid]
        col_ones = [sum(grid[i][j] for i in range(m)) for j in range(n)]
        return [[2 * row_ones[i] + 2 * col_ones[j] - m - n for j in range(n)] for i in range(m)]
"""

# ============================================================
# 2483. 商店的最少代价
# ============================================================
files['2483. 商店的最少代价【中等】/solutions/1/1.js'] = """/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  const n = customers.length
  // penalty = 关门前的 N 数量 + 关门后的 Y 数量
  let totalY = 0
  for (const c of customers) if (c === 'Y') totalY++

  let penalty = totalY // 关门时间 = 0，所有 Y 都在关门后
  let minPenalty = penalty, bestTime = 0
  for (let i = 0; i < n; i++) {
    if (customers[i] === 'Y') penalty--
    else penalty++
    if (penalty < minPenalty) {
      minPenalty = penalty
      bestTime = i + 1
    }
  }
  return bestTime
}
"""

files['2483. 商店的最少代价【中等】/solutions/1/1.c'] = """int bestClosingTime(char* customers) {
    int n = strlen(customers);
    int totalY = 0;
    for (int i = 0; i < n; i++) if (customers[i] == 'Y') totalY++;
    int penalty = totalY, minPenalty = totalY, bestTime = 0;
    for (int i = 0; i < n; i++) {
        if (customers[i] == 'Y') penalty--;
        else penalty++;
        if (penalty < minPenalty) {
            minPenalty = penalty;
            bestTime = i + 1;
        }
    }
    return bestTime;
}
"""

files['2483. 商店的最少代价【中等】/solutions/1/1.py'] = """class Solution:
    def bestClosingTime(self, customers: str) -> int:
        total_y = customers.count('Y')
        penalty = total_y
        min_penalty = penalty
        best_time = 0
        for i, c in enumerate(customers):
            if c == 'Y':
                penalty -= 1
            else:
                penalty += 1
            if penalty < min_penalty:
                min_penalty = penalty
                best_time = i + 1
        return best_time
"""

# ============================================================
# 2486. 追加字符以获得子序列
# ============================================================
files['2486. 追加字符以获得子序列【中等】/solutions/1/1.js'] = """/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let j = 0
  for (let i = 0; i < s.length && j < t.length; i++) {
    if (s[i] === t[j]) j++
  }
  return t.length - j
}
"""

files['2486. 追加字符以获得子序列【中等】/solutions/1/1.c'] = """int appendCharacters(char* s, char* t) {
    int j = 0, tLen = strlen(t);
    for (int i = 0; s[i] && j < tLen; i++) {
        if (s[i] == t[j]) j++;
    }
    return tLen - j;
}
"""

files['2486. 追加字符以获得子序列【中等】/solutions/1/1.py'] = """class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        j = 0
        for c in s:
            if j < len(t) and c == t[j]:
                j += 1
        return len(t) - j
"""

# ============================================================
# 2487. 从链表中移除节点
# ============================================================
files['2487. 从链表中移除节点【中等】/solutions/1/1.js'] = """/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  // 反转链表，维护前缀最大值，再反转回来
  const reverse = (node) => {
    let prev = null
    while (node) {
      const next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return prev
  }

  head = reverse(head)
  let cur = head, maxVal = cur.val
  let prev = cur
  cur = cur.next
  while (cur) {
    if (cur.val < maxVal) {
      prev.next = cur.next
    } else {
      maxVal = cur.val
      prev = cur
    }
    cur = cur.next || (prev ? prev.next : null)
    cur = prev.next
  }
  return reverse(head)
}
"""

files['2487. 从链表中移除节点【中等】/solutions/1/1.c'] = """/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList2487(struct ListNode* head) {
    struct ListNode *prev = NULL;
    while (head) {
        struct ListNode *next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

struct ListNode* removeNodes(struct ListNode* head) {
    head = reverseList2487(head);
    struct ListNode *cur = head;
    int maxVal = cur->val;
    while (cur->next) {
        if (cur->next->val < maxVal) {
            cur->next = cur->next->next;
        } else {
            maxVal = cur->next->val;
            cur = cur->next;
        }
    }
    return reverseList2487(head);
}
"""

files['2487. 从链表中移除节点【中等】/solutions/1/1.py'] = """# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head) -> 'ListNode':
        # 用栈（单调栈）
        stack = []
        cur = head
        while cur:
            while stack and stack[-1].val < cur.val:
                stack.pop()
            stack.append(cur)
            cur = cur.next
        for i in range(len(stack) - 1):
            stack[i].next = stack[i + 1]
        stack[-1].next = None
        return stack[0]
"""

# ============================================================
# 2491. 划分技能点相等的团队
# ============================================================
files['2491. 划分技能点相等的团队【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b)
  const n = skill.length
  const target = skill[0] + skill[n - 1]
  let chemistry = 0
  for (let i = 0; i < n / 2; i++) {
    if (skill[i] + skill[n - 1 - i] !== target) return -1
    chemistry += skill[i] * skill[n - 1 - i]
  }
  return chemistry
}
"""

files['2491. 划分技能点相等的团队【中等】/solutions/1/1.c'] = """int cmp2491(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

long long dividePlayers(int* skill, int skillSize) {
    qsort(skill, skillSize, sizeof(int), cmp2491);
    int target = skill[0] + skill[skillSize - 1];
    long long chemistry = 0;
    for (int i = 0; i < skillSize / 2; i++) {
        if (skill[i] + skill[skillSize - 1 - i] != target) return -1;
        chemistry += (long long)skill[i] * skill[skillSize - 1 - i];
    }
    return chemistry;
}
"""

files['2491. 划分技能点相等的团队【中等】/solutions/1/1.py'] = """class Solution:
    def dividePlayers(self, skill: list[int]) -> int:
        skill.sort()
        n = len(skill)
        target = skill[0] + skill[-1]
        chemistry = 0
        for i in range(n // 2):
            if skill[i] + skill[n - 1 - i] != target:
                return -1
            chemistry += skill[i] * skill[n - 1 - i]
        return chemistry
"""

# ============================================================
# 2492. 两个城市间路径的最小分数
# ============================================================
files['2492. 两个城市间路径的最小分数【中等】/solutions/1/1.js'] = """/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const g = Array.from({ length: n + 1 }, () => [])
  for (const [u, v, d] of roads) {
    g[u].push([v, d])
    g[v].push([u, d])
  }
  // BFS 找连通分量中最小边权
  const visited = new Uint8Array(n + 1)
  const queue = [1]
  visited[1] = 1
  let ans = Infinity
  for (let i = 0; i < queue.length; i++) {
    const u = queue[i]
    for (const [v, d] of g[u]) {
      ans = Math.min(ans, d)
      if (!visited[v]) {
        visited[v] = 1
        queue.push(v)
      }
    }
  }
  return ans
}
"""

files['2492. 两个城市间路径的最小分数【中等】/solutions/1/1.c'] = """int minScore(int n, int** roads, int roadsSize, int* roadsColSize) {
    int *head = (int *)malloc((n + 1) * sizeof(int));
    int *to = (int *)malloc(roadsSize * 4 * sizeof(int));
    int *dist = (int *)malloc(roadsSize * 4 * sizeof(int));
    int *nxt = (int *)malloc(roadsSize * 4 * sizeof(int));
    memset(head, -1, (n + 1) * sizeof(int));
    int idx = 0;
    for (int i = 0; i < roadsSize; i++) {
        int u = roads[i][0], v = roads[i][1], d = roads[i][2];
        to[idx] = v; dist[idx] = d; nxt[idx] = head[u]; head[u] = idx++;
        to[idx] = u; dist[idx] = d; nxt[idx] = head[v]; head[v] = idx++;
    }
    int *queue = (int *)malloc((n + 1) * sizeof(int));
    int *visited = (int *)calloc(n + 1, sizeof(int));
    queue[0] = 1; visited[1] = 1;
    int front = 0, back = 1;
    int ans = 2147483647;
    while (front < back) {
        int u = queue[front++];
        for (int i = head[u]; i != -1; i = nxt[i]) {
            if (dist[i] < ans) ans = dist[i];
            if (!visited[to[i]]) {
                visited[to[i]] = 1;
                queue[back++] = to[i];
            }
        }
    }
    free(head); free(to); free(dist); free(nxt); free(queue); free(visited);
    return ans;
}
"""

files['2492. 两个城市间路径的最小分数【中等】/solutions/1/1.py'] = """class Solution:
    def minScore(self, n: int, roads: list[list[int]]) -> int:
        from collections import deque
        g = [[] for _ in range(n + 1)]
        for u, v, d in roads:
            g[u].append((v, d))
            g[v].append((u, d))
        visited = [False] * (n + 1)
        visited[1] = True
        q = deque([1])
        ans = float('inf')
        while q:
            u = q.popleft()
            for v, d in g[u]:
                ans = min(ans, d)
                if not visited[v]:
                    visited[v] = True
                    q.append(v)
        return ans
"""

# ============================================================
# 2497. 图中最大星和
# ============================================================
files['2497. 图中最大星和【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function (vals, edges, k) {
  const n = vals.length
  const neighbors = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    neighbors[u].push(vals[v])
    neighbors[v].push(vals[u])
  }
  let ans = -Infinity
  for (let i = 0; i < n; i++) {
    neighbors[i].sort((a, b) => b - a)
    let sum = vals[i]
    for (let j = 0; j < Math.min(k, neighbors[i].length); j++) {
      if (neighbors[i][j] <= 0) break
      sum += neighbors[i][j]
    }
    ans = Math.max(ans, sum)
  }
  return ans
}
"""

files['2497. 图中最大星和【中等】/solutions/1/1.c'] = """int cmpDesc2497(const void *a, const void *b) {
    return *(int *)b - *(int *)a;
}

int maxStarSum(int* vals, int valsSize, int** edges, int edgesSize, int* edgesColSize, int k) {
    int n = valsSize;
    int **neighbors = (int **)malloc(n * sizeof(int *));
    int *nCnt = (int *)calloc(n, sizeof(int));
    int *nCap = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        nCap[i] = 4;
        neighbors[i] = (int *)malloc(4 * sizeof(int));
    }
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        if (nCnt[u] == nCap[u]) { nCap[u] *= 2; neighbors[u] = realloc(neighbors[u], nCap[u] * sizeof(int)); }
        if (nCnt[v] == nCap[v]) { nCap[v] *= 2; neighbors[v] = realloc(neighbors[v], nCap[v] * sizeof(int)); }
        neighbors[u][nCnt[u]++] = vals[v];
        neighbors[v][nCnt[v]++] = vals[u];
    }
    int ans = -2147483647;
    for (int i = 0; i < n; i++) {
        qsort(neighbors[i], nCnt[i], sizeof(int), cmpDesc2497);
        int sum = vals[i];
        int lim = k < nCnt[i] ? k : nCnt[i];
        for (int j = 0; j < lim; j++) {
            if (neighbors[i][j] <= 0) break;
            sum += neighbors[i][j];
        }
        if (sum > ans) ans = sum;
        free(neighbors[i]);
    }
    free(neighbors); free(nCnt); free(nCap);
    return ans;
}
"""

files['2497. 图中最大星和【中等】/solutions/1/1.py'] = """class Solution:
    def maxStarSum(self, vals: list[int], edges: list[list[int]], k: int) -> int:
        n = len(vals)
        neighbors = [[] for _ in range(n)]
        for u, v in edges:
            neighbors[u].append(vals[v])
            neighbors[v].append(vals[u])
        ans = float('-inf')
        for i in range(n):
            neighbors[i].sort(reverse=True)
            s = vals[i]
            for j in range(min(k, len(neighbors[i]))):
                if neighbors[i][j] <= 0:
                    break
                s += neighbors[i][j]
            ans = max(ans, s)
        return ans
"""

# ============================================================
# 2498. 青蛙过河 II
# ============================================================
files['2498. 青蛙过河 II【中等】/solutions/1/1.js'] = """/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
  const n = stones.length
  // 第一次跳偶数石头，第二次跳奇数石头
  // 最大间距就是相邻两步的最大值
  let ans = stones[1] - stones[0]
  for (let i = 2; i < n; i++) {
    ans = Math.max(ans, stones[i] - stones[i - 2])
  }
  return ans
}
"""

files['2498. 青蛙过河 II【中等】/solutions/1/1.c'] = """int maxJump(int* stones, int stonesSize) {
    int ans = stones[1] - stones[0];
    for (int i = 2; i < stonesSize; i++) {
        int gap = stones[i] - stones[i - 2];
        if (gap > ans) ans = gap;
    }
    return ans;
}
"""

files['2498. 青蛙过河 II【中等】/solutions/1/1.py'] = """class Solution:
    def maxJump(self, stones: list[int]) -> int:
        ans = stones[1] - stones[0]
        for i in range(2, len(stones)):
            ans = max(ans, stones[i] - stones[i - 2])
        return ans
"""

for path, content in files.items():
    full = os.path.join(base, path)
    with open(full, 'w') as f:
        f.write(content)
    print(f'wrote {path}')

print('Batch 2 complete')
