int cmp(const void* a, const void* b) { return *(char*)a - *(char*)b; }

bool checkStrings(char* s1, char* s2) {
    int n = strlen(s1);
    char *e1 = malloc(n), *o1 = malloc(n), *e2 = malloc(n), *o2 = malloc(n);
    int ei = 0, oi = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) { e1[ei] = s1[i]; e2[ei] = s2[i]; ei++; }
        else { o1[oi] = s1[i]; o2[oi] = s2[i]; oi++; }
    }
    qsort(e1, ei, 1, cmp); qsort(e2, ei, 1, cmp);
    qsort(o1, oi, 1, cmp); qsort(o2, oi, 1, cmp);
    bool res = memcmp(e1, e2, ei) == 0 && memcmp(o1, o2, oi) == 0;
    free(e1); free(o1); free(e2); free(o2);
    return res;
}
