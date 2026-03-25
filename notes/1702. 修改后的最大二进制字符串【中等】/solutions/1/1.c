#include <stdlib.h>
#include <string.h>

char* maximumBinaryString(char* binary) {
    int n = strlen(binary);
    int firstZero = -1;
    for (int i = 0; i < n; i++) {
        if (binary[i] == '0') { firstZero = i; break; }
    }
    if (firstZero == -1) return binary;
    int zeros = 0;
    for (int i = firstZero; i < n; i++) {
        if (binary[i] == '0') zeros++;
    }
    char* res = (char*)malloc(n + 1);
    memset(res, '1', n);
    res[firstZero + zeros - 1] = '0';
    res[n] = '\0';
    return res;
}
