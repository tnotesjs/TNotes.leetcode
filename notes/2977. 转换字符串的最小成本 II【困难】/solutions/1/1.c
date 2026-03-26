typedef struct TrieNode {
    struct TrieNode* children[26];
    int id;
} TrieNode;

TrieNode* newTrieNode() {
    TrieNode* node = calloc(1, sizeof(TrieNode));
    node->id = -1;
    return node;
}

int trieInsert(TrieNode* root, char* s, int* nextId) {
    TrieNode* cur = root;
    while (*s) {
        int c = *s - 'a';
        if (!cur->children[c]) cur->children[c] = newTrieNode();
        cur = cur->children[c];
        s++;
    }
    if (cur->id == -1) cur->id = (*nextId)++;
    return cur->id;
}

int trieLookup(TrieNode* root, char* s, int start, int len) {
    TrieNode* cur = root;
    for (int i = start; i < start + len; i++) {
        int c = s[i] - 'a';
        if (!cur->children[c]) return -1;
        cur = cur->children[c];
    }
    return cur->id;
}

long long minimumCost(char* source, char* target, char** original, int originalSize, char** changed, int changedSize, int* cost, int costSize) {
    TrieNode* trie = newTrieNode();
    int nextId = 0;
    int origId[100], chgId[100];
    for (int i = 0; i < originalSize; i++) {
        origId[i] = trieInsert(trie, original[i], &nextId);
        chgId[i] = trieInsert(trie, changed[i], &nextId);
    }
    int sz = nextId;
    long long dist[200][200];
    for (int i = 0; i < sz; i++)
        for (int j = 0; j < sz; j++)
            dist[i][j] = i == j ? 0 : 1e18;
    for (int i = 0; i < costSize; i++)
        if (cost[i] < dist[origId[i]][chgId[i]])
            dist[origId[i]][chgId[i]] = cost[i];
    for (int k = 0; k < sz; k++)
        for (int i = 0; i < sz; i++)
            for (int j = 0; j < sz; j++)
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
    int lenSet[1001] = {0};
    int lengths[101], lenCount = 0;
    for (int i = 0; i < originalSize; i++) {
        int l = strlen(original[i]);
        if (!lenSet[l]) { lenSet[l] = 1; lengths[lenCount++] = l; }
    }
    int n = strlen(source);
    long long dp[1001];
    for (int i = 0; i <= n; i++) dp[i] = 1e18;
    dp[0] = 0;
    for (int i = 0; i < n; i++) {
        if (dp[i] >= 1e18) continue;
        if (source[i] == target[i] && dp[i] < dp[i + 1])
            dp[i + 1] = dp[i];
        for (int li = 0; li < lenCount; li++) {
            int len = lengths[li];
            if (i + len > n) continue;
            int sid = trieLookup(trie, source, i, len);
            if (sid == -1) continue;
            int tid = trieLookup(trie, target, i, len);
            if (tid == -1) continue;
            if (dist[sid][tid] < 1e18 && dp[i] + dist[sid][tid] < dp[i + len])
                dp[i + len] = dp[i] + dist[sid][tid];
        }
    }
    return dp[n] >= 1e18 ? -1 : dp[n];
}
