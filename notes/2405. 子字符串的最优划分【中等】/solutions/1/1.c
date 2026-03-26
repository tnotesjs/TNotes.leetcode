int partitionString(char* s) {
    int count = 1;
    int seen = 0;
    for (int i = 0; s[i]; i++) {
        int bit = 1 << (s[i] - 'a');
        if (seen & bit) {
            count++;
            seen = 0;
        }
        seen |= bit;
    }
    return count;
}
