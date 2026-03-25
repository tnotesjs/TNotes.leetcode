#define MAP_SZ 200003
typedef struct HN1590 { int key; int val; struct HN1590* next; } HN1590;
static HN1590* tbl1590[MAP_SZ];

static void init1590() { memset(tbl1590, 0, sizeof(tbl1590)); }
static unsigned hf1590(int k) { return ((unsigned)k * 2654435761u) % MAP_SZ; }
static int get1590(int k) {
    for (HN1590* p = tbl1590[hf1590(k)]; p; p = p->next)
        if (p->key == k) return p->val;
    return -2;
}
static void set1590(int k, int v) {
    unsigned h = hf1590(k);
    for (HN1590* p = tbl1590[h]; p; p = p->next)
        if (p->key == k) { p->val = v; return; }
    HN1590* p = (HN1590*)malloc(sizeof(HN1590));
    p->key = k; p->val = v; p->next = tbl1590[h]; tbl1590[h] = p;
}

int minSubarray(int* nums, int numsSize, int p) {
    long long total = 0;
    for (int i = 0; i < numsSize; i++) total += nums[i];
    int rem = (int)(total % p);
    if (rem == 0) return 0;
    init1590();
    set1590(0, -1);
    int prefix = 0, res = numsSize;
    for (int i = 0; i < numsSize; i++) {
        prefix = (int)(((long long)prefix + nums[i]) % p);
        int need = (prefix - rem + p) % p;
        int v = get1590(need);
        if (v != -2 && i - v < res) res = i - v;
        set1590(prefix, i);
    }
    return res >= numsSize ? -1 : res;
}
