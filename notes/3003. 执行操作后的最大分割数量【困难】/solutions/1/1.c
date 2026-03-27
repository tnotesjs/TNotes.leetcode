#define HT_SIZE (1 << 20)
#define HT_MASK (HT_SIZE - 1)

typedef struct { long long key; int val; int gen; } HTEntry;
static HTEntry ht[HT_SIZE];
static int curGen = 0;

static unsigned int htHash(long long k) {
    k ^= k >> 33;
    k *= 0xff51afd7ed558ccdLL;
    k ^= k >> 33;
    k *= 0xc4ceb9fe1a85ec53LL;
    k ^= k >> 33;
    return (unsigned int)(k & HT_MASK);
}

static int htGet(long long key) {
    unsigned int h = htHash(key);
    while (1) {
        if (ht[h].gen != curGen) return -1;
        if (ht[h].key == key) return ht[h].val;
        h = (h + 1) & HT_MASK;
    }
}

static void htSet(long long key, int val) {
    unsigned int h = htHash(key);
    while (ht[h].gen == curGen && ht[h].key != key)
        h = (h + 1) & HT_MASK;
    ht[h].key = key;
    ht[h].val = val;
    ht[h].gen = curGen;
}

static char* gs;
static int gn, gk;

static int dp(int i, int mask, int changed) {
    if (i == gn) return 1;
    long long key = ((long long)i * 134217728LL + mask) * 2 + changed;
    int cached = htGet(key);
    if (cached >= 0) return cached;

    int bit = 1 << (gs[i] - 'a');
    int newMask = mask | bit;
    int res;
    if (__builtin_popcount(newMask) <= gk) {
        res = dp(i + 1, newMask, changed);
    } else {
        res = 1 + dp(i + 1, bit, changed);
    }
    if (!changed) {
        for (int c = 0; c < 26; c++) {
            int m2 = mask | (1 << c);
            int r;
            if (__builtin_popcount(m2) <= gk) {
                r = dp(i + 1, m2, 1);
            } else {
                r = 1 + dp(i + 1, 1 << c, 1);
            }
            if (r > res) res = r;
        }
    }
    htSet(key, res);
    return res;
}

int maxPartitionsAfterOperations(char* s, int k) {
    if (k >= 26) return 1;
    curGen++;
    gs = s;
    gn = strlen(s);
    gk = k;
    return dp(0, 0, 0);
}
