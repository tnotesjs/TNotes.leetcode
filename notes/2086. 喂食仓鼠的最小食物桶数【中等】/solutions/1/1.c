int minimumBuckets(char* hamsters) {
    int n = strlen(hamsters);
    char* s = (char*)malloc((n + 1) * sizeof(char));
    strcpy(s, hamsters);
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == 'H') {
            if (i > 0 && s[i - 1] == 'B') continue;
            if (i + 1 < n && s[i + 1] == '.') {
                s[i + 1] = 'B';
                count++;
            } else if (i > 0 && s[i - 1] == '.') {
                s[i - 1] = 'B';
                count++;
            } else {
                free(s);
                return -1;
            }
        }
    }
    free(s);
    return count;
}
