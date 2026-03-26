long long maximumSubsequenceCount(char* text, char* pattern) {
    char a = pattern[0], b = pattern[1];
    long long countA = 0, countB = 0, pairs = 0;
    for (int i = 0; text[i]; i++) {
        if (text[i] == b) {
            pairs += countA;
            countB++;
        }
        if (text[i] == a) countA++;
    }
    return pairs + (countA > countB ? countA : countB);
}
