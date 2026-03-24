#define HASH_SIZE 10007
typedef struct Entry { int key; int val; struct Entry* next; } Entry;
Entry* table[HASH_SIZE];
int maxFreq;

void addFreq(int key) {
    int idx = ((unsigned int)key) % HASH_SIZE;
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) { e->val++; if (e->val > maxFreq) maxFreq = e->val; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = 1; e->next = table[idx]; table[idx] = e;
    if (1 > maxFreq) maxFreq = 1;
}

int dfs(struct TreeNode* node) {
    if (!node) return 0;
    int sum = node->val + dfs(node->left) + dfs(node->right);
    addFreq(sum);
    return sum;
}

int* findFrequentTreeSum(struct TreeNode* root, int* returnSize) {
    memset(table, 0, sizeof(table));
    maxFreq = 0;
    dfs(root);
    int* res = (int*)malloc(sizeof(int) * 10000);
    *returnSize = 0;
    for (int i = 0; i < HASH_SIZE; i++)
        for (Entry* e = table[i]; e; e = e->next)
            if (e->val == maxFreq) res[(*returnSize)++] = e->key;
    // free
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = table[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
    }
    return res;
}
