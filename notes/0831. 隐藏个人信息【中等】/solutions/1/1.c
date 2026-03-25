char* maskPII(char* s) {
    char* res = (char*)malloc(100);
    if (strchr(s, '@')) {
        int n = strlen(s), at = 0;
        for (int i = 0; i < n; i++) {
            if (s[i] >= 'A' && s[i] <= 'Z') s[i] += 32;
            if (s[i] == '@') at = i;
        }
        sprintf(res, "%c*****%c%s", s[0], s[at - 1], s + at);
        return res;
    }
    char digits[20]; int dLen = 0;
    for (int i = 0; s[i]; i++) if (s[i] >= '0' && s[i] <= '9') digits[dLen++] = s[i];
    digits[dLen] = '\0';
    char local[13];
    sprintf(local, "***-***-%.4s", digits + dLen - 4);
    if (dLen == 10) { strcpy(res, local); return res; }
    res[0] = '+';
    for (int i = 0; i < dLen - 10; i++) res[1 + i] = '*';
    res[1 + dLen - 10] = '-';
    strcpy(res + 2 + dLen - 10, local);
    return res;
}
