int appendCharacters(char* s, char* t) {
    int j = 0, tLen = strlen(t);
    for (int i = 0; s[i] && j < tLen; i++) {
        if (s[i] == t[j]) j++;
    }
    return tLen - j;
}
