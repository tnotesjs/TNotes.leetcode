int isVowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int maxVowels(char* s, int k) {
    int n = strlen(s), count = 0;
    for (int i = 0; i < k; i++) if (isVowel(s[i])) count++;
    int maxCount = count;
    for (int i = k; i < n; i++) {
        if (isVowel(s[i])) count++;
        if (isVowel(s[i - k])) count--;
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
}
