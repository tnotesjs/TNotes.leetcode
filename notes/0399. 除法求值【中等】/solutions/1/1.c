// 带权并查集
char* names[1000];
double w[1000];
int par[1000];
int cnt;

int getId(char* s) {
    for (int i = 0; i < cnt; i++) if (strcmp(names[i], s) == 0) return i;
    names[cnt] = (char*)malloc(strlen(s) + 1);
    strcpy(names[cnt], s);
    par[cnt] = cnt; w[cnt] = 1.0;
    return cnt++;
}

int find(int x) {
    if (par[x] != x) {
        int root = find(par[x]);
        w[x] *= w[par[x]];
        par[x] = root;
    }
    return par[x];
}

void unite(int a, int b, double val) {
    int ra = find(a), rb = find(b);
    if (ra == rb) return;
    par[ra] = rb;
    w[ra] = val * w[b] / w[a];
}

double* calcEquation(char*** equations, int equationsSize, int* equationsColSize,
    double* values, int valuesSize, char*** queries, int queriesSize,
    int* queriesColSize, int* returnSize) {
    cnt = 0;
    for (int i = 0; i < equationsSize; i++) {
        int a = getId(equations[i][0]), b = getId(equations[i][1]);
        unite(a, b, values[i]);
    }
    double* res = (double*)malloc(sizeof(double) * queriesSize);
    *returnSize = queriesSize;
    for (int i = 0; i < queriesSize; i++) {
        int a = -1, b = -1;
        for (int j = 0; j < cnt; j++) {
            if (strcmp(names[j], queries[i][0]) == 0) a = j;
            if (strcmp(names[j], queries[i][1]) == 0) b = j;
        }
        if (a == -1 || b == -1 || find(a) != find(b)) res[i] = -1.0;
        else res[i] = w[a] / w[b];
    }
    for (int i = 0; i < cnt; i++) free(names[i]);
    return res;
}
