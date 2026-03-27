#include <string.h>
#include <math.h>

int minimumTimeToInitialState(char* word, int k) {
    int n = strlen(word);
    for (int t = 1; t * k < n; t++) {
        int start = t * k;
        int match = 1;
        for (int i = start; i < n; i++) {
            if (word[i] != word[i - start]) {
                match = 0;
                break;
            }
        }
        if (match) return t;
    }
    return (n + k - 1) / k;
}
