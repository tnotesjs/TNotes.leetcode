// 简单哈希集合
#define HCAP 400007
typedef struct HNode { char *s; struct HNode *next; } HNode;

int longestValidSubstring(char *word, char **forbidden, int forbiddenSize) {
    HNode *table[HCAP];
    memset(table, 0, sizeof(table));
    unsigned hashStr(const char *s, int len) {
        unsigned h = 0;
        for (int i = 0; i < len; i++) h = h * 31 + s[i];
        return h % HCAP;
    }
    void insert(char *s) {
        unsigned h = hashStr(s, strlen(s));
        HNode *node = (HNode *)malloc(sizeof(HNode));
        node->s = s;
        node->next = table[h];
        table[h] = node;
    }
    int contains(const char *s, int len) {
        unsigned h = hashStr(s, len);
        HNode *cur = table[h];
        while (cur) {
            if ((int)strlen(cur->s) == len && strncmp(cur->s, s, len) == 0) return 1;
            cur = cur->next;
        }
        return 0;
    }
    for (int i = 0; i < forbiddenSize; i++) insert(forbidden[i]);
    int n = strlen(word);
    int res = 0, right = n;
    for (int left = n - 1; left >= 0; left--) {
        int lim = left + 10 < right ? left + 10 : right;
        for (int k = left; k < lim; k++) {
            if (contains(word + left, k - left + 1)) {
                right = k;
                break;
            }
        }
        if (right - left > res) res = right - left;
    }
    for (int i = 0; i < HCAP; i++) {
        HNode *cur = table[i];
        while (cur) { HNode *tmp = cur; cur = cur->next; free(tmp); }
    }
    return res;
}
