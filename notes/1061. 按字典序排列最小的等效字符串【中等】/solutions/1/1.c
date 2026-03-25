int parent[26];

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

void unite(int a, int b) {
    int ra = find(a), rb = find(b);
    if (ra == rb) return;
    if (ra < rb) parent[rb] = ra;
    else parent[ra] = rb;
}

char* smallestEquivalentString(char* s1, char* s2, char* baseStr) {
    for (int i = 0; i < 26; i++) parent[i] = i;
    for (int i = 0; s1[i]; i++) {
        unite(s1[i] - 'a', s2[i] - 'a');
    }
    int len = strlen(baseStr);
    char* res = malloc(len + 1);
    for (int i = 0; i < len; i++) {
        res[i] = find(baseStr[i] - 'a') + 'a';
    }
    res[len] = '\0';
    return res;
}
