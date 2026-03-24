#define HASH_SIZE 100003
typedef struct Entry { long long key; int val; struct Entry* next; } Entry;

Entry* table[HASH_SIZE];

int hashIdx(long long key) { return (int)(((unsigned long long)key) % HASH_SIZE); }

void put(long long key, int val) {
    int idx = hashIdx(key);
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) { e->val = val; return; }
    Entry* e = (Entry*)malloc(sizeof(Entry));
    e->key = key; e->val = val; e->next = table[idx]; table[idx] = e;
}

int get(long long key) {
    int idx = hashIdx(key);
    for (Entry* e = table[idx]; e; e = e->next)
        if (e->key == key) return e->val;
    return 0;
}

int count;

void dfs(struct TreeNode* node, long long prefix, int targetSum) {
    if (!node) return;
    prefix += node->val;
    count += get(prefix - targetSum);
    put(prefix, get(prefix) + 1);
    dfs(node->left, prefix, targetSum);
    dfs(node->right, prefix, targetSum);
    put(prefix, get(prefix) - 1);
}

int pathSum(struct TreeNode* root, int targetSum) {
    memset(table, 0, sizeof(table));
    count = 0;
    put(0, 1);
    dfs(root, 0, targetSum);
    // free hash
    for (int i = 0; i < HASH_SIZE; i++) {
        Entry* e = table[i];
        while (e) { Entry* t = e; e = e->next; free(t); }
    }
    return count;
}
