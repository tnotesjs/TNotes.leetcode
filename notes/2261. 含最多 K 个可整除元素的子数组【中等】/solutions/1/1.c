// Trie 去重
struct TrieNode2261 {
    struct TrieNode2261 **children;
    int childCount;
    int childCap;
    int *keys;
};

static struct TrieNode2261* newTrieNode2261() {
    struct TrieNode2261 *node = (struct TrieNode2261 *)malloc(sizeof(struct TrieNode2261));
    node->children = NULL; node->childCount = 0; node->childCap = 0; node->keys = NULL;
    return node;
}

static struct TrieNode2261* trieGet2261(struct TrieNode2261 *node, int key) {
    for (int i = 0; i < node->childCount; i++) {
        if (node->keys[i] == key) return node->children[i];
    }
    return NULL;
}

static struct TrieNode2261* trieInsert2261(struct TrieNode2261 *node, int key) {
    struct TrieNode2261 *child = trieGet2261(node, key);
    if (child) return child;
    if (node->childCount == node->childCap) {
        node->childCap = node->childCap == 0 ? 4 : node->childCap * 2;
        node->children = (struct TrieNode2261 **)realloc(node->children, node->childCap * sizeof(struct TrieNode2261 *));
        node->keys = (int *)realloc(node->keys, node->childCap * sizeof(int));
    }
    child = newTrieNode2261();
    node->keys[node->childCount] = key;
    node->children[node->childCount] = child;
    node->childCount++;
    return child;
}

static void trieFree2261(struct TrieNode2261 *node) {
    if (!node) return;
    for (int i = 0; i < node->childCount; i++) trieFree2261(node->children[i]);
    free(node->children); free(node->keys); free(node);
}

static int trieCount2261(struct TrieNode2261 *node) {
    int cnt = node->childCount;
    for (int i = 0; i < node->childCount; i++) cnt += trieCount2261(node->children[i]);
    return cnt;
}

int countDistinct(int* nums, int numsSize, int k, int p) {
    struct TrieNode2261 *root = newTrieNode2261();
    for (int i = 0; i < numsSize; i++) {
        int divCount = 0;
        struct TrieNode2261 *cur = root;
        for (int j = i; j < numsSize; j++) {
            if (nums[j] % p == 0) divCount++;
            if (divCount > k) break;
            cur = trieInsert2261(cur, nums[j]);
        }
    }
    int ans = trieCount2261(root);
    trieFree2261(root);
    return ans;
}
