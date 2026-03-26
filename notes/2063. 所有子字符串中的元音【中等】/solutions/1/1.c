long long countVowels(char* word) {
    long long ans = 0;
    int n = strlen(word);
    for (int i = 0; i < n; i++) {
        char c = word[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            ans += (long long)(i + 1) * (n - i);
        }
    }
    return ans;
}
