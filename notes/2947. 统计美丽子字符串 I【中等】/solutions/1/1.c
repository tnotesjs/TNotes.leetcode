int beautifulSubstrings(char* s, int k) {
    int n = strlen(s);
    int count = 0;
    for (int i = 0; i < n; i++) {
        int v = 0, c = 0;
        for (int j = i; j < n; j++) {
            char ch = s[j];
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') v++;
            else c++;
            if (v == c && (long long)v * c % k == 0) count++;
        }
    }
    return count;
}
