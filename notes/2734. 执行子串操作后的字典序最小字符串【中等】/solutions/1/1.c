char* smallestString(char* s) {
    int n = strlen(s);
    char* res = (char*)malloc(n + 1);
    strcpy(res, s);
    int i = 0;
    while (i < n && res[i] == 'a') i++;
    if (i == n) { res[n - 1] = 'z'; return res; }
    while (i < n && res[i] != 'a') { res[i]--; i++; }
    return res;
}
