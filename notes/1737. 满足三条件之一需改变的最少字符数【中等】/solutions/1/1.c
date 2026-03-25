#include <string.h>

int minCharacters(char* a, char* b) {
    int cntA[26] = {0}, cntB[26] = {0};
    int la = strlen(a), lb = strlen(b);
    for (int i = 0; i < la; i++) cntA[a[i] - 'a']++;
    for (int i = 0; i < lb; i++) cntB[b[i] - 'a']++;
    int res = la + lb;
    for (int i = 0; i < 26; i++) {
        int c = la + lb - cntA[i] - cntB[i];
        if (c < res) res = c;
    }
    int preA = 0, preB = 0;
    for (int i = 0; i < 25; i++) {
        preA += cntA[i]; preB += cntB[i];
        int c1 = (la - preA) + preB;
        int c2 = preA + (lb - preB);
        if (c1 < res) res = c1;
        if (c2 < res) res = c2;
    }
    return res;
}
