#include <string.h>

int res1593;

void bt1593(char* s, int idx, int n, char used[16][17], int usedSize) {
    if (idx == n) {
        if (usedSize > res1593) res1593 = usedSize;
        return;
    }
    char buf[17];
    for (int i = idx + 1; i <= n; i++) {
        int len = i - idx;
        strncpy(buf, s + idx, len);
        buf[len] = '\0';
        int found = 0;
        for (int j = 0; j < usedSize; j++)
            if (strcmp(used[j], buf) == 0) { found = 1; break; }
        if (!found) {
            strcpy(used[usedSize], buf);
            bt1593(s, i, n, used, usedSize + 1);
        }
    }
}

int maxUniqueSplit(char* s) {
    res1593 = 0;
    char used[16][17];
    bt1593(s, 0, strlen(s), used, 0);
    return res1593;
}
