int parent[200002];
int rnk[200002];

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return;
    if (rnk[px] < rnk[py]) parent[px] = py;
    else if (rnk[px] > rnk[py]) parent[py] = px;
    else { parent[py] = px; rnk[px]++; }
}

bool canTraverseAllPairs(int* nums, int numsSize) {
    if (numsSize == 1) return true;
    int N = numsSize + 100001;
    for (int i = 0; i < N; i++) { parent[i] = i; rnk[i] = 0; }
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) return false;
        int x = nums[i];
        for (int p = 2; (long long)p * p <= x; p++) {
            if (x % p == 0) {
                unite(i, numsSize + p);
                while (x % p == 0) x /= p;
            }
        }
        if (x > 1) unite(i, numsSize + x);
    }
    int root = find(0);
    for (int i = 1; i < numsSize; i++) {
        if (find(i) != root) return false;
    }
    return true;
}
