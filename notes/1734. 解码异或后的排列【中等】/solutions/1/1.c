#include <stdlib.h>

int* decode(int* encoded, int encodedSize, int* returnSize) {
    int n = encodedSize + 1;
    *returnSize = n;
    int totalXor = 0;
    for (int i = 1; i <= n; i++) totalXor ^= i;
    int oddXor = 0;
    for (int i = 1; i < n - 1; i += 2) oddXor ^= encoded[i];
    int* perm = (int*)malloc(n * sizeof(int));
    perm[0] = totalXor ^ oddXor;
    for (int i = 0; i < n - 1; i++) perm[i + 1] = perm[i] ^ encoded[i];
    return perm;
}
