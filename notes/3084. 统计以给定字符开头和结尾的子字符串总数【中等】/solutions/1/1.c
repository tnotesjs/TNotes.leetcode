long long countSubstrings(char* s, char c) {
    long long count = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == c) count++;
    }
    return count * (count + 1) / 2;
}
