char* decodeAtIndex(char* s, int k) {
    long long size = 0;
    int n = strlen(s);
    for (int i = 0; i < n; i++) {
        if (s[i] >= '2' && s[i] <= '9') size *= (s[i] - '0');
        else size++;
    }
    char* res = (char*)malloc(2);
    res[1] = '\0';
    for (int i = n - 1; i >= 0; i--) {
        k %= size;
        if (k == 0 && s[i] >= 'a' && s[i] <= 'z') { res[0] = s[i]; return res; }
        if (s[i] >= '2' && s[i] <= '9') size /= (s[i] - '0');
        else size--;
    }
    return res;
}
