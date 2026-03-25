void sortDigits(char* s) {
    int n = strlen(s);
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (s[i] > s[j]) { char t = s[i]; s[i] = s[j]; s[j] = t; }
}

bool reorderedPowerOf2(int n) {
    char target[11], buf[11];
    sprintf(target, "%d", n);
    sortDigits(target);
    for (int i = 0; i < 31; i++) {
        sprintf(buf, "%d", 1 << i);
        sortDigits(buf);
        if (strcmp(target, buf) == 0) return true;
    }
    return false;
}
