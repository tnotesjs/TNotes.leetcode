#include <string.h>

int longestWPI(int* hours, int hoursSize) {
    // offset by hoursSize to allow negative indices
    int* first = malloc((2 * hoursSize + 1) * sizeof(int));
    memset(first, -2, (2 * hoursSize + 1) * sizeof(int));
    int offset = hoursSize;
    int prefix = 0, res = 0;
    for (int i = 0; i < hoursSize; i++) {
        prefix += hours[i] > 8 ? 1 : -1;
        if (prefix > 0) {
            res = i + 1;
        } else {
            if (first[prefix + offset] == -2) first[prefix + offset] = i;
            if (prefix - 1 + offset >= 0 && first[prefix - 1 + offset] != -2) {
                int len = i - first[prefix - 1 + offset];
                if (len > res) res = len;
            }
        }
    }
    free(first);
    return res;
}
