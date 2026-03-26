int removeAlmostEqualCharacters(char* word) {
    int count = 0, n = strlen(word);
    int i = 1;
    while (i < n) {
        if (abs(word[i] - word[i - 1]) <= 1) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }
    return count;
}
