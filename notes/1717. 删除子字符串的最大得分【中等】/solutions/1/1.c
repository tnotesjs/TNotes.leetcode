#include <stdlib.h>
#include <string.h>

int maximumGain(char* s, int x, int y) {
    char first = 'a', second = 'b';
    int hi = x, lo = y;
    if (x < y) { first = 'b'; second = 'a'; hi = y; lo = x; }
    int n = strlen(s);
    char* stack = (char*)malloc(n + 1);
    int top = 0, res = 0;
    for (int i = 0; i < n; i++) {
        if (top > 0 && stack[top-1] == first && s[i] == second) {
            top--; res += hi;
        } else {
            stack[top++] = s[i];
        }
    }
    int n2 = top; top = 0;
    char* buf = (char*)malloc(n2 + 1);
    for (int i = 0; i < n2; i++) {
        if (top > 0 && buf[top-1] == second && stack[i] == first) {
            top--; res += lo;
        } else {
            buf[top++] = stack[i];
        }
    }
    free(stack); free(buf);
    return res;
}
