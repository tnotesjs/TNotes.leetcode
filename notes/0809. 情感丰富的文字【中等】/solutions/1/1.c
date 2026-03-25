bool isStretchy(char* s, char* word) {
    int i = 0, j = 0, n = strlen(s), m = strlen(word);
    while (i < n && j < m) {
        if (s[i] != word[j]) return false;
        int lenS = 1, lenW = 1;
        while (i + lenS < n && s[i + lenS] == s[i]) lenS++;
        while (j + lenW < m && word[j + lenW] == word[j]) lenW++;
        if (lenS < lenW || (lenS > lenW && lenS < 3)) return false;
        i += lenS; j += lenW;
    }
    return i == n && j == m;
}

int expressiveWords(char* s, char** words, int wordsSize) {
    int res = 0;
    for (int i = 0; i < wordsSize; i++)
        if (isStretchy(s, words[i])) res++;
    return res;
}
