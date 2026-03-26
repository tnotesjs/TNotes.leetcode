bool canMakeSubsequence(char* str1, char* str2) {
    int j = 0;
    for (int i = 0; str1[i] && str2[j]; i++) {
        if (str1[i] == str2[j] || (str1[i] - 'a' + 1) % 26 + 'a' == str2[j]) {
            j++;
        }
    }
    return str2[j] == '\0';
}
