#include <string.h>
#include <stdlib.h>

char* lastNonEmptyString(char* s) {
    int freq[26] = {0};
    int lastPos[26];
    memset(lastPos, -1, sizeof(lastPos));
    int n = strlen(s);
    for (int i = 0; i < n; i++) {
        freq[s[i] - 'a']++;
        lastPos[s[i] - 'a'] = i;
    }
    int maxFreq = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > maxFreq) maxFreq = freq[i];
    int pairs[26][2], cnt = 0;
    for (int i = 0; i < 26; i++) {
        if (freq[i] == maxFreq) {
            pairs[cnt][0] = lastPos[i];
            pairs[cnt][1] = i;
            cnt++;
        }
    }
    for (int i = 0; i < cnt - 1; i++)
        for (int j = i + 1; j < cnt; j++)
            if (pairs[i][0] > pairs[j][0]) {
                int t0 = pairs[i][0], t1 = pairs[i][1];
                pairs[i][0] = pairs[j][0]; pairs[i][1] = pairs[j][1];
                pairs[j][0] = t0; pairs[j][1] = t1;
            }
    char* res = (char*)malloc(cnt + 1);
    for (int i = 0; i < cnt; i++) res[i] = 'a' + pairs[i][1];
    res[cnt] = 0;
    return res;
}
