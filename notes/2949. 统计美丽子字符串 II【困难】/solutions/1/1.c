#define HASH_SIZE 100003

typedef struct Node {
    int diff, pos, count;
    struct Node* next;
} Node;

long long beautifulSubstrings(char* s, int k) {
    int v0 = 1, temp = k;
    for (int p = 2; (long long)p * p <= temp; p++) {
        int e = 0;
        while (temp % p == 0) { temp /= p; e++; }
        for (int i = 0; i < (e + 1) / 2; i++) v0 *= p;
    }
    if (temp > 1) v0 *= temp;

    int mod = 2 * v0;
    int n = strlen(s);
    Node** table = (Node**)calloc(HASH_SIZE, sizeof(Node*));
    long long count = 0;
    int diff = 0;

    // 插入初始状态 (0, 0)
    unsigned h0 = ((unsigned)(0 + n) * 2017 + 0) % HASH_SIZE;
    Node* init = (Node*)malloc(sizeof(Node));
    init->diff = 0; init->pos = 0; init->count = 1; init->next = table[h0];
    table[h0] = init;

    for (int i = 0; i < n; i++) {
        char ch = s[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') diff++;
        else diff--;
        int pos = (i + 1) % mod;
        unsigned h = ((unsigned)(diff + n) * 2017 + pos) % HASH_SIZE;
        Node* cur = table[h];
        Node* found = NULL;
        while (cur) {
            if (cur->diff == diff && cur->pos == pos) { found = cur; break; }
            cur = cur->next;
        }
        if (found) {
            count += found->count;
            found->count++;
        } else {
            Node* nd = (Node*)malloc(sizeof(Node));
            nd->diff = diff; nd->pos = pos; nd->count = 1;
            nd->next = table[h]; table[h] = nd;
        }
    }

    for (int i = 0; i < HASH_SIZE; i++) {
        Node* cur = table[i];
        while (cur) { Node* next = cur->next; free(cur); cur = next; }
    }
    free(table);
    return count;
}
