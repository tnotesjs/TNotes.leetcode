#include <string.h>

int countPrefixSuffixPairs(char** words, int wordsSize) {
    int count = 0;
    for (int i = 0; i < wordsSize; i++) {
        int len1 = strlen(words[i]);
        for (int j = i + 1; j < wordsSize; j++) {
            int len2 = strlen(words[j]);
            if (len1 > len2) continue;
            if (strncmp(words[j], words[i], len1) == 0 &&
                strncmp(words[j] + len2 - len1, words[i], len1) == 0) {
                count++;
            }
        }
    }
    return count;
}
