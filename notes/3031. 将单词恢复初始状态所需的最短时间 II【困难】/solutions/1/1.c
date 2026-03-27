#include <string.h>

int minimumTimeToInitialState(char* word, int k) {
    int n = strlen(word);
    int* z = (int*)calloc(n, sizeof(int));
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i < r) z[i] = (r - i < z[i - l]) ? r - i : z[i - l];
        while (i + z[i] < n && word[z[i]] == word[i + z[i]]) z[i]++;
        if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    for (int t = 1; t * k < n; t++) {
        if (z[t * k] >= n - t * k) { free(z); return t; }
    }
    free(z);
    return (n + k - 1) / k;
}
