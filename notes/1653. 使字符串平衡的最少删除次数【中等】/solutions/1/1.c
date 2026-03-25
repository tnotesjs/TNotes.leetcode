int minimumDeletions(char* s) {
    int bCount = 0, res = 0;
    for (int i = 0; s[i]; i++) {
        if (s[i] == 'b') {
            bCount++;
        } else {
            res = (res + 1 < bCount) ? res + 1 : bCount;
        }
    }
    return res;
}
