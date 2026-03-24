char* addStrings(const char* a, const char* b) {
    int la = strlen(a), lb = strlen(b);
    int maxLen = (la > lb ? la : lb) + 2;
    char* res = (char*)calloc(maxLen, 1);
    int i = la - 1, j = lb - 1, k = maxLen - 2, carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        int sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        res[k--] = sum % 10 + '0';
        carry = sum / 10;
    }
    return res + k + 1;
}

bool isAdditiveNumber(char* num) {
    int n = strlen(num);
    for (int i = 1; i <= n / 2; i++) {
        for (int j = i + 1; j < n; j++) {
            if (i > 1 && num[0] == '0') break;
            if (j - i > 1 && num[i] == '0') continue;
            char s1[n + 1], s2[n + 1];
            strncpy(s1, num, i); s1[i] = '\0';
            strncpy(s2, num + i, j - i); s2[j - i] = '\0';
            char *a = strdup(s1), *b = strdup(s2);
            int pos = j;
            while (pos < n) {
                char* c = addStrings(a, b);
                int cl = strlen(c);
                if (strncmp(num + pos, c, cl) != 0) break;
                pos += cl;
                a = b;
                b = c;
            }
            if (pos == n) return true;
        }
    }
    return false;
}
